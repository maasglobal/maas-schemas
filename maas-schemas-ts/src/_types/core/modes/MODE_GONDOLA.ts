/*

undefined
Schema for MODE_GONDOLA meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_GONDOLA.json';

// MODE_GONDOLA
// The default export. More information at the top.
export type MODE_GONDOLA = t.Branded<Record<string, unknown>, MODE_GONDOLABrand>;
export type MODE_GONDOLAC = t.BrandC<t.UnknownRecordC, MODE_GONDOLABrand>;
export const MODE_GONDOLA: MODE_GONDOLAC = t.brand(
  t.UnknownRecord,
  (x): x is t.Branded<Record<string, unknown>, MODE_GONDOLABrand> => true,
  'MODE_GONDOLA',
);
export interface MODE_GONDOLABrand {
  readonly MODE_GONDOLA: unique symbol;
}

export default MODE_GONDOLA;

// Success