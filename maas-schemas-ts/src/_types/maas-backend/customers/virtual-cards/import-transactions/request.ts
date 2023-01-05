/*

undefined
MaaS customer virtual cards import transactions

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../../core/components/api-common';
import * as Units_ from '../../../../core/components/units';

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
  'https://schemas.maas.global/maas-backend/customers/virtual-cards/import-transactions/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
    identityId?: Units_.IdentityId;
    virtualCardId?: number;
    payload?: {
      transactions?: Array<
        ({
          id?: string;
          date?: Units_.Time;
          amount?: number;
        } & Record<string, unknown>) & {
          id: Defined;
          date: Defined;
          amount: Defined;
        }
      >;
    } & {
      transactions: Defined;
    };
  } & {
    identityId: Defined;
    customerId: Defined;
    virtualCardId: Defined;
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
        virtualCardId: t.NumberC;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              transactions: t.ArrayC<
                t.IntersectionC<
                  [
                    t.IntersectionC<
                      [
                        t.PartialC<{
                          id: t.StringC;
                          date: typeof Units_.Time;
                          amount: t.NumberC;
                        }>,
                        t.RecordC<t.StringC, t.UnknownC>,
                      ]
                    >,
                    t.TypeC<{
                      id: typeof Defined;
                      date: typeof Defined;
                      amount: typeof Defined;
                    }>,
                  ]
                >
              >;
            }>,
            t.TypeC<{
              transactions: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
        virtualCardId: typeof Defined;
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
      virtualCardId: t.number,
      payload: t.intersection([
        t.partial({
          transactions: t.array(
            t.intersection([
              t.intersection([
                t.partial({
                  id: t.string,
                  date: Units_.Time,
                  amount: t.number,
                }),
                t.record(t.string, t.unknown),
              ]),
              t.type({
                id: Defined,
                date: Defined,
                amount: Defined,
              }),
            ]),
          ),
        }),
        t.type({
          transactions: Defined,
        }),
      ]),
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      virtualCardId: Defined,
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
      virtualCardId?: number;
      payload?: {
        transactions?: Array<
          ({
            id?: string;
            date?: Units_.Time;
            amount?: number;
          } & Record<string, unknown>) & {
            id: Defined;
            date: Defined;
            amount: Defined;
          }
        >;
      } & {
        transactions: Defined;
      };
    } & {
      identityId: Defined;
      customerId: Defined;
      virtualCardId: Defined;
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
