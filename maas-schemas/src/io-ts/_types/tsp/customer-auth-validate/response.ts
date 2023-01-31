/*

undefined
Response schema for completing customer authorization for TSP

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Common_ffba_ from '../../core/components/common';
import * as Units_c404_ from '../../core/components/units';
import * as Error_b620_ from '../../core/error';

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
  'https://schemas.maas.global/tsp/customer-auth-validate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    authToken?: Common_ffba_.EncodedQueryParam;
    validTo?: Units_c404_.Time;
    nonce?: Common_ffba_.EncodedQueryParam;
    error?: Error_b620_.Response;
  } & (
    | {
        authToken: Defined;
        nonce: Defined;
        validTo: Defined;
      }
    | {
        error: Defined;
        nonce: Defined;
      }
  ),
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        authToken: typeof Common_ffba_.EncodedQueryParam;
        validTo: typeof Units_c404_.Time;
        nonce: typeof Common_ffba_.EncodedQueryParam;
        error: typeof Error_b620_.Response;
      }>,
      t.UnionC<
        [
          t.TypeC<{
            authToken: typeof Defined;
            nonce: typeof Defined;
            validTo: typeof Defined;
          }>,
          t.TypeC<{
            error: typeof Defined;
            nonce: typeof Defined;
          }>,
        ]
      >,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      authToken: Common_ffba_.EncodedQueryParam,
      validTo: Units_c404_.Time,
      nonce: Common_ffba_.EncodedQueryParam,
      error: Error_b620_.Response,
    }),
    t.union([
      t.type({
        authToken: Defined,
        nonce: Defined,
        validTo: Defined,
      }),
      t.type({
        error: Defined,
        nonce: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      authToken?: Common_ffba_.EncodedQueryParam;
      validTo?: Units_c404_.Time;
      nonce?: Common_ffba_.EncodedQueryParam;
      error?: Error_b620_.Response;
    } & (
      | {
          authToken: Defined;
          nonce: Defined;
          validTo: Defined;
        }
      | {
          error: Defined;
          nonce: Defined;
        }
    ),
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
