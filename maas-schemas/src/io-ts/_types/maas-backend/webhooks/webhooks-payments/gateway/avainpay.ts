/*

undefined
Avainpay payment webhook schema

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
  'https://schemas.maas.global/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json';

// Request
// The purpose of this remains a mystery
export type Request = t.Branded<
  ({
    payload?: ({
      action_str?: string;
      data_type?: string;
      log_list?: Array<unknown>;
      trans_map?: {
        system_time?: number;
        nonce?: string;
        signature?: string;
      } & Record<string, unknown>;
      request_map?: Record<string, unknown> & Record<string, unknown>;
    } & Record<string, unknown>) & {
      action_str: Defined;
      data_type: Defined;
    };
    headers?: {
      'Set-Cookie'?: string;
    } & Record<string, unknown>;
    params?: ({
      gatewayName?: string & 'avainpay';
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
                      action_str: t.StringC;
                      data_type: t.StringC;
                      log_list: t.UnknownArrayC;
                      trans_map: t.IntersectionC<
                        [
                          t.PartialC<{
                            system_time: t.NumberC;
                            nonce: t.StringC;
                            signature: t.StringC;
                          }>,
                          t.RecordC<t.StringC, t.UnknownC>,
                        ]
                      >;
                      request_map: t.IntersectionC<
                        [t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]
                      >;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  action_str: typeof Defined;
                  data_type: typeof Defined;
                }>,
              ]
            >;
            headers: t.IntersectionC<
              [
                t.PartialC<{
                  'Set-Cookie': t.StringC;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >;
            params: t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      gatewayName: t.IntersectionC<[t.StringC, t.LiteralC<'avainpay'>]>;
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
              action_str: t.string,
              data_type: t.string,
              log_list: t.UnknownArray,
              trans_map: t.intersection([
                t.partial({
                  system_time: t.number,
                  nonce: t.string,
                  signature: t.string,
                }),
                t.record(t.string, t.unknown),
              ]),
              request_map: t.intersection([
                t.UnknownRecord,
                t.record(t.string, t.unknown),
              ]),
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            action_str: Defined,
            data_type: Defined,
          }),
        ]),
        headers: t.intersection([
          t.partial({
            'Set-Cookie': t.string,
          }),
          t.record(t.string, t.unknown),
        ]),
        params: t.intersection([
          t.intersection([
            t.partial({
              gatewayName: t.intersection([t.string, t.literal('avainpay')]),
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
        action_str?: string;
        data_type?: string;
        log_list?: Array<unknown>;
        trans_map?: {
          system_time?: number;
          nonce?: string;
          signature?: string;
        } & Record<string, unknown>;
        request_map?: Record<string, unknown> & Record<string, unknown>;
      } & Record<string, unknown>) & {
        action_str: Defined;
        data_type: Defined;
      };
      headers?: {
        'Set-Cookie'?: string;
      } & Record<string, unknown>;
      params?: ({
        gatewayName?: string & 'avainpay';
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

// Avainpay
// The default export. More information at the top.
export type Avainpay = t.Branded<unknown, AvainpayBrand>;
export type AvainpayC = t.BrandC<t.UnknownC, AvainpayBrand>;
export const Avainpay: AvainpayC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, AvainpayBrand> => true,
  'Avainpay',
);
export type AvainpayBrand = {
  readonly Avainpay: unique symbol;
};

export default Avainpay;

// Success
