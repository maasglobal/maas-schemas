/*

undefined
Initiate customer KYC process

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as KycService_fa21_ from '../../../../core/kyc-service';

export const schemaId =
  'https://schemas.maas.global/maas-backend/customers/personal-documents/initiate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<KycService_fa21_.KycService, ResponseBrand>;
export type ResponseC = t.BrandC<typeof KycService_fa21_.KycService, ResponseBrand>;
export const Response: ResponseC = t.brand(
  KycService_fa21_.KycService,
  (x): x is t.Branded<KycService_fa21_.KycService, ResponseBrand> => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
