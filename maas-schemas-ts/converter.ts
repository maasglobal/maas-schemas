#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import * as gen from 'io-ts-codegen';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';

const createHelper = (d: gen.TypeDeclaration) =>
  `\n${gen.printStatic(d)}\n${gen.printRuntime(d)}\n`;

const definedHelper = createHelper(
  gen.typeDeclaration(
    'Defined',
    gen.unionCombinator([
      gen.unknownRecordType,
      gen.unknownArrayType,
      gen.stringType,
      gen.booleanType,
      gen.numberType,
      gen.nullType,
    ]),
  ),
);
const Defined = gen.customCombinator('Defined', 'Defined');

const supportedEverywhere = [
  '$ref',
  '$id',
  'title',
  'description',
  'definitions',
  'type',
  'properties',
  'patternProperties',
  'required',
  'additionalProperties',
  'allOf',
  'anyOf',
  'oneOf',
  'enum',
  'const',
  'items',
  'contains',
  'additionalItems',
  'default', // ignored
  'examples', // ignored
];
const supportedAtRoot = [
  'minimum',
  'maximum',
  'multipleOf',
  'minLength',
  'maxLength',
  'pattern',
  'minItems',
  'maxItems',
  'uniqueItems',
];

const [, , inputFile, outputDir, domain, strict] = process.argv;

if (domain.endsWith('/') === false) {
  // eslint-disable-next-line
  throw new Error('invalid domain argument');
}

const outputFile = path.join(outputDir, inputFile.split('.json').join('.ts'));

const schema: JSONSchema7 = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

const imps = new Set<string>();
const helpers = new Set<string>();
const exps = new Set<string>();
const titles: Record<string, string | undefined> = {};
const descriptions: Record<string, string | undefined> = {};

enum ErrorCode {
  WARNING = 1,
  ERROR = 2,
}
type OK = 0;
const OK: OK = 0;
type ReturnCode = OK | ErrorCode;
// eslint-disable-next-line
let returnCode: ReturnCode = OK;

function updateFailure(level: ErrorCode) {
  if (returnCode === ErrorCode.ERROR) {
    return;
  }
  // eslint-disable-next-line
  returnCode = level;
}

function reportError(level: 'INFO' | 'WARNING' | 'ERROR', message: string) {
  const lines = [`${level}: ${message}`, `  in ${inputFile}`];
  // eslint-disable-next-line
  console.error(lines.join('\n'));
}

function error(message: string) {
  updateFailure(ErrorCode.ERROR);
  reportError('ERROR', message);
  const escalate = "throw new Error('schema conversion failed')";
  return gen.customCombinator(escalate, escalate);
}
function warning(message: string) {
  updateFailure(ErrorCode.WARNING);
  reportError('WARNING', message);
}
function info(message: string) {
  reportError('INFO', message);
}

function notImplemented(pre: string, item: string, post: string, fatal = false) {
  const isOutsideRoot = supportedAtRoot.includes(item);
  const where = isOutsideRoot ? 'outside top-level definitions' : '';
  const message = [pre, item, post, 'not supported', where]
    .filter((s) => s.length > 0)
    .join(' ');

  if (fatal !== true && isOutsideRoot) {
    warning(message);
    return null;
  }
  return error(message);
}

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
}

const camelFromKebab = (kebab: string) => {
  const camel = kebab
    .split('-')
    .map(capitalize)
    .join('');
  return camel;
};

function parseRef(ref: string) {
  const parts = ref.split('#');
  if (parts.length === 1) {
    const [filePath] = parts;
    return { filePath, variableName: 'Default' };
  }
  if (parts.length > 2) {
    // eslint-disable-next-line
    throw new Error('unknown ref format');
  }
  const [filePath, jsonPath] = parts;
  // eslint-disable-next-line
  const jsonPathParts = jsonPath.split('/');
  if (jsonPathParts.length !== 3) {
    // eslint-disable-next-line
    throw new Error('unknown ref format');
  }
  const [empty, definitions, name] = jsonPathParts;
  if (empty !== '') {
    // eslint-disable-next-line
    throw new Error('unknown ref format');
  }
  if (definitions !== 'definitions') {
    // eslint-disable-next-line
    throw new Error('unknown ref format');
  }
  const variableName = camelFromKebab(name);
  return { filePath, variableName };
}

function fromPatternProperties(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('patternProperties' in schema && typeof schema.patternProperties !== 'undefined') {
    // the mapping from pattern to item is lost in the process
    // See https://github.com/microsoft/TypeScript/issues/6579
    warning('patternProperty support has limitations');

    // The Record must also support non-pattern properties
    const exactPairs = Object.entries(schema.properties || {}).map(
      <K extends string, V>([key, value]: [K, V]) => [`^${key}$`, value],
    );
    const fuzzyPairs = Object.entries(schema.patternProperties);
    const allPairs = exactPairs.concat(fuzzyPairs);
    const valueCombinators = allPairs.map(<K extends string, V>([_key, value]: [K, V]) =>
      fromSchema(value),
    );

    const valueCombinator = (() => {
      if (valueCombinators.length > 1) {
        return gen.unionCombinator(valueCombinators);
      }
      const [combinator] = valueCombinators;
      return combinator;
    })();

    return [gen.recordCombinator(gen.stringType, valueCombinator)];
  }
  return [];
}

function fromProperties(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('properties' in schema && typeof schema.properties !== 'undefined') {
    const combinator = gen.partialCombinator(
      Object.entries(schema.properties).map(<K extends string, V>([key, value]: [K, V]) =>
        gen.property(key, fromSchema(value)),
      ),
    );
    return [combinator];
  }
  return [];
}

function toInterfaceCombinator(schema: JSONSchema7): gen.TypeReference {
  const combinators = [...fromProperties(schema), ...fromPatternProperties(schema)];
  const combinator = (() => {
    if (combinators.length > 1) {
      return gen.intersectionCombinator(combinators);
    }
    if (combinators.length === 1) {
      const [combinator] = combinators;
      return combinator;
    }
    return gen.interfaceCombinator([]);
  })();

  if (schema.hasOwnProperty('additionalproperties') === false) {
    return combinator;
  }
  if (typeof schema.additionalProperties !== 'boolean') {
    const escalate = notImplemented('specific', 'additionalProperties', 'schema', true);
    if (escalate !== null) {
      return escalate;
    }
  }
  if (schema.additionalProperties === false) {
    return gen.exactCombinator(combinator);
  }
  return combinator;
}

function toArrayCombinator(schema: JSONSchema7): gen.TypeReference {
  if (
    'items' in schema &&
    typeof schema.items !== 'undefined' &&
    typeof schema.items !== 'boolean'
  ) {
    if (schema.items instanceof Array) {
      if ('additionalItems' in schema && schema.additionalItems === false) {
        const combinators = schema.items.map((s) => fromSchema(s));
        return gen.tupleCombinator(combinators);
      }
      // eslint-disable-next-line
      throw new Error('tuples with ...rest are not supported, set additionalItems false');
    }
    return gen.arrayCombinator(fromSchema(schema.items));
  }
  return gen.unknownArrayType;
}

function checkPattern(x: string, pattern: string): string {
  const stringLiteral = JSON.stringify(pattern);
  return `( typeof x !== 'string' || ${x}.match(RegExp(${stringLiteral}, 'u')) !== null )`;
}

function checkMinLength(x: string, minLength: number): string {
  return `( typeof x !== 'string' || ${x}.length >= ${minLength} )`;
}

function checkMaxLength(x: string, maxLength: number): string {
  return `( typeof x !== 'string' || ${x}.length <= ${maxLength} )`;
}

function checkMinimum(x: string, minimum: number): string {
  return `( typeof x !== 'number' || ${x} >= ${minimum} )`;
}

function checkMaximum(x: string, maximum: number): string {
  return `( typeof x !== 'number' || ${x} <= ${maximum} )`;
}

function checkMultipleOf(x: string, divisor: number): string {
  return `( typeof x !== 'number' || ${x} % ${divisor} === 0 )`;
}

function checkInteger(x: string): string {
  return `( Number.isInteger(${x}) )`;
}

function checkMinItems(x: string, minItems: number): string {
  return `( Array.isArray(x) === false || ${x}.length >= ${minItems} )`;
}

function checkMaxItems(x: string, maxItems: number): string {
  return `( Array.isArray(x) === false || ${x}.length <= ${maxItems} )`;
}

function checkUniqueItems(x: string): string {
  return `( Array.isArray(x) === false || ${x}.length === [...new Set(x)].length )`;
}

function generateChecks(x: string, schema: JSONSchema7): string {
  const checks: Array<string> = [
    ...(schema.pattern ? [checkPattern(x, schema.pattern)] : []),
    ...(schema.minLength ? [checkMinLength(x, schema.minLength)] : []),
    ...(schema.maxLength ? [checkMaxLength(x, schema.maxLength)] : []),
    ...(schema.minimum ? [checkMinimum(x, schema.minimum)] : []),
    ...(schema.maximum ? [checkMaximum(x, schema.maximum)] : []),
    ...(schema.multipleOf ? [checkMultipleOf(x, schema.multipleOf)] : []),
    ...(schema.type === 'integer' ? [checkInteger(x)] : []),
    ...(schema.minItems ? [checkMinItems(x, schema.minItems)] : []),
    ...(schema.maxItems ? [checkMaxItems(x, schema.maxItems)] : []),
    ...(schema.uniqueItems === true ? [checkUniqueItems(x)] : []),
  ];
  if (checks.length < 1) {
    return 'true';
  }
  return checks.join(' && ');
}

function fromRef(refString: string): gen.TypeReference {
  const ref = parseRef(refString);

  if (ref.filePath === '') {
    return gen.customCombinator(ref.variableName, ref.variableName, [ref.variableName]);
  }

  // eslint-disable-next-line
  const [withoutPath] = ref.filePath.split('/').reverse();
  const [basefile] = withoutPath.split('.json');
  const importName = `${camelFromKebab(basefile)}_`;
  if (ref.filePath.startsWith(domain)) {
    const URI = ref.filePath;
    const [, withoutDomain] = URI.split(domain);
    const [fullPath] = withoutDomain.split('.json');
    imps.add(`import * as ${importName} from 'maas-schemas-ts/${fullPath}';`);
  } else {
    const [relativePath] = ref.filePath.split('.json');
    imps.add(`import * as ${importName} from './${relativePath}';`);
  }
  const variableRef = `${importName}.${ref.variableName}`;
  return gen.customCombinator(variableRef, variableRef, [importName]);
}

function isSupported(feature: string, isRoot: boolean) {
  if (isRoot && supportedAtRoot.includes(feature)) {
    return true;
  }
  return supportedEverywhere.includes(feature);
}

function fromType(schema: JSONSchema7): [gen.TypeReference] | [] {
  if (Array.isArray(schema.type)) {
    const combinators = schema.type.map((t) => {
      // eslint-disable-next-line
      switch (t) {
        case 'string':
          return gen.stringType;
        case 'number':
        case 'integer':
          return gen.numberType;
        case 'boolean':
          return gen.booleanType;
        case 'null':
          return gen.nullType;
      }
      // eslint-disable-next-line
      throw new Error(`${t}s are not supported as part of type MULTIPLES`);
    });
    if (combinators.length === 1) {
      const [combinator] = combinators;
      return [combinator];
    }
    return [gen.unionCombinator(combinators)];
  }
  switch (schema.type) {
    case 'string':
      return [gen.stringType];
    case 'number':
    case 'integer':
      return [gen.numberType];
    case 'boolean':
      return [gen.booleanType];
    case 'null':
      return [gen.nullType];
    case 'object':
      return [toInterfaceCombinator(schema)];
    case 'array':
      return [toArrayCombinator(schema)];
  }
  if (typeof schema.type !== 'undefined') {
    const escalate = notImplemented('', JSON.stringify(schema.type), 'type', true);
    if (escalate !== null) {
      return [escalate];
    }
  }
  return [];
}

function fromRequired(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('required' in schema && typeof schema.required !== 'undefined') {
    const combinator = gen.interfaceCombinator(
      schema.required.map((key) => {
        helpers.add(definedHelper);
        return gen.property(key, Defined);
      }),
    );
    return [combinator];
  }
  return [];
}

function fromContains(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('contains' in schema && typeof schema.contains !== 'undefined') {
    warning('contains field not supported');
  }
  return [];
}

function fromEnum(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('enum' in schema && typeof schema.enum !== 'undefined') {
    const combinators = schema.enum.map((s) => {
      if (s === null) {
        return gen.nullType;
      }
      switch (typeof s) {
        case 'string':
        case 'boolean':
        case 'number':
          return gen.literalCombinator(s);
      }
      // eslint-disable-next-line
      throw new Error(`${typeof s}s are not supported as part of ENUM`);
    });
    if (combinators.length === 1) {
      const [combinator] = combinators;
      return [combinator];
    }
    return [gen.unionCombinator(combinators)];
  }
  return [];
}

function fromConst(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('const' in schema && typeof schema.const !== 'undefined') {
    switch (typeof schema.const) {
      case 'string':
      case 'boolean':
      case 'number':
        return [gen.literalCombinator(schema.const)];
    }
    // eslint-disable-next-line
    throw new Error(`${typeof schema.const}s are not supported as part of CONST`);
  }
  return [];
}

function fromAllOf(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('allOf' in schema && typeof schema.allOf !== 'undefined') {
    const combinators = schema.allOf.map((s) => fromSchema(s));
    if (combinators.length === 1) {
      const [combinator] = combinators;
      return [combinator];
    }
    return [gen.intersectionCombinator(combinators)];
  }
  return [];
}

function fromAnyOf(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('anyOf' in schema && typeof schema.anyOf !== 'undefined') {
    const combinators = schema.anyOf.map((s) => fromSchema(s));
    if (combinators.length === 1) {
      const [combinator] = combinators;
      return [combinator];
    }
    return [gen.unionCombinator(combinators)];
  }
  return [];
}

function fromOneOf(schema: JSONSchema7): [gen.TypeReference] | [] {
  if ('oneOf' in schema && typeof schema.oneOf !== 'undefined') {
    const combinators = schema.oneOf.map((s) => fromSchema(s));
    if (combinators.length === 1) {
      const [combinator] = combinators;
      return [combinator];
    }
    return [gen.unionCombinator(combinators)];
  }
  return [];
}

function fromSchema(schema: JSONSchema7Definition, isRoot = false): gen.TypeReference {
  if (typeof schema === 'boolean') {
    imps.add("import * as t from 'io-ts';");
    if (schema) {
      // accept anything
      return gen.unknownType;
    } else {
      // accept nothing
      return error('Not sure how to deal with a schema that matches nothing');
    }
  }
  if (
    isRoot === false &&
    typeof schema.type === 'string' &&
    ['string', 'number', 'integer'].includes(schema.type)
  ) {
    info(`primitive type "${schema.type}" used outside top-level definitions`);
  }
  // eslint-disable-next-line
  for (const key in schema) {
    if (isSupported(key, isRoot) !== true) {
      const escalate = notImplemented('', key, 'field');
      if (escalate !== null) {
        return escalate;
      }
    }
  }
  if ('$ref' in schema) {
    if (typeof schema['$ref'] === 'undefined') {
      // eslint-disable-next-line
      throw new Error('broken input');
    }
    return fromRef(schema['$ref']);
  }
  imps.add("import * as t from 'io-ts';");
  const combinators = [
    ...fromType(schema),
    ...fromRequired(schema),
    ...fromContains(schema),
    ...fromEnum(schema),
    ...fromConst(schema),
    ...fromAllOf(schema),
    ...fromAnyOf(schema),
    ...fromOneOf(schema),
  ];
  if (combinators.length > 1) {
    return gen.intersectionCombinator(combinators);
  }
  if (combinators.length === 1) {
    const [combinator] = combinators;
    return combinator;
  }
  if (generateChecks('x', schema).length > 1) {
    // skip checks
    return gen.unknownType;
  }
  // eslint-disable-next-line
  throw new Error(`unknown schema: ${JSON.stringify(schema)}`);
}

function fromDefinitions(
  definitions2: JSONSchema7['definitions'],
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  const definitions = definitions2 || {};
  return Object.entries(definitions).map(([k, v]: [string, JSONSchema7Definition]) => {
    const scem = v;
    const name = capitalize(k);

    if (typeof scem === 'boolean') {
      // booleans do not have meta data
      const title = undefined;
      const description = undefined;
      return [
        title,
        description,
        gen.typeDeclaration(
          name,
          gen.brandCombinator(fromSchema(scem, true), (_x) => 'true', name),
          true,
        ),
      ];
    }
    if ('$ref' in scem) {
      // ref's do not have meta data
      const title = undefined;
      const description = undefined;
      if (typeof scem['$ref'] === 'undefined') {
        // eslint-disable-next-line
        throw new Error('broken input');
      }
      return [title, description, gen.typeDeclaration(name, fromRef(scem['$ref']), true)];
    }
    return [
      scem.title,
      scem.description,
      gen.typeDeclaration(
        name,
        gen.brandCombinator(fromSchema(scem, true), (x) => generateChecks(x, scem), name),
        true,
      ),
    ];
  });
}

function fromNonRefRoot(
  schema: JSONSchema7,
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  // root schema info is printed in the beginning of the file
  const title = 'Default';
  const description = 'The default export. More information at the top.';
  return [
    [
      title,
      description,
      gen.typeDeclaration(
        'Default',
        gen.brandCombinator(
          fromSchema(schema, true),
          (x) => generateChecks(x, schema),
          'Default',
        ),
        true,
      ),
    ],
  ];
}

function fromRoot(
  root: JSONSchema7,
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  // root schema info is printed in the beginning of the file
  const title = 'Default';
  const description = 'The default export. More information at the top.';

  if ('$ref' in root) {
    if (typeof root['$ref'] === 'undefined') {
      // eslint-disable-next-line
      throw new Error('broken input');
    }
    exps.add('export default Default;');
    return [
      [title, description, gen.typeDeclaration('Default', fromRef(root['$ref']), true)],
    ];
  }
  const items = fromNonRefRoot(schema);
  if (items.length > 0) {
    imps.add("import * as t from 'io-ts';");
    exps.add('export default Default;');
  }
  return items;
}

function fromFile(
  schema: JSONSchema7,
): Array<[JSONSchema7['title'], JSONSchema7['description'], gen.TypeDeclaration]> {
  return fromDefinitions(schema.definitions).concat(fromRoot(schema));
}

// eslint-disable-next-line
const declarations = gen.sort(fromFile(schema as JSONSchema7).map(([t, c, d]) => {
    // eslint-disable-next-line
  titles[d.name] = t;
    // eslint-disable-next-line
  descriptions[d.name] = c;
    return d;
  }),
);
const defs: Array<[string, string, string]> = declarations.map((d) => [
  d.name,
  gen.printStatic(d),
  gen.printRuntime(d).replace(/\ninterface /, '\nexport interface '),
]);

if (returnCode === ErrorCode.ERROR) {
  process.exit(returnCode);
}
if (returnCode === ErrorCode.WARNING && strict === '--strict') {
  process.exit(returnCode);
}

function createParentDir(file) {
  const parentDir = path.dirname(file);
  if (fs.existsSync(parentDir)) {
    return;
  }
  createParentDir(parentDir);
  fs.mkdirSync(parentDir);
}
createParentDir(outputFile);

const fd = fs.openSync(outputFile, 'w');
fs.writeFileSync(fd, '');

const log = (a: string) => fs.appendFileSync(fd, `${a}\n`);

log('/*');
log('');
log(`${schema.title}`);
log(`${schema.description}`);
log('');
log('!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!');
log('');
log('*/');
log('');
imps.forEach(log);
log('');
helpers.forEach(log);
log('');
log(`export const schemaId = '${schema.$id}';`);

// eslint-disable-next-line
for (const [n, s, r] of defs) {
  log(`// ${titles[n] || n}`);
  log(`// ${descriptions[n] || 'The purpose of this remains a mystery'}`);
  log(s);
  log(r);
}

log('');
exps.forEach(log);
log('');
log('// Success');
fs.closeSync(fd);

process.stdout.write('.');
