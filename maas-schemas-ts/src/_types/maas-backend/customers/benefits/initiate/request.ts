/*

undefined
MaaS customer benefits initiate

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../../core/components/units';
import * as ApiCommon_ from '../../../../core/components/api-common';

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
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/customers/benefits/initiate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
    identityId?: Units_.IdentityId;
    payload?: ({
      amount?: number;
      currency?: Units_.Currency;
      productType?: string & ('product' | 'subscription');
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
  } & {
    identityId: Defined;
    customerId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        customerId: typeof Units_.IdentityId;
        headers: typeof ApiCommon_.Headers;
        identityId: typeof Units_.IdentityId;
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  amount: t.NumberC;
                  currency: typeof Units_.Currency;
                  productType: t.IntersectionC<
                    [
                      t.StringC,
                      t.UnionC<[t.LiteralC<'product'>, t.LiteralC<'subscription'>]>,
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
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
        payload: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      headers: ApiCommon_.Headers,
      identityId: Units_.IdentityId,
      payload: t.intersection([
        t.intersection([
          t.partial({
            amount: t.number,
            currency: Units_.Currency,
            productType: t.intersection([
              t.string,
              t.union([t.literal('product'), t.literal('subscription')]),
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
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      headers?: ApiCommon_.Headers;
      identityId?: Units_.IdentityId;
      payload?: ({
        amount?: number;
        currency?: Units_.Currency;
        productType?: string & ('product' | 'subscription');
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
    } & {
      identityId: Defined;
      customerId: Defined;
      payload: Defined;
      headers: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success