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
