/*

undefined
Request schema for upload photos of a specific booking with a TSP ID

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Booking_4353_ from '../../core/booking';

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

export const schemaId = 'https://schemas.maas.global/tsp/booking-upload/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    tspId?: Booking_4353_.TspId;
    query?: Record<string, unknown> & Record<string, unknown>;
  } & Record<string, unknown>) & {
    tspId: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            tspId: typeof Booking_4353_.TspId;
            query: t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        tspId: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        tspId: Booking_4353_.TspId,
        query: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      tspId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      tspId?: Booking_4353_.TspId;
      query?: Record<string, unknown> & Record<string, unknown>;
    } & Record<string, unknown>) & {
      tspId: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Request)).decodeSync(examplesRequest) // => examplesRequest */
export const examplesRequest: NonEmptyArray<Request> = [
  { query: { type: 'parking' }, tspId: 'deadbeefdeadbeefdeadcafebeef' },
] as unknown as NonEmptyArray<Request>;

export default Request;

// Success
