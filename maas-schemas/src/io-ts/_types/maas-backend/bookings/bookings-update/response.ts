/*

undefined
Response schema for bookings-update

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Booking_4353_ from '../../../core/booking';

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
  'https://schemas.maas.global/maas-backend/bookings/bookings-update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    booking?: Booking_4353_.Booking;
    debug?: Record<string, unknown>;
  } & {
    booking: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        booking: typeof Booking_4353_.Booking;
        debug: t.RecordC<t.StringC, t.UnknownC>;
      }>,
      t.TypeC<{
        booking: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      booking: Booking_4353_.Booking,
      debug: t.record(t.string, t.unknown),
    }),
    t.type({
      booking: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      booking?: Booking_4353_.Booking;
      debug?: Record<string, unknown>;
    } & {
      booking: Defined;
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
