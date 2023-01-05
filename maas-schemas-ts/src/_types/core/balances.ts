/*

undefined
Customer in-app balances

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Common_ from './components/common';
import * as Fare_ from './components/fare';
import * as Units_ from './components/units';

export const schemaId = 'https://schemas.maas.global/core/balances.json';

// BalanceName
// Uniqued name for a currency
export type BalanceName = t.Branded<
  Units_.Currency | Fare_.TokenId | Common_.MetaCurrencyWMP,
  BalanceNameBrand
>;
export type BalanceNameC = t.BrandC<
  t.UnionC<
    [typeof Units_.Currency, typeof Fare_.TokenId, typeof Common_.MetaCurrencyWMP]
  >,
  BalanceNameBrand
>;
export const BalanceName: BalanceNameC = t.brand(
  t.union([Units_.Currency, Fare_.TokenId, Common_.MetaCurrencyWMP]),
  (
    x,
  ): x is t.Branded<
    Units_.Currency | Fare_.TokenId | Common_.MetaCurrencyWMP,
    BalanceNameBrand
  > => true,
  'BalanceName',
);
export type BalanceNameBrand = {
  readonly BalanceName: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(BalanceName)).decodeSync(examplesBalanceName) // => examplesBalanceName */
export const examplesBalanceName: NonEmptyArray<BalanceName> = [
  'EUR',
  'fi-hsl-single-ab',
  'WMP',
] as unknown as NonEmptyArray<BalanceName>;
// NEGATIVE Test Case: non-unique token meta currency
/** require('io-ts-validator').validator(BalanceName).decodeEither("TOKEN")._tag // => 'Left' */

// Balances
// The default export. More information at the top.
export type Balances = t.Branded<unknown, BalancesBrand>;
export type BalancesC = t.BrandC<t.UnknownC, BalancesBrand>;
export const Balances: BalancesC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, BalancesBrand> => true,
  'Balances',
);
export type BalancesBrand = {
  readonly Balances: unique symbol;
};

export default Balances;

// Success
