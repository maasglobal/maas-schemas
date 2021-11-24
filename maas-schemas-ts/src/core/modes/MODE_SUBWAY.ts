/*

undefined
Schema for MODE_SUBWAY meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_SUBWAY.json';

// MODE_SUBWAY
// The default export. More information at the top.
export type MODE_SUBWAY = t.Branded<Record<string, unknown>, MODE_SUBWAYBrand>;
export type MODE_SUBWAYC = t.BrandC<t.UnknownRecordC, MODE_SUBWAYBrand>;
export const MODE_SUBWAY: MODE_SUBWAYC = t.brand(
  t.UnknownRecord,
  (x): x is t.Branded<Record<string, unknown>, MODE_SUBWAYBrand> => true,
  'MODE_SUBWAY',
);
export interface MODE_SUBWAYBrand {
  readonly MODE_SUBWAY: unique symbol;
}

export default MODE_SUBWAY;

// Success
