'use strict';

const path = require('path');
const { expect } = require('chai');
const glob = require('glob');
const ajvFactory = require('ajv');

const ajv = ajvFactory({ allErrors: true });

function globPromise(pattern, options) {
  return new Promise((resolve, reject) => {
    glob(pattern, options || {}, (err, matches) => {
      if (err) return reject(err);
      return resolve(matches);
    });
  });
}

describe('Source schemas should be valid JSON Schemas', () => {
  before(() => {
    return globPromise('schemas/**/*.json').then(schemaPaths => {
      describe(`Validate ${schemaPaths.length} schemas`, () => {
        schemaPaths.forEach(schemaPath => {
          it(`should be a able to require a valid schema ${schemaPath}`, () => {
            const filePath = path.resolve(__dirname, '..', schemaPath);
            // eslint-disable-next-line import/no-dynamic-require
            const schema = require(filePath);
            const valid = ajv.validateSchema(schema);
            expect(ajv.errors || []).to.eql([]);
            expect(valid).to.be.true;
          });
        });
      });
    });
  });

  it('[placeholder to trigger before()]', () => {
    return Promise.resolve();
  });
});
