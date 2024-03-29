/*

undefined
Request schema for subscriptions-package

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as Units_c404_ from '../../../core/components/units';

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
  'https://schemas.maas.global/maas-backend/subscriptions/subscriptions-package/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    userId?: Units_c404_.IdentityId;
    payload?: {
      productProviderIds?: string;
    } & Record<string, unknown>;
    headers?: ApiCommon_16a4_.Headers;
  } & {
    identityId: Defined;
    userId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_c404_.IdentityId;
        userId: typeof Units_c404_.IdentityId;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              productProviderIds: t.StringC;
            }>,
            t.RecordC<t.StringC, t.UnknownC>,
          ]
        >;
        headers: typeof ApiCommon_16a4_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        userId: typeof Defined;
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_c404_.IdentityId,
      userId: Units_c404_.IdentityId,
      payload: t.intersection([
        t.partial({
          productProviderIds: t.string,
        }),
        t.record(t.string, t.unknown),
      ]),
      headers: ApiCommon_16a4_.Headers,
    }),
    t.type({
      identityId: Defined,
      userId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_c404_.IdentityId;
      userId?: Units_c404_.IdentityId;
      payload?: {
        productProviderIds?: string;
      } & Record<string, unknown>;
      headers?: ApiCommon_16a4_.Headers;
    } & {
      identityId: Defined;
      userId: Defined;
      payload: Defined;
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
