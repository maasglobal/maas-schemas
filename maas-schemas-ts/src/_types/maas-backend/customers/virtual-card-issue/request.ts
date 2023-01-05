/*

undefined
MaaS customer virtual card issue async lambda request

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../core/components/api-common';
import * as Units_ from '../../../core/components/units';

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
  'https://schemas.maas.global/maas-backend/customers/virtual-card-issue/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    payload?: {
      providerName?: string;
      initialBalance?: {
        amount?: number;
        currency?: Units_.Currency;
      } & {
        amount: Defined;
        currency: Defined;
      };
      rollbackOnFailure?: boolean;
    } & {
      providerName: Defined;
      rollbackOnFailure: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
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
        payload: t.IntersectionC<
          [
            t.PartialC<{
              providerName: t.StringC;
              initialBalance: t.IntersectionC<
                [
                  t.PartialC<{
                    amount: t.NumberC;
                    currency: typeof Units_.Currency;
                  }>,
                  t.TypeC<{
                    amount: typeof Defined;
                    currency: typeof Defined;
                  }>,
                ]
              >;
              rollbackOnFailure: t.BooleanC;
            }>,
            t.TypeC<{
              providerName: typeof Defined;
              rollbackOnFailure: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
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
      payload: t.intersection([
        t.partial({
          providerName: t.string,
          initialBalance: t.intersection([
            t.partial({
              amount: t.number,
              currency: Units_.Currency,
            }),
            t.type({
              amount: Defined,
              currency: Defined,
            }),
          ]),
          rollbackOnFailure: t.boolean,
        }),
        t.type({
          providerName: Defined,
          rollbackOnFailure: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
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
      payload?: {
        providerName?: string;
        initialBalance?: {
          amount?: number;
          currency?: Units_.Currency;
        } & {
          amount: Defined;
          currency: Defined;
        };
        rollbackOnFailure?: boolean;
      } & {
        providerName: Defined;
        rollbackOnFailure: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      customerId: Defined;
      payload: Defined;
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
