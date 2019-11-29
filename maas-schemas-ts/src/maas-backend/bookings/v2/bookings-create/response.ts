/*

undefined
Response schema for bookings-create v2

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as PaymentParameters_ from 'maas-schemas-ts/core/components/payment-parameters';

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
  'http://maasglobal.com/maas-backend/bookings/v2/bookings-create/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    booking?: Booking_.Booking;
    paymentParameters?: {
      avainpay?: PaymentParameters_.AvainpayPaymentParameters;
      stripe?: PaymentParameters_.StripePaymentParameters;
    };
    debug?: {};
  } & {
    booking: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      booking: Booking_.Booking,
      paymentParameters: t.partial({
        avainpay: PaymentParameters_.AvainpayPaymentParameters,
        stripe: PaymentParameters_.StripePaymentParameters,
      }),
      debug: t.type({}),
    }),
    t.type({
      booking: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      booking?: Booking_.Booking;
      paymentParameters?: {
        avainpay?: PaymentParameters_.AvainpayPaymentParameters;
        stripe?: PaymentParameters_.StripePaymentParameters;
      };
      debug?: {};
    } & {
      booking: Defined;
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
