/*

undefined
Schema for MODE_FUNICULAR meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_FUNICULAR.json';

// MODE_FUNICULAR
// The default export. More information at the top.
export type MODE_FUNICULAR = t.Branded<
  {
    vehicleId?: unknown;
  },
  MODE_FUNICULARBrand
>;
export type MODE_FUNICULARC = t.BrandC<
  t.PartialC<{
    vehicleId: t.UnknownC;
  }>,
  MODE_FUNICULARBrand
>;
export const MODE_FUNICULAR: MODE_FUNICULARC = t.brand(
  t.partial({
    vehicleId: t.unknown,
  }),
  (
    x,
  ): x is t.Branded<
    {
      vehicleId?: unknown;
    },
    MODE_FUNICULARBrand
  > => true,
  'MODE_FUNICULAR',
);
export interface MODE_FUNICULARBrand {
  readonly MODE_FUNICULAR: unique symbol;
}

export default MODE_FUNICULAR;

// Success
