/*

undefined
Request schema for profile-favoriteLocations-add

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as Place_de2d_ from '../../../core/components/place';
import * as Units_c404_ from '../../../core/components/units';

export const schemaId =
  'https://schemas.maas.global/maas-backend/profile/profile-favoriteLocations-add/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    payload?: Place_de2d_.Place;
    headers?: ApiCommon_16a4_.Headers;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    identityId: typeof Units_c404_.IdentityId;
    payload: typeof Place_de2d_.Place;
    headers: typeof ApiCommon_16a4_.Headers;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    identityId: Units_c404_.IdentityId,
    payload: Place_de2d_.Place,
    headers: ApiCommon_16a4_.Headers,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_c404_.IdentityId;
      payload?: Place_de2d_.Place;
      headers?: ApiCommon_16a4_.Headers;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success
