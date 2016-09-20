'use strict';

/**
 * A simple Promisified schema validator that can resolve nested
 * refs with absolute path based on a root URL (here project root)
 *
 * E.g.
 * validator.validate(object, schema)
 *  .catch(error => // Error)
 *  .then(result => // OK)
 */
const deref = require('json-schema-ref-parser');

/**
 * Deref a json schema.
 *
 * @param {string} path full file name & path to the schema
 * @return {Promise -> Object} dereferenced schema
 */
function dereference(path) {
  return deref.dereference(path)
    .catch(error => {
      const message = `Schema ${path}: ${error.message}`;
      return Promise.reject(new Error(message));
    });
}

module.exports = {
  dereference,
};
