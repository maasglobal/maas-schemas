'use strict';

const mjsv = require('maasglobal-json-schema-validator');

const registry = require('./registry');

if (typeof Object.fromEntries === 'undefined') {
  // polyfill fromEntries
  Object.fromEntries = entries => {
    const result = {};
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  };
}

function definitions(schema) {
  // schema $id should not contain # but sometimes they do
  const [schemaId] = schema.$id.split('#');
  return Object.fromEntries(
    Object.entries(schema.definitions).map(([name, def]) => [
      name,
      Object.assign({}, def, {
        $id: `${schemaId}#/definitions/${name}`,
      }),
    ])
  );
}

let validator;

function init() {
  validator = mjsv.validator([registry]);

  return validator;
}

/**
 * Validate the object against given schema
 *
 * @param {Object} schema - schema json required from /schemas folder
 *
 * @deprecated import { validator } from 'maasglobal-json-schema-validator'
 */
function validate(schema, object) {
  if (!validator) init();
  return validator.validate(schema, object);
}

module.exports = {
  init,
  validate,
  definitions,
};
