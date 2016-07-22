'use strict';

const path = require('path');
const deref = require('json-schema-deref');
const Promise = require('bluebird');
const ajvFactory = require('ajv');
const ajv = ajvFactory({ verbose: true });

/**
 * A simple Promisified schema validator that can resolve nested
 * refs with absolute path based on a root URL (here project root)
 *
 * E.g.
 * - create refs to schemas as $ref: '/schemas/foo.json'
 * - call validator
 * validator.validate(object, schema)
 *  .then(result => {
 *    if (result) {
 *      // We got an error
 *    }
 *    else {
 *      // Result ok, we got null
 *    }
 *  }
 */

/**
 * Deref json schema
 * @param {object} schema
 */
function derefSchema(schema) {
  return new Promise((resolve, reject) => {

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

  });
}

/**
 * Get JSON schema located with input path
 * @param {String} path - path relative to repo
 */
function resolveSchemaFromPath(path) {
  const schema = require(path);
  return schema;
}

/**
 *	Validate an object using schema retrieved from input path
 *	@param {String} path - path to the requested schema
 *	@param {Object} object - input testing subject
 */
function validate(path, object) {
  return derefSchema(resolveSchemaFromPath(path))
    .catch(error => {
      console.log(error);
      throw new Error('Runtime error: Invalid JSON schema.');
    })
    .then(dereferenced => {
      // Validate it
      const validate = ajv.compile(dereferenced);
      const valid = validate(object);

      if (valid) {
        return Promise.resolve(null);
      }

      return Promise.resolve(validate.rrors);
    });
}

module.exports = {
  validate,
  derefSchema,
};
