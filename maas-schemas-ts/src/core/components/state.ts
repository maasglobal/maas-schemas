/*

undefined
MaaS state schemas

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/state.json';

// BookingState
// The life-cycle state of a booking
export type BookingState = t.Branded<
  string &
    (
      | 'START'
      | 'PENDING'
      | 'PAID'
      | 'RESERVED'
      | 'CONFIRMED'
      | 'ARRIVED'
      | 'ACTIVATED'
      | 'ON_HOLD'
      | 'CANCELLED'
      | 'EXPIRED'
      | 'REJECTED'
      | 'FINISHED'
      | 'UNKNOWN'
    ),
  BookingStateBrand
>;
export const BookingState = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('START'),
      t.literal('PENDING'),
      t.literal('PAID'),
      t.literal('RESERVED'),
      t.literal('CONFIRMED'),
      t.literal('ARRIVED'),
      t.literal('ACTIVATED'),
      t.literal('ON_HOLD'),
      t.literal('CANCELLED'),
      t.literal('EXPIRED'),
      t.literal('REJECTED'),
      t.literal('FINISHED'),
      t.literal('UNKNOWN'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'START'
        | 'PENDING'
        | 'PAID'
        | 'RESERVED'
        | 'CONFIRMED'
        | 'ARRIVED'
        | 'ACTIVATED'
        | 'ON_HOLD'
        | 'CANCELLED'
        | 'EXPIRED'
        | 'REJECTED'
        | 'FINISHED'
        | 'UNKNOWN'
      ),
    BookingStateBrand
  > => true,
  'BookingState',
);
export interface BookingStateBrand {
  readonly BookingState: unique symbol;
}

// LegState
// The life-cycle state of a leg
export type LegState = t.Branded<
  string & ('START' | 'PLANNED' | 'PAID' | 'ACTIVATED' | 'CANCELLED' | 'FINISHED'),
  LegStateBrand
>;
export const LegState = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('START'),
      t.literal('PLANNED'),
      t.literal('PAID'),
      t.literal('ACTIVATED'),
      t.literal('CANCELLED'),
      t.literal('FINISHED'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string & ('START' | 'PLANNED' | 'PAID' | 'ACTIVATED' | 'CANCELLED' | 'FINISHED'),
    LegStateBrand
  > => true,
  'LegState',
);
export interface LegStateBrand {
  readonly LegState: unique symbol;
}

// ItineraryState
// The life-cycle state of an itinerary
export type ItineraryState = t.Branded<
  string &
    (
      | 'START'
      | 'PLANNED'
      | 'PAID'
      | 'ACTIVATED'
      | 'CANCELLED'
      | 'CANCELLED_WITH_ERRORS'
      | 'FINISHED'
    ),
  ItineraryStateBrand
>;
export const ItineraryState = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('START'),
      t.literal('PLANNED'),
      t.literal('PAID'),
      t.literal('ACTIVATED'),
      t.literal('CANCELLED'),
      t.literal('CANCELLED_WITH_ERRORS'),
      t.literal('FINISHED'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'START'
        | 'PLANNED'
        | 'PAID'
        | 'ACTIVATED'
        | 'CANCELLED'
        | 'CANCELLED_WITH_ERRORS'
        | 'FINISHED'
      ),
    ItineraryStateBrand
  > => true,
  'ItineraryState',
);
export interface ItineraryStateBrand {
  readonly ItineraryState: unique symbol;
}

// SubscriptionIntentState
// The life-cycle state of an subscription intent
export type SubscriptionIntentState = t.Branded<
  string &
    (
      | 'START'
      | 'DETAILS'
      | 'CUSTOMISATION'
      | 'PAYMENT'
      | 'VERIFICATION'
      | 'CANCELLED'
      | 'CANCELLED_WITH_ERRORS'
      | 'FINISHED'
    ),
  SubscriptionIntentStateBrand
>;
export const SubscriptionIntentState = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('START'),
      t.literal('DETAILS'),
      t.literal('CUSTOMISATION'),
      t.literal('PAYMENT'),
      t.literal('VERIFICATION'),
      t.literal('CANCELLED'),
      t.literal('CANCELLED_WITH_ERRORS'),
      t.literal('FINISHED'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'START'
        | 'DETAILS'
        | 'CUSTOMISATION'
        | 'PAYMENT'
        | 'VERIFICATION'
        | 'CANCELLED'
        | 'CANCELLED_WITH_ERRORS'
        | 'FINISHED'
      ),
    SubscriptionIntentStateBrand
  > => true,
  'SubscriptionIntentState',
);
export interface SubscriptionIntentStateBrand {
  readonly SubscriptionIntentState: unique symbol;
}

// State
// The default export. More information at the top.
export type State = t.Branded<unknown, StateBrand>;
export const State = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, StateBrand> => true,
  'State',
);
export interface StateBrand {
  readonly State: unique symbol;
}

export default State;

// Success
