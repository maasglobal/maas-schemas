import { phone } from './readme';

describe('README.md', () => {
  describe('phone', () => {
    it('should be a string', () => {
      expect(typeof phone).toEqual('string');
    });
  });
});
