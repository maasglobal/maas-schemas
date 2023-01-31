import { testSchemaPackage } from 'maasglobal-json-schema-validator/lib/conformance';
import path from 'path';

describe('Ajv Validator Conformance', () => {
  const packageRoot = path.resolve(__dirname, '..', '..');
  testSchemaPackage(packageRoot, require);
});
