import {
  generateClient,
  generateConformanceTests,
  generateRegistry,
  parseSourcePackage,
} from './main';

describe('Ajv Schema Generator', () => {
  const sourcePackage = parseSourcePackage('../../maas-schemas');

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
