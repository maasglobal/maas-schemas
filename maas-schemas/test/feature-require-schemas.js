'use strict';

const path = require('path');
const { expect } = require('chai');
const glob = require('glob');
const ajvFactory = require('ajv');

const ajv = ajvFactory({ allErrors: true });

describe('Source schemas should be valid JSON Schemas', () => {
  glob.sync('schemas/**/*.json').forEach(schemaPath => {
    it(`should be a valid schema ${schemaPath}`, () => {
      const filePath = path.resolve(__dirname, '..', schemaPath);
      // eslint-disable-next-line import/no-dynamic-require
      const schema = require(filePath);
      const valid = ajv.validateSchema(schema);
      expect(ajv.errors || []).to.eql([]);
      expect(valid).to.be.true;
    });
  });
});
