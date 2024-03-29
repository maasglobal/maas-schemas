/*

undefined
MaaS webhook to update bookings for tsp adapter callback response schema.

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as RemoteResponse_9964_ from '../../../tsp/webhooks-bookings-update/remote-response';

export const schemaId =
  'https://schemas.maas.global/maas-backend/webhooks/webhooks-bookings-update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<RemoteResponse_9964_.RemoteResponse, ResponseBrand>;
export type ResponseC = t.BrandC<
  typeof RemoteResponse_9964_.RemoteResponse,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  RemoteResponse_9964_.RemoteResponse,
  (x): x is t.Branded<RemoteResponse_9964_.RemoteResponse, ResponseBrand> => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
