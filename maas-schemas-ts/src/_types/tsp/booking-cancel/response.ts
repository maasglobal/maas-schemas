/*

undefined
Response schema for canceling a booking through a TSP adapter

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../core/booking';
import * as BookingOption_ from '../../core/booking-option';
import * as BookingMeta_ from '../../core/booking-meta';

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
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'https://schemas.maas.global/tsp/booking-cancel/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    tspId?: Booking_.TspId;
    state?: 'CANCELLED' | 'RESERVED';
    cost?: Booking_.Cost;
    leg?: BookingOption_.Leg;
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
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        tspId: typeof Booking_.TspId;
        state: t.UnionC<[t.LiteralC<'CANCELLED'>, t.LiteralC<'RESERVED'>]>;
        cost: typeof Booking_.Cost;
        leg: typeof BookingOption_.Leg;
        meta: typeof BookingMeta_.BookingMeta;
        terms: typeof Booking_.Terms;
        token: typeof Booking_.Token;
        tspProduct: typeof BookingOption_.TspProduct;
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
      tspId: Booking_.TspId,
      state: t.union([t.literal('CANCELLED'), t.literal('RESERVED')]),
      cost: Booking_.Cost,
      leg: BookingOption_.Leg,
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
      state?: 'CANCELLED' | 'RESERVED';
      cost?: Booking_.Cost;
      leg?: BookingOption_.Leg;
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