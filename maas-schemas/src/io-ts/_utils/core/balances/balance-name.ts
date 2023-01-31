import * as P from 'maasglobal-prelude-ts';

import { BalanceName } from '../../../_types/core/balances';
import {
  defaultMetaCurrencyWMP,
  MetaCurrencyTOKEN,
} from '../../../_types/core/components/common';
import { Fare, TokenId } from '../../../_types/core/components/fare';
import { Currency } from '../../../_types/core/components/units';
import * as MetaCurrency_ from '../../core/components/common/meta-currency';
import * as TokenId_ from '../../core/components/fare/token-id';
import * as Currency_ from '../../core/components/units/currency';

export function fromTokenId(tokenId: TokenId): BalanceName {
  return tokenId as BalanceName;
}
export function fromCurrency(currency: Currency): BalanceName {
  return currency as BalanceName;
}
export const WMP: BalanceName = defaultMetaCurrencyWMP as BalanceName;

export function isTokenId(bn: BalanceName): bn is BalanceName & TokenId {
  const firstChar: string = bn.charAt(0);
  return firstChar === firstChar.toLowerCase();
}

export const Ord: P.Ord<BalanceName> = P.Ord_.fromCompare((bnA, bnB) => {
  if (TokenId.is(bnA)) {
    if (TokenId.is(bnB)) {
      return TokenId_.Ord.compare(bnA, bnB);
    }
    return -1;
  }
  if (TokenId.is(bnB)) {
    return 1;
  }
  if (Currency.is(bnA)) {
    if (Currency.is(bnB)) {
      return Currency_.Ord.compare(bnA, bnB);
    }
    return -1;
  }
  if (Currency.is(bnB)) {
    return 1;
  }
  return MetaCurrency_.Ord.compare(bnA, bnB);
});

export function fromFare(fare: Fare): BalanceName {
  if (MetaCurrencyTOKEN.is(fare.currency)) {
    if (typeof fare.tokenId === 'undefined') {
      return P.absurd(fare as never);
    }
    return fare.tokenId as BalanceName;
  }
  return fare.currency as BalanceName;
}
