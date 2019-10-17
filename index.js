'use strict';

const AJV = require('ajv');
const validator = require('./lib/validator');
const { transform } = require('./utils/transform-unicode-patterns');
const registry = require('./registry.js');

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

  Object.keys(registry).forEach(key => {
    const schema = registry[key];
    ajv.addSchema(transform(schema));
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
};
