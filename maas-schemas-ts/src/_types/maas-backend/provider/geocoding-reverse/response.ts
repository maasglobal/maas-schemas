/*

undefined
Response schema for reverse geocoding providers

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'https://schemas.maas.global/maas-backend/provider/geocoding-reverse/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<unknown, ResponseBrand>;
export type ResponseC = t.BrandC<t.UnknownC, ResponseBrand>;
export const Response: ResponseC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ResponseBrand> => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
