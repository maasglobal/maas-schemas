import { parseSchemaPackage } from 'maasglobal-schema-package';
import path from 'path';

import { generateClient, generateConformanceTests, generateRegistry } from './main';

describe('Ajv Schema Generator', () => {
  const packageRoot = path.resolve(__dirname, '..', '..', 'maas-schemas');
  const sourcePackage = parseSchemaPackage(packageRoot);

  describe('generateRegistry function', () => {
    it('should work with maas-schemas', () => {
      const registry = generateRegistry(sourcePackage);
      expect(typeof registry).toBe('string');
    });
  });
  describe('generateClient function', () => {
    it('should work with maas-schemas', () => {
      const registry = generateClient(sourcePackage);
      expect(typeof registry).toBe('string');
    });
  });
  describe('generateConformanceTests function', () => {
    it('should work with maas-schemas', () => {
      const registry = generateConformanceTests(sourcePackage);
      expect(typeof registry).toBe('string');
    });
  });
});
