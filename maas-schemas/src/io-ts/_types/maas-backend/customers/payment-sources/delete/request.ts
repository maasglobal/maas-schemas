/*

undefined
MaaS customer retrieve

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../../core/components/api-common';
import * as Units_c404_ from '../../../../core/components/units';
import * as PaymentSource_6d83_ from '../paymentSource';

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
  'https://schemas.maas.global/maas-backend/customers/payment-sources/delete/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    customerId?: Units_c404_.IdentityId;
    paymentSourceId?: PaymentSource_6d83_.PaymentSourceId;
    headers?: ApiCommon_16a4_.Headers;
  } & {
    identityId: Defined;
    customerId: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_c404_.IdentityId;
        customerId: typeof Units_c404_.IdentityId;
        paymentSourceId: typeof PaymentSource_6d83_.PaymentSourceId;
        headers: typeof ApiCommon_16a4_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_c404_.IdentityId,
      customerId: Units_c404_.IdentityId,
      paymentSourceId: PaymentSource_6d83_.PaymentSourceId,
      headers: ApiCommon_16a4_.Headers,
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_c404_.IdentityId;
      customerId?: Units_c404_.IdentityId;
      paymentSourceId?: PaymentSource_6d83_.PaymentSourceId;
      headers?: ApiCommon_16a4_.Headers;
    } & {
      identityId: Defined;
      customerId: Defined;
      headers: Defined;
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
