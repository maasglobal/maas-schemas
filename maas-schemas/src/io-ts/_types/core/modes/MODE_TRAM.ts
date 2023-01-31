/*

undefined
Schema for MODE_TRAM meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_TRAM.json';

// MODE_TRAM
// The default export. More information at the top.
export type MODE_TRAM = t.Branded<
  Record<string, unknown> & Record<string, unknown>,
  MODE_TRAMBrand
>;
export type MODE_TRAMC = t.BrandC<
  t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>,
  MODE_TRAMBrand
>;
export const MODE_TRAM: MODE_TRAMC = t.brand(
  t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
  (
    x,
  ): x is t.Branded<Record<string, unknown> & Record<string, unknown>, MODE_TRAMBrand> =>
    true,
  'MODE_TRAM',
);
export type MODE_TRAMBrand = {
  readonly MODE_TRAM: unique symbol;
};

export default MODE_TRAM;

// Success
