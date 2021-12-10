/*

undefined
Schema for MODE_CABLE_CAR meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_CABLE_CAR.json';

// MODE_CABLE_CAR
// The default export. More information at the top.
export type MODE_CABLE_CAR = t.Branded<Record<string, unknown>, MODE_CABLE_CARBrand>;
export type MODE_CABLE_CARC = t.BrandC<t.UnknownRecordC, MODE_CABLE_CARBrand>;
export const MODE_CABLE_CAR: MODE_CABLE_CARC = t.brand(
  t.UnknownRecord,
  (x): x is t.Branded<Record<string, unknown>, MODE_CABLE_CARBrand> => true,
  'MODE_CABLE_CAR',
);
export interface MODE_CABLE_CARBrand {
  readonly MODE_CABLE_CAR: unique symbol;
}

export default MODE_CABLE_CAR;

// Success