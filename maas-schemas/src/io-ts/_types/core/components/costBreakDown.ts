/*

undefined
A costBreakDown shows pricing according to TSPs wishes and nuances

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export const schemaId = 'https://schemas.maas.global/core/components/costBreakDown.json';

// CostBreakDownArray
// TSP specific cost rules
export type CostBreakDownArray = t.Branded<Array<string>, CostBreakDownArrayBrand>;
export type CostBreakDownArrayC = t.BrandC<t.ArrayC<t.StringC>, CostBreakDownArrayBrand>;
export const CostBreakDownArray: CostBreakDownArrayC = t.brand(
  t.array(t.string),
  (x): x is t.Branded<Array<string>, CostBreakDownArrayBrand> => true,
  'CostBreakDownArray',
);
export type CostBreakDownArrayBrand = {
  readonly CostBreakDownArray: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(CostBreakDownArray)).decodeSync(examplesCostBreakDownArray) // => examplesCostBreakDownArray */
export const examplesCostBreakDownArray: NonEmptyArray<CostBreakDownArray> = [
  ['First 10 km, 50 euros', 'Next 20 km, 10 euros'],
] as unknown as NonEmptyArray<CostBreakDownArray>;

// CostBreakDown
// The default export. More information at the top.
export type CostBreakDown = t.Branded<unknown, CostBreakDownBrand>;
export type CostBreakDownC = t.BrandC<t.UnknownC, CostBreakDownBrand>;
export const CostBreakDown: CostBreakDownC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, CostBreakDownBrand> => true,
  'CostBreakDown',
);
export type CostBreakDownBrand = {
  readonly CostBreakDown: unique symbol;
};

export default CostBreakDown;

// Success
