import * as P from 'maasglobal-prelude-ts';

import { validator } from 'io-ts-validator';

import { Authority, Port } from '../../../../../_types/core/components/units';
import { PortFromString } from '../port';
import * as Port_ from '../port';

describe('port', () => {
  describe('fromAuthority function', () => {
    it('should extract port from authority', () => {
      const authority = validator(Authority).decodeSync('example.com:12345');
      const port = Port_.fromAuthority(authority);
      expect(port).toStrictEqual(P.Option_.some(12345));
    });
    it('should support authority without port', () => {
      const authority = validator(Authority).decodeSync('example.com');
      const port = Port_.fromAuthority(authority);
      expect(port).toStrictEqual(P.Option_.none);
    });
  });
  describe('PortFromString codec', () => {
    it('should decode string', () => {
      const port = validator(PortFromString).decodeSync('12345');
      expect(port).toStrictEqual(12345);
    });
    it('should encode string', () => {
      const port = validator(Port).decodeSync(12345);
      const str = validator(PortFromString).encodeSync(port);
      expect(str).toStrictEqual('12345');
    });
  });
});
