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
    errorDataPath: 'property',
    inlineRefs: false,
    meta: false,
    multipleOfPrecision: 6,
    sanitize: false,
    sourceCode: false,
    validateSchema: false,
    verbose: true,
  });

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
  if (options.sanitize === true) {
    object = validator.sanitize(object);
  }
  return validator.validate(ajv, schema, object, options);
}

module.exports = {
  init,
  validate,
};
