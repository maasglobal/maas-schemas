import path from 'path';

import { testSchemaPackage } from './conformance';

describe('Conformance tests', () => {
  const packageRoot = path.resolve(__dirname, '..', '..', 'maas-schemas');
  testSchemaPackage(packageRoot);
});
