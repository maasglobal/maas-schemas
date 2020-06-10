/*

undefined
Remote response schema, e.g. how MaaS-backend responds back to TSP

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../core/components/units';
import * as Booking_ from '../../core/booking';
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

export const schemaId =
  'http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json';

// BookingDelta
// The purpose of this remains a mystery
export type BookingDelta = t.Branded<
  {
    id?: Units_.Uuid;
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    state?: 'RESERVED' | 'CONFIRMED' | 'ACTIVATED' | 'EXPIRED' | 'CANCELLED' | 'REJECTED';
    leg?: BookingOption_.Leg;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    customer?: BookingOption_.Customer;
  } & {
    tspId: Defined;
    state: Defined;
  },
  BookingDeltaBrand
>;
export const BookingDelta = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('CONFIRMED'),
        t.literal('ACTIVATED'),
        t.literal('EXPIRED'),
        t.literal('CANCELLED'),
        t.literal('REJECTED'),
      ]),
      leg: BookingOption_.Leg,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      token: Booking_.Token,
      customer: BookingOption_.Customer,
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
      id?: Units_.Uuid;
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      state?:
        | 'RESERVED'
        | 'CONFIRMED'
        | 'ACTIVATED'
        | 'EXPIRED'
        | 'CANCELLED'
        | 'REJECTED';
      leg?: BookingOption_.Leg;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      customer?: BookingOption_.Customer;
    } & {
      tspId: Defined;
      state: Defined;
    },
    BookingDeltaBrand
  > => true,
  'BookingDelta',
);
export interface BookingDeltaBrand {
  readonly BookingDelta: unique symbol;
}

// RemoteResponse
// The default export. More information at the top.
export type RemoteResponse = t.Branded<
  {
    booking?: BookingDelta;
    debug?: {};
  },
  RemoteResponseBrand
>;
export const RemoteResponse = t.brand(
  t.partial({
    booking: BookingDelta,
    debug: t.type({}),
  }),
  (
    x,
  ): x is t.Branded<
    {
      booking?: BookingDelta;
      debug?: {};
    },
    RemoteResponseBrand
  > => true,
  'RemoteResponse',
);
export interface RemoteResponseBrand {
  readonly RemoteResponse: unique symbol;
}

export default RemoteResponse;

// Success
