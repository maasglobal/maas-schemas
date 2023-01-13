'use strict';

const { testSchemaPackage } = require('maasglobal-json-schema-validator/lib/conformance');

describe('Conformance tests', () => {
  const packageRoot = '.';
  const baseURI = 'https://schemas.maas.global/';
  testSchemaPackage(packageRoot, baseURI, []);
});
