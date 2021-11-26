'use strict';

/** @typedef {import('json-schema').JSONSchema7} JSONSchema7 */
/** @typedef {import('json-schema').JSONSchema7Definition} JSONSchema7Definition */

const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const glob = require('glob');
const ajvFactory = require('ajv');

const { validate } = require('../index');

const ajv = ajvFactory({ allErrors: true });

// https://tools.ietf.org/html/rfc6901
const JP_ROOT = '#';

/**
 * Examples checker
 *
 * @param uri string
 * @param schema JSONSchema7Definition
 * @returns void
 */
function checkExamples(uri, schema) {
  if (typeof schema === 'boolean') {
    return;
  }
  const pointer = new URL(uri).hash || JP_ROOT;

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
    Object.keys(invalid).forEach(b64 => {
      const text = Buffer.from(b64, 'base64').toString('ascii');
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
        throw new Error('Counterexample passed validation!');
      });
    });
  }
}

/**
 * Declaration checker
 *
 * @param uri string
 * @param schema JSONSchema7
 * @returns void
 */
function checkDeclarations(uri, schema) {
  const pointer = new URL(uri).hash || JP_ROOT;

  if (pointer === JP_ROOT) {
    it(`must have id ${uri}`, () => {
      expect(schema.$id).to.equal(uri);
    });
    checkExamples(uri, schema);
    Object.entries(schema.definitions || {}).forEach(([defName, def]) => {
      const defPath = [JP_ROOT, 'definitions', defName].join('/');
      const defUri = (tmp => {
        tmp.hash = defPath;
        return tmp.href;
      })(new URL(uri));
      checkDeclarations(defUri, def);
    });
  } else {
    describe(pointer, () => {
      checkExamples(uri, schema);
    });
  }
}

describe('Source schemas must be valid JSON Schemas', () => {
  glob.sync('schemas/**/*.json').forEach(schemaPath => {
    const filePath = path.resolve(__dirname, '..', schemaPath);
    const baseURI = 'https://schemas.maas.global/';
    const schemaDir = 'schemas';
    const uri = (tmp => {
      tmp.pathname = path.relative(schemaDir, schemaPath);
      return tmp.href;
    })(new URL(baseURI));
    describe(`Schema ${filePath}`, () => {
      const raw = fs.readFileSync(filePath, { encoding: 'UTF-8' });
      const schema = JSON.parse(raw);
      it('must be a valid schema', () => {
        const valid = ajv.validateSchema(schema);
        expect(ajv.errors || []).to.eql([]);
        expect(valid).to.be.true;
      });
      checkDeclarations(uri, schema);
    });
  });
});
