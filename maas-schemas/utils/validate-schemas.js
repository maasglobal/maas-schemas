'use strict';

const AJV = require('ajv');
const fg = require('fast-glob');

const ajv = new AJV();

module.exports = async () => {
  // eslint-disable-next-line import/no-dynamic-require
  const schemas = (await fg(['schemas/**/*.json'], { absolute: true })).map(path => require(path));

  for (const schema of schemas) ajv.addSchema(schema);
  for (const schema of schemas) ajv.compile(schema);
};
