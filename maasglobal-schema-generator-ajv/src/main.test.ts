import { generateClient, generateConformanceTests, generateRegistry } from './main';

describe('Ajv Schema Generator', () => {
  describe('generateRegistry function', () => {
    it('should work with maas-schemas', () => {
      const registry = generateRegistry('../../maas-schemas');
      expect(typeof registry).toBe('string');
    });
  });
  describe('generateClient function', () => {
    it('should work with maas-schemas', () => {
      const registry = generateClient('../../maas-schemas');
      expect(typeof registry).toBe('string');
    });
  });
  describe('generateConformanceTests function', () => {
    it('should work with maas-schemas', () => {
      const registry = generateConformanceTests('../../maas-schemas');
      expect(typeof registry).toBe('string');
    });
  });
});
