/*

undefined
Schema for MODE_WALK meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_WALK.json';

// MODE_WALK
// The default export. More information at the top.
export type MODE_WALK = t.Branded<
  Record<string, unknown> & Record<string, unknown>,
  MODE_WALKBrand
>;
export type MODE_WALKC = t.BrandC<
  t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>,
  MODE_WALKBrand
>;
export const MODE_WALK: MODE_WALKC = t.brand(
  t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
  (
    x,
  ): x is t.Branded<Record<string, unknown> & Record<string, unknown>, MODE_WALKBrand> =>
    true,
  'MODE_WALK',
);
export type MODE_WALKBrand = {
  readonly MODE_WALK: unique symbol;
};

export default MODE_WALK;

// Success
