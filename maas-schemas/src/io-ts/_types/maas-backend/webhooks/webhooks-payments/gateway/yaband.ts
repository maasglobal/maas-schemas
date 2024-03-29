/*

undefined
YaBand payment webhook schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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
  'https://schemas.maas.global/maas-backend/webhooks/webhooks-payments/gateway/yaband.json';

// Request
// The purpose of this remains a mystery
export type Request = t.Branded<
  ({
    payload?: ({
      sign?: string;
      data?: ({
        type?: string;
        order_id?: string;
        trade_id?: string;
        transaction_id?: string;
        state?: string;
      } & Record<string, unknown>) & {
        type: Defined;
        order_id: Defined;
        state: Defined;
      };
    } & Record<string, unknown>) & {
      sign: Defined;
      data: Defined;
    };
    headers?: Record<string, unknown> & Record<string, unknown>;
    params?: ({
      gatewayName?: string & 'yaband';
    } & Record<string, unknown>) & {
      gatewayName: Defined;
    };
  } & Record<string, unknown>) & {
    params: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            payload: t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      sign: t.StringC;
                      data: t.IntersectionC<
                        [
                          t.IntersectionC<
                            [
                              t.PartialC<{
                                type: t.StringC;
                                order_id: t.StringC;
                                trade_id: t.StringC;
                                transaction_id: t.StringC;
                                state: t.StringC;
                              }>,
                              t.RecordC<t.StringC, t.UnknownC>,
                            ]
                          >,
                          t.TypeC<{
                            type: typeof Defined;
                            order_id: typeof Defined;
                            state: typeof Defined;
                          }>,
                        ]
                      >;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  sign: typeof Defined;
                  data: typeof Defined;
                }>,
              ]
            >;
            headers: t.IntersectionC<
              [t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]
            >;
            params: t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      gatewayName: t.IntersectionC<[t.StringC, t.LiteralC<'yaband'>]>;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  gatewayName: typeof Defined;
                }>,
              ]
            >;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        params: typeof Defined;
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        payload: t.intersection([
          t.intersection([
            t.partial({
              sign: t.string,
              data: t.intersection([
                t.intersection([
                  t.partial({
                    type: t.string,
                    order_id: t.string,
                    trade_id: t.string,
                    transaction_id: t.string,
                    state: t.string,
                  }),
                  t.record(t.string, t.unknown),
                ]),
                t.type({
                  type: Defined,
                  order_id: Defined,
                  state: Defined,
                }),
              ]),
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            sign: Defined,
            data: Defined,
          }),
        ]),
        headers: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
        params: t.intersection([
          t.intersection([
            t.partial({
              gatewayName: t.intersection([t.string, t.literal('yaband')]),
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            gatewayName: Defined,
          }),
        ]),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      params: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      payload?: ({
        sign?: string;
        data?: ({
          type?: string;
          order_id?: string;
          trade_id?: string;
          transaction_id?: string;
          state?: string;
        } & Record<string, unknown>) & {
          type: Defined;
          order_id: Defined;
          state: Defined;
        };
      } & Record<string, unknown>) & {
        sign: Defined;
        data: Defined;
      };
      headers?: Record<string, unknown> & Record<string, unknown>;
      params?: ({
        gatewayName?: string & 'yaband';
      } & Record<string, unknown>) & {
        gatewayName: Defined;
      };
    } & Record<string, unknown>) & {
      params: Defined;
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

// Yaband
// The default export. More information at the top.
export type Yaband = t.Branded<unknown, YabandBrand>;
export type YabandC = t.BrandC<t.UnknownC, YabandBrand>;
export const Yaband: YabandC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, YabandBrand> => true,
  'Yaband',
);
export type YabandBrand = {
  readonly Yaband: unique symbol;
};

export default Yaband;

// Success
