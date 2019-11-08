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
const ValidationError = require('./ValidationError');

/**
 * Synchronously validate an object using schema retrieved from schemaId.
 * This validator does not resolve schema references, e.g. give it a fully
 * dereferenced input.
 *
 * @param {object} schema the schema object
 * @param {object} object the object to validate
 * @param {object} options optional validation options (see ajv documentation)
 * @return {object} validated and coerced object if everything goes alright
 * @throws {ValidationError} in case of invalid object
 * @throws {TypeError} in case of invalid schema
 */
function validate(ajv, schema, object) {
  const result = JSON.parse(JSON.stringify(object));
  const valid = ajv.validate(schema.$id || schema, result);

  if (!valid) {
    throw ValidationError.fromValidatorErrors(ajv.errors, object);
  }

  return result;
}

module.exports = { validate };
