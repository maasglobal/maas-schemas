/*

undefined
MaaS webhook to update bookings for tsp adapter callback response schema.

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as RemoteResponse_ from '../../../tsp/webhooks-bookings-update/remote-response';

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<RemoteResponse_.RemoteResponse, ResponseBrand>;
export type ResponseC = t.BrandC<typeof RemoteResponse_.RemoteResponse, ResponseBrand>;
export const Response: ResponseC = t.brand(
  RemoteResponse_.RemoteResponse,
  (x): x is t.Branded<RemoteResponse_.RemoteResponse, ResponseBrand> => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
