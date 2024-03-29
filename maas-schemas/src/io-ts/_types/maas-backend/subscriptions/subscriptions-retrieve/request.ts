/*

undefined
Request schema for subscriptions-retrieve

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
  'https://schemas.maas.global/maas-backend/subscriptions/subscriptions-retrieve/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    userId?: Units_c404_.IdentityId;
    nextPeriod?: boolean;
    payload?: Record<string, unknown> & Record<string, unknown>;
    headers?: ApiCommon_16a4_.Headers;
  } & {
    identityId: Defined;
    userId: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_c404_.IdentityId;
        userId: typeof Units_c404_.IdentityId;
        nextPeriod: t.BooleanC;
        payload: t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>;
        headers: typeof ApiCommon_16a4_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        userId: typeof Defined;
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
      nextPeriod: t.boolean,
      payload: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
      headers: ApiCommon_16a4_.Headers,
    }),
    t.type({
      identityId: Defined,
      userId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_c404_.IdentityId;
      userId?: Units_c404_.IdentityId;
      nextPeriod?: boolean;
      payload?: Record<string, unknown> & Record<string, unknown>;
      headers?: ApiCommon_16a4_.Headers;
    } & {
      identityId: Defined;
      userId: Defined;
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
