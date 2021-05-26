/*

undefined
Insert travel pass response

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as TravelPass_ from '../../../core/travel-pass';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/travel-pass/create/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    travelPass?: TravelPass_.TravelPass;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.PartialC<{
    travelPass: typeof TravelPass_.TravelPass;
  }>,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.partial({
    travelPass: TravelPass_.TravelPass,
  }),
  (
    x,
  ): x is t.Branded<
    {
      travelPass?: TravelPass_.TravelPass;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
