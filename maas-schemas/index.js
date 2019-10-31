'use strict';

const AJV = require('ajv');
const validator = require('./lib/validator');
const registry = require('./registry.js');

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
  return Object.fromEntries(
    Object.entries(schema.definitions).map(([name, def]) => [
      name,
      {
        $id: `http://maasglobal.com/environments/environments.json#/definitions/${name}`,
        ...def,
      },
    ])
  );
}

let ajv;

function init() {
  ajv = new AJV({
    addUsedSchema: false,
    allErrors: true,
    coerceTypes: true,
    errorDataPath: 'property',
    inlineRefs: false,
    meta: true,
    multipleOfPrecision: 6,
    removeAdditional: true,
    sanitize: false,
    sourceCode: false,
    useDefaults: true,
    validateSchema: false,
    verbose: true,
  });
  require('ajv-merge-patch')(ajv);
  require('ajv-keywords')(ajv);

  Object.keys(registry).forEach(key => {
    const schema = registry[key];
    ajv.addSchema(schema);
  });
}

/**
 * Validate the object against given schema
 *
 * @param {Object} schema - schema json required from /schemas folder
 */
function validate(schema, object, options = {}) {
  if (!ajv) init();
  return validator.validate(ajv, schema, object, options);
}

module.exports = {
  init,
  validate,
  definitions,
};
