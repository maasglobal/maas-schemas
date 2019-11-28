'use strict';

const AJV = require('ajv');
const fg = require('fast-glob');
const extendAjv = require('ajv-keywords');

const ajv = new AJV({ $data: true });
extendAjv(ajv);

module.exports = async () => {
  // eslint-disable-next-line import/no-dynamic-require
  const schemas = (await fg(['schemas/**/*.json'], { absolute: true })).map(path => require(path));

  for (const schema of schemas) ajv.addSchema(schema);
  for (const schema of schemas) ajv.compile(schema);
};
