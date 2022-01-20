import * as P from 'maasglobal-prelude-ts';

import * as t from 'io-ts';
import { validator } from 'io-ts-validator';

import { defaultMetaCurrencyWMP } from '../../../../_types/core/components/common';
import { TokenId } from '../../../../_types/core/components/fare';
import { Fare } from '../../../../_types/core/components/fare';
import { defaultCurrencyEUR as EUR } from '../../../../_types/core/components/units';

import { BalanceName } from '../../../../_types/core/balances';
import {
  fromTokenId,
  fromCurrency,
  fromFare,
  isTokenId,
  Ord,
  WMP,
} from '../balance-name';

describe('balance-name', () => {
  const testToken = validator(TokenId).decodeSync('cx-test-token_v2');

  const tokenBalanceName: BalanceName = fromTokenId(testToken);
  const eurBalanceName: BalanceName = fromCurrency(EUR);
  const wmpBalanceName: BalanceName = WMP;

  describe('fromTokenId', () => {
    it('should not modify runtime value', () => {
      expect(tokenBalanceName).toStrictEqual(testToken);
    });
  });

  describe('fromCurrency', () => {
    it('should not modify runtime value', () => {
      expect(eurBalanceName).toStrictEqual(EUR);
    });
  });

  describe('WMP', () => {
    it('should match meta currency runtime value', () => {
      expect(wmpBalanceName).toStrictEqual(defaultMetaCurrencyWMP);
    });
  });

  describe('isTokenId', () => {
    it('should accept tokenIds', () => {
      expect(isTokenId(tokenBalanceName)).toStrictEqual(true);
    });
    it('should reject currencies', () => {
      expect(isTokenId(eurBalanceName)).toStrictEqual(false);
    });
    it('should reject meta currencies', () => {
      expect(isTokenId(wmpBalanceName)).toStrictEqual(false);
    });
    it('should implement guard', () => {
      // @ts-expect-error tokenBalanceName not be a TokenId
      const failure: TokenId = tokenBalanceName;
      if (isTokenId(tokenBalanceName)) {
        // tokenBalanceName is known to be a TokenId
        const success: TokenId = tokenBalanceName;
        // should not affect runtime value
        expect(success).toStrictEqual(failure);
      }
    });
  });

  describe('fromFare', () => {
    it('should extract balance names from fares', () => {
      const TestCase = t.intersection([
        Fare,
        t.type({
          balanceName: BalanceName,
        }),
      ]);

      const testCases = validator(P.Array(TestCase), 'strict').decodeSync([
        {
          type: 'charge',
          amount: 1200,
          currency: 'EUR',
          productionAmount: 1234,
          balanceName: 'EUR',
        },
        {
          type: 'refund',
          amount: 1200,
          currency: 'WMP',
          productionAmount: 1234,
          balanceName: 'WMP',
        },
        {
          type: 'charge',
          amount: 12,
          currency: 'TOKEN',
          tokenId: 'fi-package-benefit',
          balanceName: 'fi-package-benefit',
        },
        {
          type: 'charge',
          amount: 12,
          currency: 'fi-package-benefit',
          tokenId: 'fi-package-benefit',
          balanceName: 'fi-package-benefit',
        },
      ]);
      const converted = testCases.map(fromFare);
      const expected = testCases.map(({ balanceName }) => balanceName);

      expect(converted).toStrictEqual(expected);
    });
  });

  describe('Ord', () => {
    it('should make sorting balance names possible', () => {
      const arbitraryOrder = validator(P.Array(BalanceName), 'strict').decodeSync([
        'GBP',
        'WMP',
        'fi-plan-benefit',
        'EUR',
        'be-whim-car-idmr_v1',
        'JPY',
      ]);
      const expectedOrder = validator(P.Array(BalanceName), 'strict').decodeSync([
        // tokens
        'be-whim-car-idmr_v1',
        'fi-plan-benefit',
        // currencies
        'EUR',
        'GBP',
        'JPY',
        // meta currencies
        'WMP',
      ]);
      expect(P.pipe(arbitraryOrder, P.Array_.sort(Ord))).toStrictEqual(expectedOrder);
    });
  });
});
