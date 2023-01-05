/*

undefined
Partial (Points only) GeoJSON Schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Address_ from './address';
import * as UnitsGeo_ from './units-geo';

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

export const schemaId = 'https://schemas.maas.global/core/components/geolocation.json';

// Geometry
// The purpose of this remains a mystery
export type Geometry = t.Branded<
  {
    type?: 'Point';
    coordinates?: UnitsGeo_.ShortLocation;
  } & {
    type: Defined;
    coordinates: Defined;
  },
  GeometryBrand
>;
export type GeometryC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.LiteralC<'Point'>;
        coordinates: typeof UnitsGeo_.ShortLocation;
      }>,
      t.TypeC<{
        type: typeof Defined;
        coordinates: typeof Defined;
      }>,
    ]
  >,
  GeometryBrand
>;
export const Geometry: GeometryC = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('Point'),
      coordinates: UnitsGeo_.ShortLocation,
    }),
    t.type({
      type: Defined,
      coordinates: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'Point';
      coordinates?: UnitsGeo_.ShortLocation;
    } & {
      type: Defined;
      coordinates: Defined;
    },
    GeometryBrand
  > => true,
  'Geometry',
);
export type GeometryBrand = {
  readonly Geometry: unique symbol;
};

// Properties
// The purpose of this remains a mystery
export type Properties = t.Branded<
  ({
    name?: string;
    streetNumber?: string;
    streetName?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    houseNumber?: number;
    zipcode?: Address_.ZipCode;
  } & Record<string, unknown>) & {
    name: Defined;
  },
  PropertiesBrand
>;
export type PropertiesC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            name: t.StringC;
            streetNumber: t.StringC;
            streetName: t.StringC;
            city: t.StringC;
            country: t.StringC;
            countryCode: t.StringC;
            houseNumber: t.NumberC;
            zipcode: typeof Address_.ZipCode;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        name: typeof Defined;
      }>,
    ]
  >,
  PropertiesBrand
>;
export const Properties: PropertiesC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        name: t.string,
        streetNumber: t.string,
        streetName: t.string,
        city: t.string,
        country: t.string,
        countryCode: t.string,
        houseNumber: t.number,
        zipcode: Address_.ZipCode,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      name: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      name?: string;
      streetNumber?: string;
      streetName?: string;
      city?: string;
      country?: string;
      countryCode?: string;
      houseNumber?: number;
      zipcode?: Address_.ZipCode;
    } & Record<string, unknown>) & {
      name: Defined;
    },
    PropertiesBrand
  > => true,
  'Properties',
);
export type PropertiesBrand = {
  readonly Properties: unique symbol;
};

// Feature
// The purpose of this remains a mystery
export type Feature = t.Branded<
  {
    type?: 'Feature';
    geometry?: Geometry;
    properties?: Properties;
  } & {
    type: Defined;
    geometry: Defined;
    properties: Defined;
  },
  FeatureBrand
>;
export type FeatureC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.LiteralC<'Feature'>;
        geometry: typeof Geometry;
        properties: typeof Properties;
      }>,
      t.TypeC<{
        type: typeof Defined;
        geometry: typeof Defined;
        properties: typeof Defined;
      }>,
    ]
  >,
  FeatureBrand
>;
export const Feature: FeatureC = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('Feature'),
      geometry: Geometry,
      properties: Properties,
    }),
    t.type({
      type: Defined,
      geometry: Defined,
      properties: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'Feature';
      geometry?: Geometry;
      properties?: Properties;
    } & {
      type: Defined;
      geometry: Defined;
      properties: Defined;
    },
    FeatureBrand
  > => true,
  'Feature',
);
export type FeatureBrand = {
  readonly Feature: unique symbol;
};

// FeatureCollection
// The purpose of this remains a mystery
export type FeatureCollection = t.Branded<
  ({
    type?: 'FeatureCollection';
    features?: Array<Feature>;
  } & Record<string, unknown>) & {
    type: Defined;
    features: Defined;
  },
  FeatureCollectionBrand
>;
export type FeatureCollectionC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            type: t.LiteralC<'FeatureCollection'>;
            features: t.ArrayC<typeof Feature>;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        type: typeof Defined;
        features: typeof Defined;
      }>,
    ]
  >,
  FeatureCollectionBrand
>;
export const FeatureCollection: FeatureCollectionC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        type: t.literal('FeatureCollection'),
        features: t.array(Feature),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      type: Defined,
      features: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      type?: 'FeatureCollection';
      features?: Array<Feature>;
    } & Record<string, unknown>) & {
      type: Defined;
      features: Defined;
    },
    FeatureCollectionBrand
  > => true,
  'FeatureCollection',
);
export type FeatureCollectionBrand = {
  readonly FeatureCollection: unique symbol;
};

// Geolocation
// The default export. More information at the top.
export type Geolocation = t.Branded<unknown, GeolocationBrand>;
export type GeolocationC = t.BrandC<t.UnknownC, GeolocationBrand>;
export const Geolocation: GeolocationC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, GeolocationBrand> => true,
  'Geolocation',
);
export type GeolocationBrand = {
  readonly Geolocation: unique symbol;
};

export default Geolocation;

// Success
