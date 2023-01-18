import Ajv from 'ajv';
import * as fs from 'fs';
import * as glob from 'glob';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import * as path from 'path';
import { URL } from 'url';

import * as main from './main';

type InvalidExample = string;
type Description = string;
type InvalidExamples = Record<InvalidExample, Description>;
type JsonSchema = JSONSchema7 & { invalid?: InvalidExamples };
type JsonSchemaDefinition = JSONSchema7Definition & (boolean | JsonSchema);

const ajv = new Ajv({ allErrors: true });

const slash = '/';
const endpointSchema = 'endpoint.json';

// https://tools.ietf.org/html/rfc6901
const JP_ROOT = '#';

function checkExamples(
  uri: string,
  schema: JsonSchemaDefinition,
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

  const { invalid } = schema;
  if (typeof invalid !== 'undefined') {
    Object.keys(invalid).forEach((b64) => {
      const text = Buffer.from(b64, 'base64').toString('utf8');
      const cut = text.slice(0, 40);
      const display = text === cut ? cut : cut.concat('...');

      const counterExample = JSON.parse(text);
      const description = invalid[b64];
      it(`must reject ${pointer}/invalid/${b64} ${description} ${display}`, () => {
        try {
          validate(uri, counterExample);
        } catch (_validationError) {
          // counterexamples should fail validation
          return;
        }
        // eslint-disable-next-line fp/no-throw
        throw new Error('Counterexample passed validation!');
      });
    });
  }
}

function checkDeclarations(
  uri: string,
  schema: JsonSchema,
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

function checkEndpoint(uri: string, schema: JsonSchema): void {
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

/**
 * Conformance Test Runner
 *
 * @param packageRoot - absolute path for schema source directory root
 */
export function testSchemaPackage(packageRoot: string): void {
  const schemaDir = path.join(packageRoot, 'schemas');
  const manifestPath = path.join(packageRoot, 'schemas.json');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const manifest: main.Manifest = require(manifestPath);
  const baseURI = manifest.base;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const deps = Object.values(manifest.deps).map((dep) => require(dep));

  const schemaPaths = glob.sync(`${schemaDir}/**/*.json`);

  const schemas = schemaPaths.map((schemaPath) => require(schemaPath));

  const registry: main.Registry = {
    schemas,
  };

  const validator = main.validator([...deps, registry]);

  describe('Source schemas must be valid JSON Schemas', () => {
    schemaPaths.forEach((schemaPath) => {
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
