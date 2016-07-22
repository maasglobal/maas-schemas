'use strict';

const path = require('path');
const index = require('../index.js');
const expect = require('chai').expect;
const glob = require('glob');

const globPromise = (pattern, options) => (
  new Promise((resolve, reject) => {
    glob(pattern, options || {}, (err, matches) => {
      if (err) return reject(err);
      return resolve(matches);
    });
  })
);

module.exports = function () {
  describe('Schemas deref', () => {
    before(done => {
      return globPromise('*(core|tsp|maas-backend)/**/*.json', { root: path.resolve('./') })
        .then(schemaPaths => {
          describe(`Dereferencing tests for ${schemaPaths.length} file(s)`, () => {
            schemaPaths.forEach(schemaPath => {
              it(`should be able to dereference ${schemaPath}`, done => {
                return index.derefSchema(require(path.resolve(schemaPath)))
                  .then(fullSchema => {
                    expect(fullSchema).to.not.be.undefined;
                    done();
                  })
                  .catch(done);
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
