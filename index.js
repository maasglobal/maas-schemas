'use strict';

const path = require('path');
const deref = require('json-schema-deref');

const dereference = schema => (
  new Promise((resolve, reject) => {
    const options = {
      failOnMissing: true,
      baseFolder: path.resolve('./'),
    };

    deref(schema, options, (err, dereferenced) => {
      if (err) {
        return reject(err);
      }

      return resolve(dereferenced);
    });
  })
);

module.exports = {
  dereference,
};
