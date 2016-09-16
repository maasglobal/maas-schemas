'use strict';

const path = require('path');
const expect = require('chai').expect;
const glob = require('glob');
const ajvFactory = require('ajv');

const ajv = ajvFactory();

const globPromise = (pattern, options) => (
  new Promise((resolve, reject) => {
    glob(pattern, options || {}, (err, matches) => {
      if (err) return reject(err);
      return resolve(matches);
    });
  })
);

module.exports = function () {
  describe('Pre-built schemas should be valid JSON Schemas', () => {
    before(done => {
      return globPromise('prebuilt/**/*.json')
        .then(schemaPaths => {
          describe(`Validate ${schemaPaths.length} schemas`, () => {
            schemaPaths.forEach(schemaPath => {
              it(`should be a able to require a valid schema ${schemaPath}`, done => {
                const filePath = path.resolve(__dirname, '..', schemaPath);
                const schema = require(filePath);
                const valid = ajv.validateSchema(schema);
                expect(valid).to.be.true;
                done();
              });
            });
          });
          done();
        })
        .catch(error => done);
    });

    it('[placeholder to trigger before()]', done => {
      done();
    });
  });
};
