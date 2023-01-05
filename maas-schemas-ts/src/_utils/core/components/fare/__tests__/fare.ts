import { validator } from 'io-ts-validator';

import { Fare } from '../../../../../_types/core/components/fare';
import * as Fare_ from '../fare';

describe('fare', () => {
  describe('Ord', () => {
    it('should support comparing fares', () => {
      const eur = validator(Fare).decodeSync({
        type: 'charge',
        amount: 1200,
        currency: 'EUR',
        productionAmount: 1234,
      });
      const jpy = validator(Fare).decodeSync({
        type: 'charge',
        amount: 1200,
        currency: 'JPY',
        productionAmount: 1234,
      });
      expect(Fare_.Ord.compare(eur, eur)).toEqual(0);
      expect(Fare_.Ord.compare(eur, jpy)).toEqual(-1);
      expect(Fare_.Ord.compare(jpy, jpy)).toEqual(0);
      expect(Fare_.Ord.compare(jpy, eur)).toEqual(1);
    });
  });
});

describe('fare', () => {
  it('should export TokenId utils', () => {
    expect(Fare_.TokenId_).toBeDefined;
  });
});
