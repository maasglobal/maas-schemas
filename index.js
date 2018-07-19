'use strict';

const AJV = require('ajv');
const validator = require('./validator');
const { transform } = require('./utils/transform-unicode-patterns');
const registry = require('./registry.js');

let ajv;

function init(options) {
  ajv = new AJV(
    Object.assign(
      {
        verbose: true,
        allErrors: true,
        validateSchema: false,
        addUsedSchema: false,
        meta: false,
        inlineRefs: false,
        sourceCode: false,
        errorDataPath: 'property',
        multipleOfPrecision: 6,
        sanitize: false,
      },
      options
    )
  );

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
  if (!ajv) init(options);
  if (options.sanitize === true) {
    object = validator.sanitize(object);
  }
  return validator.validate(ajv, schema, object, options);
}

module.exports = {
  init,
  validate,
};
