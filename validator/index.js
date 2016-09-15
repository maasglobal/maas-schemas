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
let ajv;

/**
 * Transforms the given values in input object with a given replacement.
 * Returns the other values as-is. Note that the values are compared with
 * equality match, e.g. it will only work for simple values (not objects).
 *
 * @param {object} input the object
 * @param {any} original the original values to track
 * @param {any} replacement the value to replace the empty value with
 * @return {object} a copy of the object, with empty values removed
 */
function transform(input, original, replacement) {

  // Return the simple value (non-object); Arrays are considered simple values,
  // even if their typeof returns object; note that nulls are objects; we
  // accept root-level nulls, but disallow them inside objects.
  if (typeof input !== 'object' || input === null) {
    return input;
  }

  // Handle a complex case (Object)
  const output = {};
  Object.keys(input).forEach(key => {
    const value = input[key];

    if (value === original) {
      output[key] = replacement;
      return;
    }

    output[key] = transform(value, original, replacement);
  });

  return output;
}

/**
 * Validate an object using schema retrieved from schemaId. This validator does
 * not resolve schema references, e.g. give it a fully dereferenced input.
 *
 * @param {object} schema the schema object
 * @param {object} object the object to validate
 * @param {object} options optional validation options (see ajv documentation)
 * @return {Promise -> Object} resolve w/validated object or reject w/error if invalid
 */
function validate(schema, object, options) {
  const opts = Object.assign({ verbose: true, allErrors: true }, options);

  if (typeof ajv === typeof undefined) {
    ajv = ajvFactory(opts);
  }

  // Handle the transformation of the given values (mainly for API gateway)
  if (typeof opts.transform === 'object') {
    const trans = opts.transform;
    /*eslint-disable no-prototype-builtins */
    if (!trans.hasOwnProperty('from')) {
      return Promise.reject(new Error('Invalid transform options: \'from\' not given.'));
    }
    /*eslint no-prototype-builtins: "error"*/
    if (!trans.hasOwnProperty('to')) {
      return Promise.reject(new Error('Invalid transform options: \'to\' not given.'));
    }

    object = transform(object, trans.from, trans.to);
  }

  const ajvValidate = ajv.compile(schema);
  const valid = ajvValidate(object);

  if (valid) {
    return Promise.resolve(object);
  }

  return Promise.reject(ValidationError.fromValidatorErrors(ajvValidate.errors));
}

module.exports = {
  validate,
};
