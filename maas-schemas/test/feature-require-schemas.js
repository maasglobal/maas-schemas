'use strict';

const path = require('path');

const { testSchemaPackage } = require('maasglobal-json-schema-validator/lib/conformance');

describe('Conformance tests', () => {
  const packageRoot = path.resolve(__dirname, '../../maas-schemas');
  testSchemaPackage(packageRoot);
});
