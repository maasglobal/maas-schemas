import { validator } from 'io-ts-validator';

import { Hostname } from '../../../../../_types/core/components/units';

import { Authority, Port } from '../../../../../_types/core/components/units';
import * as Authority_ from '../authority';

describe('authority', () => {
  describe('authority constructor function', () => {
    it('should construct authority', () => {
      const hostname = validator(Hostname).decodeSync('example.com');
      const port = validator(Port).decodeSync(12345);
      const authority = Authority_.authority(hostname, port);
      const expected = validator(Authority).decodeSync('example.com:12345');
      expect(authority).toStrictEqual(expected);
    });
  });
  describe('fromOrigin function', () => {
    it('should extract authority from origin', () => {
      const origin = 'https://example.com:12345';
      const authority = Authority_.fromOrigin(origin);
      const expected = validator(Authority).decodeSync('example.com:12345');
      expect(authority).toStrictEqual(expected);
    });
  });
});
