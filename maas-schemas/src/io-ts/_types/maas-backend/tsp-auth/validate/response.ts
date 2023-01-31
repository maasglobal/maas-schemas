/*

undefined
Response schema for tsp-auth validate

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Common_ffba_ from '../../../core/components/common';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export type DefinedC = {} & DefinedType;
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/tsp-auth/validate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    location?: Common_ffba_.WhimDeepLink;
  } & {
    location: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        location: typeof Common_ffba_.WhimDeepLink;
      }>,
      t.TypeC<{
        location: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      location: Common_ffba_.WhimDeepLink,
    }),
    t.type({
      location: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      location?: Common_ffba_.WhimDeepLink;
    } & {
      location: Defined;
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
