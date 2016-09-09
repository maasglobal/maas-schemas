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
const ajvFactory = require('ajv');
const Promise = require('bluebird');
const schemaMapping = require('./mapping.js');

/**
 * Replacer function for errors to be used w/ JSON.stringify
 *
 * @param {string} key
 * @param {string} value
 */
function replaceErrors(key, value) {
  if (!(value instanceof Error)) {
    return value;
  }

  const error = {};
  Object.getOwnPropertyNames(value).forEach(key => {
    error[key] = value[key];
  });

  return error;
}

/**
 * Deref a json schema.
 *
 * @param {string} path full file name & path to the schema
 * @return {Promise -> Object} dereferenced schema
 */
function derefSchema(path) {
  return deref.dereference(path);
}

/**
 * Get a full dereferenced JSON schema with schemaId as mapped in mapping.js
 * Support child schemas following JSON schema convention "schemaId#/path/to/value"
 *
 * @param {string} schemaId - id of requested schema
 * @return {Promise -> Object} full schemas/child schemas
 * @deprecated
 */
function resolveSchema(schemaId) {
  // Regex to match strings like core:agency-option#properties/leg
  const schema = /(^[\w-]+):([\w-]+)(#(.+))?$/;
  const match = schemaId.match(schema);

  if (match === null) {
    return Promise.reject(new Error(`Invalid schemaId ${schemaId}`));
  }

  const scheme = match[1];
  const path = match[2];
  const fragmentPart = match[4];
  const realPath = (schemaMapping[scheme] || {})[path];

  if (!realPath) {
    return Promise.reject(new Error(`Missing schema ${schemaId}`));
  }

  return derefSchema(realPath)
    .then(schema => {
      if (!fragmentPart) {
        return schema;
      }

      // Iterate the fragment part, or report if invalid subpath
      let value = schema;
      const subpaths = fragmentPart.split('/');
      for (let i = 1; i < subpaths.length; i++) {
        value = value[subpaths[i]];

        if (typeof value === typeof undefined) {
          return Promise.reject(new Error(`Invalid fragment part ${fragmentPart}`));
        }
      }

      return Promise.resolve(value);
    });
}

/**
 *  Validate an object by first resolving the corresponding schema by schemaId
 *
 *  @param {string} schemaId - id of requested schema
 *  @param {object} object - input testing subject
 *  @return {Promise -> Object} resolve w/validated object or reject w/error if invalid
 *  @deprecated
 */
function validate(schemaId, object, options) {
  return resolveSchema(schemaId)
    .then(dereferenced => {
      // Validate it
      const opts = Object.assign({ verbose: true }, options);
      const ajv = ajvFactory(opts);
      const ajvValidate = ajv.compile(dereferenced);
      const valid = ajvValidate(object);

      if (valid) {
        return Promise.resolve(object);
      }

      const errors = ajvValidate.errors;
      const message = `Runtime error: Invalid JSON schema: ${JSON.stringify(errors, replaceErrors, 2)}`;
      return Promise.reject(new Error(message));
    });
}

module.exports = {
  validate,
  derefSchema,
  resolveSchema,
};
