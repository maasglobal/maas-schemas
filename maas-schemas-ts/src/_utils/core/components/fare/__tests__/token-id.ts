import * as P from 'maasglobal-prelude-ts';

import { validator } from 'io-ts-validator';

import { TokenId } from '../../../../../_types/core/components/fare';
import { Ord } from '../token-id';

describe('token-id', () => {
  describe('Ord', () => {
    it('should support comparing meta currencies', () => {
      const be = validator(TokenId).decodeSync('be-whim-car-idmr_v1');
      const fi = validator(TokenId).decodeSync('fi-plan-benefit');
      expect(Ord.compare(be, be)).toEqual(0);
      expect(Ord.compare(be, fi)).toEqual(-1);
      expect(Ord.compare(fi, fi)).toEqual(0);
      expect(Ord.compare(fi, be)).toEqual(1);
    });
  });
});
