'use strict';

const deref = require('json-schema-deref');
const Promise = require('bluebird');

const derefPromise = Promise.promisify(deref);

function derefSchema(schema) {

  const options = {
    failOnMissing: true,
  };

  return derefPromise(schema, options)
    .then((fullSchema, error) => {
      if (error) {
        return Promise.reject(error);
      }

      return Promise.resolve(fullSchema);
    });

}

function order() {

}

module.exports = {
  order,
  derefSchema,
};
