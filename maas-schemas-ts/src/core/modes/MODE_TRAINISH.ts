/*

undefined
Schema for MODE_TRAINISH meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_TRAINISH.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<{}, DefaultBrand>;
export const Default = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
