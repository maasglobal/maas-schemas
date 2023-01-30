import { manifestFileName } from './main';

describe('Schema Package', () => {
  describe('manifest file name', () => {
    it('should be schemas.json', () => {
      expect(manifestFileName).toBe('schemas.json');
    });
  });
});
