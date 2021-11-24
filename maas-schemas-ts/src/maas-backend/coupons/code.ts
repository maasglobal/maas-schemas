/*

undefined
MaaS coupon code

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/maas-backend/coupons/code.json';

// Code
// MaaS coupon code
export type Code = t.Branded<string, CodeBrand>;
export type CodeC = t.BrandC<t.StringC, CodeBrand>;
export const Code: CodeC = t.brand(
  t.string,
  (x): x is t.Branded<string, CodeBrand> => true,
  'Code',
);
export interface CodeBrand {
  readonly Code: unique symbol;
}

// Success
