/*

undefined
Response schema for bookings-retrieve

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../../core/booking';

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

export const schemaId =
  'https://schemas.maas.global/maas-backend/bookings/bookings-cancel/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    booking?: Booking_.Booking &
      ({
        state?: string & ('CANCELLED' | 'CANCELLED_WITH_ERRORS');
      } & Record<string, unknown>);
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
        booking: t.IntersectionC<
          [
            typeof Booking_.Booking,
            t.IntersectionC<
              [
                t.PartialC<{
                  state: t.IntersectionC<
                    [
                      t.StringC,
                      t.UnionC<
                        [t.LiteralC<'CANCELLED'>, t.LiteralC<'CANCELLED_WITH_ERRORS'>]
                      >,
                    ]
                  >;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
          ]
        >;
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
      booking: t.intersection([
        Booking_.Booking,
        t.intersection([
          t.partial({
            state: t.intersection([
              t.string,
              t.union([t.literal('CANCELLED'), t.literal('CANCELLED_WITH_ERRORS')]),
            ]),
          }),
          t.record(t.string, t.unknown),
        ]),
      ]),
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
      booking?: Booking_.Booking &
        ({
          state?: string & ('CANCELLED' | 'CANCELLED_WITH_ERRORS');
        } & Record<string, unknown>);
      debug?: Record<string, unknown>;
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
