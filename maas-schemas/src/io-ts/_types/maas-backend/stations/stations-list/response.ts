/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Response_cf5c_ from '../../../tsp/stations-list/response';

export const schemaId =
  'https://schemas.maas.global/maas-backend/stations/stations-list/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<Response_cf5c_.Response, ResponseBrand>;
export type ResponseC = t.BrandC<typeof Response_cf5c_.Response, ResponseBrand>;
export const Response: ResponseC = t.brand(
  Response_cf5c_.Response,
  (x): x is t.Branded<Response_cf5c_.Response, ResponseBrand> => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success