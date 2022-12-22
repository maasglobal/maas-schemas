import * as P from 'maasglobal-prelude-ts';

import { validator } from 'io-ts-validator';

import { BookingState } from '../../../../../_types/core/components/state';
import { Ord } from '../booking-state';

describe('booking-state', () => {
  describe('Ord', () => {
    it('should support comparing booking states', () => {
      const pending = validator(BookingState).decodeSync('PENDING');
      const activated = validator(BookingState).decodeSync('ACTIVATED');
      expect(Ord.compare(activated, activated)).toEqual(0);
      expect(Ord.compare(activated, pending)).toEqual(-1);
      expect(Ord.compare(pending, pending)).toEqual(0);
      expect(Ord.compare(pending, activated)).toEqual(1);
    });
  });
});
