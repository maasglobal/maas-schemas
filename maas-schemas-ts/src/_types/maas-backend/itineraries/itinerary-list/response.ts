/*

undefined
Response schema for itineraries-list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Itinerary_ from '../../../core/itinerary';

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
  'https://schemas.maas.global/maas-backend/itineraries/itinerary-list/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    itineraries?: Array<Itinerary_.Itinerary>;
    maas?: Record<string, unknown>;
  } & {
    itineraries: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        itineraries: t.ArrayC<typeof Itinerary_.Itinerary>;
        maas: t.RecordC<t.StringC, t.UnknownC>;
      }>,
      t.TypeC<{
        itineraries: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      itineraries: t.array(Itinerary_.Itinerary),
      maas: t.record(t.string, t.unknown),
    }),
    t.type({
      itineraries: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      itineraries?: Array<Itinerary_.Itinerary>;
      maas?: Record<string, unknown>;
    } & {
      itineraries: Defined;
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
