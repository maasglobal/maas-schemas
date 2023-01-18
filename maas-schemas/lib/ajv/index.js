const mjsv = require('maasglobal-json-schema-validator');

const registry = require('./registry');

let validator;

function init() {
  validator = mjsv.validator([registry]);
  return validator;
}

function cached() {
  if (typeof validator !== 'undefined') {
    return validator;
  }
  return init();
}

function validate(schema, obj) {
  const instance = cached();
  return instance.validate(schema, obj);
}

module.exports = {
  init,
  cached,
  validate,
};
