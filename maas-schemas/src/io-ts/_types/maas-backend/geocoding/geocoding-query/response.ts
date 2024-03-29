/*

undefined
MaaS.fi geocoding (GeoJSON) response schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Geolocation_1f89_ from '../../../core/components/geolocation';

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
  'https://schemas.maas.global/maas-backend/geocoding/geocoding-query/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    type?: 'FeatureCollection';
    features?: Array<Geolocation_1f89_.Feature>;
    debug?: Record<string, unknown> & Record<string, unknown>;
  } & {
    type: Defined;
    features: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.LiteralC<'FeatureCollection'>;
        features: t.ArrayC<typeof Geolocation_1f89_.Feature>;
        debug: t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>;
      }>,
      t.TypeC<{
        type: typeof Defined;
        features: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('FeatureCollection'),
      features: t.array(Geolocation_1f89_.Feature),
      debug: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
    }),
    t.type({
      type: Defined,
      features: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'FeatureCollection';
      features?: Array<Geolocation_1f89_.Feature>;
      debug?: Record<string, unknown> & Record<string, unknown>;
    } & {
      type: Defined;
      features: Defined;
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
