'use strict';

const deref = require('json-schema-deref');
const ajvFactory = require('ajv');
const ajv = ajvFactory({ verbose: true });

/**
 * Replacer function for errors to be used w/ JSON.stringify
 * @param {string} key
 * @param {string} value
 */
function replaceErrors(key, value) {
  if (value instanceof Error) {
    const error = {};

    Object.getOwnPropertyNames(value).forEach(key => {
      error[key] = value[key];
    });

    return error;
  }

  return value;
}

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
      baseFolder: __dirname,
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
 *  Validate an object using schema retrieved from input path
 *  @param {String} path - path to the requested schema
 *  @param {Object} object - input testing subject
 */
function validate(path, object) {
  return derefSchema(resolveSchemaFromPath(path))
    .then(dereferenced => {
      // Validate it
      const ajvValidate = ajv.compile(dereferenced);
      const valid = ajvValidate(object);

      if (valid) {
        return Promise.resolve(null);
      }

      return Promise.reject(ajvValidate.errors);
    })
    .catch(error => {
      throw new Error(`Runtime error: Invalid JSON schema: ${JSON.stringify(error, replaceErrors, 2)}`);
    });
}

module.exports = {
  validate,
  derefSchema,
};
