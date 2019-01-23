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
 * Recursively visits and transforms the object and array values one-by-one,
 * executing the given function. This is loosely modeled around Visitor pattern.
 * The object is traversed in in-order, but only the leaves are processed.
 * Inherited propeties are not traversed nor available in the results.
 *
 * Note: This function will prune undefined values like JSON.stringify().
 * Note: This function will get stuck into endless loop on circular references.
 *
 * Callback will be called as follows:
 * callback(key, value, context);
 * In case of mapping an array, 'key' equals the current index.
 * In case of mapping a raw value (not part of any object), it is null
 *
 * @param {object} value - the object/array to visit
 * @param {function} callback - the transformation function to execute
 * @param {object} [key=undefined] - context parameter, used in recursive calls
 * @param {object} [context=undefined] - context parameter, used in recursive calls
 * @see https://en.wikipedia.org/wiki/Visitor_pattern
 * @see https://en.wikipedia.org/wiki/Tree_traversal#In-order
 */
function mapDeep(object, callback, key, context) {
  // Handle defaults
  key = key || undefined;
  context = context || undefined;

  // Handle the simple values (non-objects)
  if (typeof object !== 'object' || object === null) {
    return callback(object, key, context);
  }

  // Handle a complex case (Array): Convert numbers in nested objects
  if (Array.isArray(object)) {
    const transformed = [];
    object.forEach((value, index) => {
      const v = mapDeep(value, callback, index, object);
      if (typeof v === typeof undefined) {
        return;
      }

      transformed.push(v);
    });
    return transformed;
  }

  // Handle a complex case (Object); iterate key-value (k-v) pairs
  const transformed = {};
  for (const k in object) {
    if (!Object.prototype.hasOwnProperty.call(object, k)) {
      continue;
    }

    const v = mapDeep(object[k], callback, k, object);
    if (typeof v !== typeof undefined) {
      transformed[k] = v;
    }
  }

  return transformed;
}

/**
 * Converts decimal numbers to fixed precision
 * Does not convert integers, but leaves them as-is.
 *
 * When supplying a negative number for digits, it rounds to tens.
 *
 * Note: There will be some loss of precision due to the underlying double math.
 *
 * @param {number} value - the input number
 * @param {integer} digits - the number of digits after decimal point
 * @return {number} - the input number in given precision.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#PHP-Like_rounding_Method
 */
function toFixed(value, digits) {
  if (typeof value !== 'number') {
    throw new TypeError('The input value is not a number');
  }

  // Return integers as-is.
  if (Number.isInteger(value)) {
    return value;
  }

  // Do the conversion
  const factor = 10 ** digits;
  const tempNumber = value * factor;
  const roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
}

/**
 * Converts a JS object into an object that is safe to sign.
 * It removes the nulls, fixes the number precision to six decimals and
 * sorts the object fields. As a result, the object is safe to sign and
 * send forward.
 *
 * @param {object} object - The object to 'sanitize'
 */
function sanitize(object) {
  return mapDeep(object, (value, key, context) => {
    // Remove nulls except when they are in array or the value is in root level
    if (value === null && !Array.isArray(context) && typeof context !== typeof undefined) {
      // FIXME Special case: Keep the null amount, as it has a meaning
      if (key === 'amount') {
        return value;
      }

      return undefined;
    }

    // Remove empty string except when they are in array or the value is in root level
    if (value === '' && !Array.isArray(context) && typeof context !== typeof undefined) {
      return undefined;
    }

    if (typeof value === 'number') {
      return toFixed(value, 6);
    }

    return value;
  });
}

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

module.exports = {
  sanitize,
  validate,
};
