import { testSchemaPackage } from './conformance';

describe('Conformance tests', () => {
  const packageRoot = './node_modules/maas-schemas';
  const baseURI = 'https://schemas.maas.global/';
  testSchemaPackage(packageRoot, baseURI, []);
});
