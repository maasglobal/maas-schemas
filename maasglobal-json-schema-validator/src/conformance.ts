import ajvFactory from 'ajv';
import * as fs from 'fs';
import * as glob from 'glob';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import * as path from 'path';
import { URL } from 'url';

import * as main from './main';

const ajv = ajvFactory({ allErrors: true });

const slash = '/';
const endpointSchema = 'endpoint.json';

// https://tools.ietf.org/html/rfc6901
const JP_ROOT = '#';

function checkExamples(
  uri: string,
  schema: JSONSchema7Definition,
  { validate }: main.Validator,
): void {
  if (typeof schema === 'boolean') {
    return;
  }
  const pointer = ((hash) => (hash.length > 0 ? hash : JP_ROOT))(new URL(uri).hash);

  const { examples } = schema;
  if (Array.isArray(examples)) {
    examples.forEach((example, i) => {
      const text = JSON.stringify(example);
      const cut = text.slice(0, 40);
      const display = text === cut ? cut : cut.concat('...');

      it(`must accept ${pointer}/examples/${i} ${display}`, () => {
        validate(uri, example);
      });
    });
  }
  const { default: defaultValue } = schema;
  if (typeof defaultValue !== 'undefined') {
    it(`must accept ${pointer}/default ${JSON.stringify(defaultValue)}`, () => {
      validate(uri, defaultValue);
    });
  }
  const { enum: consts } = schema;
  if (typeof consts !== 'undefined') {
    consts.forEach((constant, i) => {
      it(`must accept ${pointer}/enum/${i} ${JSON.stringify(constant)}`, () => {
        validate(uri, constant);
      });
    });
  }
  const { const: constant } = schema;
  if (typeof constant !== 'undefined') {
    it(`must accept ${pointer}/const ${JSON.stringify(constant)}`, () => {
      validate(uri, constant);
    });
  }
}

function checkDeclarations(
  uri: string,
  schema: JSONSchema7,
  validator: main.Validator,
): void {
  const pointer = ((hash) => (hash.length > 0 ? hash : JP_ROOT))(new URL(uri).hash);

  if (pointer === JP_ROOT) {
    it(`must have id ${uri}`, () => {
      expect(schema.$id).toEqual(uri);
    });
    checkExamples(uri, schema, validator);
    Object.entries(schema.definitions ?? {}).forEach(([defName, def]) => {
      const defPath = [JP_ROOT, 'definitions', defName].join('/');
      const defUri = ((tmp) => {
        // eslint-disable-next-line fp/no-mutation
        tmp.hash = defPath;
        return tmp.href;
      })(new URL(uri));
      if (typeof def !== 'boolean') {
        checkDeclarations(defUri, def, validator);
      }
    });
  } else {
    describe(pointer, () => {
      checkExamples(uri, schema, validator);
    });
  }
}

type URLTemplate = string;
type URI = string;

function fromEndpointURL(href: URLTemplate): URI {
  const adminPrefix = 'https://internal.maas.global/admin-api/';
  const relative = href.replace(/^\{[^}]*\}/, adminPrefix);
  const [operation, id, ...path] = relative.split(slash).reverse();
  if (id?.startsWith('{')) {
    return [endpointSchema, operation, ...path].reverse().join(slash);
  }
  return [endpointSchema, operation, `${id}-plural`, ...path].reverse().join(slash);
}

function checkEndpoint(uri: string, schema: JSONSchema7): void {
  it('must define endpoint URL that reflects URI', () => {
    const imp = 'implementation';
    const hyperSchema: any = schema;
    const links: Array<any> = hyperSchema?.links ?? [];
    const [link, ...extra] = links.filter(({ rel }) => rel === imp);
    expect(extra).toStrictEqual([]);
    const { href } = link;
    const generated = fromEndpointURL(href);
    expect(generated).toStrictEqual(uri);
  });
}

export function testSchemaPackage(
  packageRoot: string,
  baseURI: string,
  deps: main.Registries,
): void {
  const schemaDir = path.join(packageRoot, 'schemas');
  const registryFilePath = path.resolve(path.join(packageRoot, 'registry'));

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const registry = require(registryFilePath);

  const validator = main.validator([...deps, registry]);

  describe('Source schemas must be valid JSON Schemas', () => {
    glob.sync(`${schemaDir}/**/*.json`).forEach((schemaPath) => {
      const filePath = path.resolve(schemaPath);
      const uri = ((tmp) => {
        // eslint-disable-next-line fp/no-mutation
        tmp.pathname = path.relative(schemaDir, schemaPath);
        return tmp.href;
      })(new URL(baseURI));
      describe(`Schema ${filePath}`, () => {
        const raw = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const schema = JSON.parse(raw);
        it('must be a valid schema', () => {
          const valid = ajv.validateSchema(schema);
          expect(ajv.errors ?? []).toStrictEqual([]);
          expect(valid).toEqual(true);
        });
        checkDeclarations(uri, schema, validator);
        if (uri.endsWith(slash.concat(endpointSchema))) {
          checkEndpoint(uri, schema);
        }
      });
    });
  });
}
