/*

undefined
Response schema for getting a specific booking with a TSP ID from a TSP adapter

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Booking_4353_ from '../../core/booking';
import * as BookingMeta_c057_ from '../../core/booking-meta';
import * as BookingOption_9a80_ from '../../core/booking-option';
import * as State_2db3_ from '../../core/components/state';
import * as Error_b620_ from '../../core/error';

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
  'https://schemas.maas.global/tsp/booking-read-by-id/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    tspId?: Booking_4353_.TspId;
    cost?: Booking_4353_.Cost;
    state?: State_2db3_.BookingState;
    leg?: BookingOption_9a80_.LegDelta;
    meta?: BookingMeta_c057_.BookingMeta;
    terms?: Booking_4353_.Terms;
    token?: Booking_4353_.Token;
    tspProduct?: BookingOption_9a80_.TspProduct;
    error?: ({
      message?: Error_b620_.ErrorMessage;
      code?: Error_b620_.ErrorCode;
    } & Record<string, unknown>) & {
      message: Defined;
      code: Defined;
    };
  } & {
    tspId: Defined;
    state: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        tspId: typeof Booking_4353_.TspId;
        cost: typeof Booking_4353_.Cost;
        state: typeof State_2db3_.BookingState;
        leg: typeof BookingOption_9a80_.LegDelta;
        meta: typeof BookingMeta_c057_.BookingMeta;
        terms: typeof Booking_4353_.Terms;
        token: typeof Booking_4353_.Token;
        tspProduct: typeof BookingOption_9a80_.TspProduct;
        error: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  message: typeof Error_b620_.ErrorMessage;
                  code: typeof Error_b620_.ErrorCode;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              message: typeof Defined;
              code: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        tspId: typeof Defined;
        state: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_4353_.TspId,
      cost: Booking_4353_.Cost,
      state: State_2db3_.BookingState,
      leg: BookingOption_9a80_.LegDelta,
      meta: BookingMeta_c057_.BookingMeta,
      terms: Booking_4353_.Terms,
      token: Booking_4353_.Token,
      tspProduct: BookingOption_9a80_.TspProduct,
      error: t.intersection([
        t.intersection([
          t.partial({
            message: Error_b620_.ErrorMessage,
            code: Error_b620_.ErrorCode,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          message: Defined,
          code: Defined,
        }),
      ]),
    }),
    t.type({
      tspId: Defined,
      state: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_4353_.TspId;
      cost?: Booking_4353_.Cost;
      state?: State_2db3_.BookingState;
      leg?: BookingOption_9a80_.LegDelta;
      meta?: BookingMeta_c057_.BookingMeta;
      terms?: Booking_4353_.Terms;
      token?: Booking_4353_.Token;
      tspProduct?: BookingOption_9a80_.TspProduct;
      error?: ({
        message?: Error_b620_.ErrorMessage;
        code?: Error_b620_.ErrorCode;
      } & Record<string, unknown>) & {
        message: Defined;
        code: Defined;
      };
    } & {
      tspId: Defined;
      state: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
