'use strict';

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

const deref = require('json-schema-deref');
const ajvFactory = require('ajv');
const ajv = ajvFactory({ verbose: true });
const Promise = require('bluebird');

const schemaMapping = require('./mapping.js');

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
 * Deref json schema
 * @param {object} schema
 * @return {Promise -> Object} dereferenced schema
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

  })
  .then(response => response)
  .catch(error => {
    throw new Error(error);
  });
}

/**
 * Get full dereferenced JSON schema with schemaId as mapped in mapping.js
 * Support child schemas following JSON deref convention "schemaId#childA/childB/childC"
 * @param {String} schemaId - id of requested schema
 * @return {Promise -> Object} full schemas/child schemas
 */
function resolveSchema(schemaId) {
  let tmpSchema;
  let fullSchema;

  if (schemaId.match(/#/gi) && schemaId.match(/#/gi).length > 1) throw new Error(`Invalid schemaId ${schemaId}`);

  const parentPath = schemaId.split('#')[0];
  const childPath = schemaId.split('#')[1] ? schemaId.split('#')[1].split('/') : undefined;

  if (typeof parentPath !== 'string') throw new Error(`Invalid schema id \'${parentPath}\'`);

  if (parentPath.match(/(^core:)/g) && schemaMapping.core[parentPath.replace(/(^core:)/g, '')]) {
    tmpSchema = require(schemaMapping.core[parentPath.replace(/(^core:)/g, '')]);
  } else if (parentPath.match(/(^maas-backend:)/g) && schemaMapping['maas-backend'][parentPath.replace(/(^maas-backend:)/g, '')]) {
    tmpSchema = require(schemaMapping['maas-backend'][parentPath.replace(/(^maas-backend:)/g, '')]);
  } else if (parentPath.match(/(^tsp:)/g)  && schemaMapping.tsp[parentPath.replace(/(^tsp:)/g, '')]) {
    tmpSchema = require(schemaMapping.tsp[parentPath.replace(/(^tsp:)/g, '')]);
  } else {
    return Promise.reject(new Error(`Parent path ${parentPath} is not available!`));
  }

  return derefSchema(tmpSchema)
    .then(_fullSchema => {

      fullSchema = _fullSchema;

      if (childPath && childPath.length !== 0) {
        for (let i = 0; i < childPath.length; i++) {
          if (fullSchema[childPath[i]]) { // eslint-disable-line
            fullSchema = fullSchema[childPath[i]];
          } else {
            return Promise.reject(new Error(`Child path ${childPath[i]} is unavailable in full schema ${JSON.stringify(fullSchema)}`)); // eslint-disable-line
          }
        }
      }

      return Promise.resolve(fullSchema);
    });
}

/**
 *  Validate an object using schema retrieved from schemaId
 *  @param {String} schemaId - id of requested schema
 *  @param {Object} object - input testing subject
 *  @return {Promise -> Object} null if valid, error if invalid
 */
function validate(schemaId, object) {
  return resolveSchema(schemaId)
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
  resolveSchema,
};
