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
const ajvFactory = require('ajv');
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
function validateSync(schema, object, options) {
  const opts = Object.assign({ verbose: true,
    allErrors: true,
    validateSchema: false,
    addUsedSchema: false,
    meta: false,
    inlineRefs: false,
    sourceCode: false,
    errorDataPath: 'property',
    multipleOfPrecision: 6 },
    options);

  // Always re-create AJV, because options may have changed
  const ajv = ajvFactory(opts);
  const ajvValidate = ajv.compile(schema);
  const valid = ajvValidate(object);

  if (!valid) {
    throw ValidationError.fromValidatorErrors(ajvValidate.errors, object);
  }

  return object;
}

/**
 * Validate an object using schema retrieved from schemaId. This validator does
 * not resolve schema references, e.g. give it a fully dereferenced input.
 *
 * This method calls validateSync() internally.
 *
 * @param {object} schema the schema object
 * @param {object} object the object to validate
 * @param {object} options optional validation options (see ajv documentation)
 * @return {Promise -> Object} resolve w/validated object or reject w/error if invalid
 * @see validateSync()
 */
function validate(schema, object, options) {
  try {
    return Promise.resolve(validateSync(schema, object, options));
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  validate,
  validateSync,
};
