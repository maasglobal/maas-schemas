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

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    booking?: Booking_.Default;
    paymentParameters?: {
      avainpay?: PaymentParameters_.AvainpayPaymentParameters;
      stripe?: PaymentParameters_.StripePaymentParameters;
    };
    debug?: {};
  } & {
    booking: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      booking: Booking_.Default,
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
      booking?: Booking_.Default;
      paymentParameters?: {
        avainpay?: PaymentParameters_.AvainpayPaymentParameters;
        stripe?: PaymentParameters_.StripePaymentParameters;
      };
      debug?: {};
    } & {
      booking: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
