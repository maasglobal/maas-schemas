/*

undefined
Response schema for profile-edit

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Profile_4500_ from '../../../core/profile';

export const schemaId =
  'https://schemas.maas.global/maas-backend/profile/profile-edit/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    profile?: Profile_4500_.Profile;
    debug?: Record<string, unknown>;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.PartialC<{
    profile: typeof Profile_4500_.Profile;
    debug: t.RecordC<t.StringC, t.UnknownC>;
  }>,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.partial({
    profile: Profile_4500_.Profile,
    debug: t.record(t.string, t.unknown),
  }),
  (
    x,
  ): x is t.Branded<
    {
      profile?: Profile_4500_.Profile;
      debug?: Record<string, unknown>;
    },
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
