/*

undefined
Response schema for updating state of a specific booking with a TSP ID from a TSP adapter

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../core/booking';
import * as State_ from '../../core/components/state';
import * as BookingOption_ from '../../core/booking-option';
import * as BookingMeta_ from '../../core/booking-meta';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/tsp/booking-update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    state?: State_.BookingState;
    leg?: BookingOption_.LegDelta;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    tspProduct?: BookingOption_.TspProduct;
  } & {
    tspId: Defined;
    state: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      state: State_.BookingState,
      leg: BookingOption_.LegDelta,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      token: Booking_.Token,
      tspProduct: BookingOption_.TspProduct,
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
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      state?: State_.BookingState;
      leg?: BookingOption_.LegDelta;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      tspProduct?: BookingOption_.TspProduct;
    } & {
      tspId: Defined;
      state: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
