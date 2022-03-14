import {
  defaultMetaCurrencyWMP as WMP,
  defaultMetaCurrencyTOKEN as TOKEN,
} from '../../../../../_types/core/components/common';

import { Ord } from '../meta-currency';

describe('meta-currency', () => {
  describe('Ord', () => {
    it('should support comparing meta currencies', () => {
      expect(Ord.compare(TOKEN, TOKEN)).toEqual(0);
      expect(Ord.compare(TOKEN, WMP)).toEqual(-1);
      expect(Ord.compare(WMP, WMP)).toEqual(0);
      expect(Ord.compare(WMP, TOKEN)).toEqual(1);
    });
  });
});
