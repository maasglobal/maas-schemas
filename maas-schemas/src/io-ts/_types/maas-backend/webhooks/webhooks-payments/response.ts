/*

undefined
Response for MaaS webhook to receive payment status updates from payment gateways.

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
  'https://schemas.maas.global/maas-backend/webhooks/webhooks-payments/response.json';

// AvainpayResponse
// The purpose of this remains a mystery
export type AvainpayResponse = t.Branded<
  ({
    action_str?: string;
    data_type?: string;
    log_list?: Array<unknown>;
    trans_map?: {
      system_time?: number;
      nonce?: string;
      signature?: string;
    } & Record<string, unknown>;
    response_map?: Record<string, unknown> & Record<string, unknown>;
  } & Record<string, unknown>) & {
    action_str: Defined;
    data_type: Defined;
  },
  AvainpayResponseBrand
>;
export type AvainpayResponseC = t.BrandC<
  t.IntersectionC<
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
            response_map: t.IntersectionC<
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
  >,
  AvainpayResponseBrand
>;
export const AvainpayResponse: AvainpayResponseC = t.brand(
  t.intersection([
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
        response_map: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      action_str: Defined,
      data_type: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      action_str?: string;
      data_type?: string;
      log_list?: Array<unknown>;
      trans_map?: {
        system_time?: number;
        nonce?: string;
        signature?: string;
      } & Record<string, unknown>;
      response_map?: Record<string, unknown> & Record<string, unknown>;
    } & Record<string, unknown>) & {
      action_str: Defined;
      data_type: Defined;
    },
    AvainpayResponseBrand
  > => true,
  'AvainpayResponse',
);
export type AvainpayResponseBrand = {
  readonly AvainpayResponse: unique symbol;
};

// Response
// The default export. More information at the top.
export type Response = t.Branded<AvainpayResponse, ResponseBrand>;
export type ResponseC = t.BrandC<typeof AvainpayResponse, ResponseBrand>;
export const Response: ResponseC = t.brand(
  AvainpayResponse,
  (x): x is t.Branded<AvainpayResponse, ResponseBrand> => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
