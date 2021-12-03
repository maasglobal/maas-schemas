import * as P from 'maasglobal-prelude-ts';

import { Fare } from '../../../../_types/core/components/fare';

import * as BalanceName_ from '../../balances/balance-name';

export const Ord: P.Ord<Fare> = P.Ord_.fromCompare((fareA, fareB) => {
  const bnA = BalanceName_.fromFare(fareA);
  const bnB = BalanceName_.fromFare(fareB);
  return BalanceName_.Ord.compare(bnA, bnB);
});

export * as TokenId_ from './token-id';
