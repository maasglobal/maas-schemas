import { logHeader } from './generate-codecs';

describe('io-ts Schema Generator', () => {
  describe('logHeader', () => {
    it('should start with #', () => {
      expect(logHeader.charAt(0)).toBe('#');
    });
  });
});
