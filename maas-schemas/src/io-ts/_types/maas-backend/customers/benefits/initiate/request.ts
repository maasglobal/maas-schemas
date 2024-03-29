/*

undefined
MaaS customer benefits initiate

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../../core/components/api-common';
import * as BenefitProvider_9356_ from '../../../../core/components/benefit-provider';
import * as Units_c404_ from '../../../../core/components/units';

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
  'https://schemas.maas.global/maas-backend/customers/benefits/initiate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_c404_.IdentityId;
    headers?: ApiCommon_16a4_.Headers;
    identityId?: Units_c404_.IdentityId;
    payload?: ({
      amount?: number;
      currency?: Units_c404_.Currency;
      productType?: string & ('product' | 'subscription' | 'package');
      productId?: string;
    } & Record<string, unknown>) &
      (
        | {
            amount: Defined;
            currency: Defined;
          }
        | {
            amount: Defined;
            currency: Defined;
            productType: Defined;
            productId: Defined;
          }
      );
    benefitsProviderId?: BenefitProvider_9356_.BenefitsProviderId;
  } & {
    identityId: Defined;
    customerId: Defined;
    payload: Defined;
    benefitsProviderId: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        customerId: typeof Units_c404_.IdentityId;
        headers: typeof ApiCommon_16a4_.Headers;
        identityId: typeof Units_c404_.IdentityId;
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  amount: t.NumberC;
                  currency: typeof Units_c404_.Currency;
                  productType: t.IntersectionC<
                    [
                      t.StringC,
                      t.UnionC<
                        [
                          t.LiteralC<'product'>,
                          t.LiteralC<'subscription'>,
                          t.LiteralC<'package'>,
                        ]
                      >,
                    ]
                  >;
                  productId: t.StringC;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.UnionC<
              [
                t.TypeC<{
                  amount: typeof Defined;
                  currency: typeof Defined;
                }>,
                t.TypeC<{
                  amount: typeof Defined;
                  currency: typeof Defined;
                  productType: typeof Defined;
                  productId: typeof Defined;
                }>,
              ]
            >,
          ]
        >;
        benefitsProviderId: typeof BenefitProvider_9356_.BenefitsProviderId;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
        payload: typeof Defined;
        benefitsProviderId: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_c404_.IdentityId,
      headers: ApiCommon_16a4_.Headers,
      identityId: Units_c404_.IdentityId,
      payload: t.intersection([
        t.intersection([
          t.partial({
            amount: t.number,
            currency: Units_c404_.Currency,
            productType: t.intersection([
              t.string,
              t.union([
                t.literal('product'),
                t.literal('subscription'),
                t.literal('package'),
              ]),
            ]),
            productId: t.string,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.union([
          t.type({
            amount: Defined,
            currency: Defined,
          }),
          t.type({
            amount: Defined,
            currency: Defined,
            productType: Defined,
            productId: Defined,
          }),
        ]),
      ]),
      benefitsProviderId: BenefitProvider_9356_.BenefitsProviderId,
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      payload: Defined,
      benefitsProviderId: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_c404_.IdentityId;
      headers?: ApiCommon_16a4_.Headers;
      identityId?: Units_c404_.IdentityId;
      payload?: ({
        amount?: number;
        currency?: Units_c404_.Currency;
        productType?: string & ('product' | 'subscription' | 'package');
        productId?: string;
      } & Record<string, unknown>) &
        (
          | {
              amount: Defined;
              currency: Defined;
            }
          | {
              amount: Defined;
              currency: Defined;
              productType: Defined;
              productId: Defined;
            }
        );
      benefitsProviderId?: BenefitProvider_9356_.BenefitsProviderId;
    } & {
      identityId: Defined;
      customerId: Defined;
      payload: Defined;
      benefitsProviderId: Defined;
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
