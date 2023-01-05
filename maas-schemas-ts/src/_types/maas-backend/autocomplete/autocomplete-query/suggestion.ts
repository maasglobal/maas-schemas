/*

undefined
Response schema for autocomplete suggestion

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as UnitsGeo_ from '../../../core/components/units-geo';

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
  'https://schemas.maas.global/maas-backend/autocomplete/autocomplete-query/suggestion.json';

// GoogleMeta
// Google autocomplete API specific metadata
export type GoogleMeta = t.Branded<
  {
    placeId?: string;
  },
  GoogleMetaBrand
>;
export type GoogleMetaC = t.BrandC<
  t.PartialC<{
    placeId: t.StringC;
  }>,
  GoogleMetaBrand
>;
export const GoogleMeta: GoogleMetaC = t.brand(
  t.partial({
    placeId: t.string,
  }),
  (
    x,
  ): x is t.Branded<
    {
      placeId?: string;
    },
    GoogleMetaBrand
  > => true,
  'GoogleMeta',
);
export type GoogleMetaBrand = {
  readonly GoogleMeta: unique symbol;
};

// RouterankMeta
// Routerank places API specific metadata
export type RouterankMeta = t.Branded<
  {
    id?: string;
    lat?: UnitsGeo_.RelaxedLatitude;
    lon?: UnitsGeo_.RelaxedLongitude;
  },
  RouterankMetaBrand
>;
export type RouterankMetaC = t.BrandC<
  t.PartialC<{
    id: t.StringC;
    lat: typeof UnitsGeo_.RelaxedLatitude;
    lon: typeof UnitsGeo_.RelaxedLongitude;
  }>,
  RouterankMetaBrand
>;
export const RouterankMeta: RouterankMetaC = t.brand(
  t.partial({
    id: t.string,
    lat: UnitsGeo_.RelaxedLatitude,
    lon: UnitsGeo_.RelaxedLongitude,
  }),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
    },
    RouterankMetaBrand
  > => true,
  'RouterankMeta',
);
export type RouterankMetaBrand = {
  readonly RouterankMeta: unique symbol;
};

// Suggestion
// The default export. More information at the top.
export type Suggestion = t.Branded<
  {
    label?: string;
    addressId?: string;
    meta?: {
      google?: GoogleMeta;
      routerank?: RouterankMeta;
    } & Record<string, unknown>;
  } & {
    label: Defined;
    meta: Defined;
  },
  SuggestionBrand
>;
export type SuggestionC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        label: t.StringC;
        addressId: t.StringC;
        meta: t.IntersectionC<
          [
            t.PartialC<{
              google: typeof GoogleMeta;
              routerank: typeof RouterankMeta;
            }>,
            t.RecordC<t.StringC, t.UnknownC>,
          ]
        >;
      }>,
      t.TypeC<{
        label: typeof Defined;
        meta: typeof Defined;
      }>,
    ]
  >,
  SuggestionBrand
>;
export const Suggestion: SuggestionC = t.brand(
  t.intersection([
    t.partial({
      label: t.string,
      addressId: t.string,
      meta: t.intersection([
        t.partial({
          google: GoogleMeta,
          routerank: RouterankMeta,
        }),
        t.record(t.string, t.unknown),
      ]),
    }),
    t.type({
      label: Defined,
      meta: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      label?: string;
      addressId?: string;
      meta?: {
        google?: GoogleMeta;
        routerank?: RouterankMeta;
      } & Record<string, unknown>;
    } & {
      label: Defined;
      meta: Defined;
    },
    SuggestionBrand
  > => true,
  'Suggestion',
);
export type SuggestionBrand = {
  readonly Suggestion: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Suggestion)).decodeSync(examplesSuggestion) // => examplesSuggestion */
export const examplesSuggestion: NonEmptyArray<Suggestion> = [
  {
    label: 'Nyons, France',
    meta: { google: { placeId: 'ChIJo_XBpV-ByhIREL6_5CqrCAQ' } },
  },
  {
    label: 'Nyon, Switzerland',
    addressId: 'rrPlaceId%3Ape--Nyon--whosonfirst%3Alocality%3A101914095',
    meta: {
      routerank: {
        id: 'pe--Nyon--whosonfirst:locality:101914095',
        lat: 46.38641,
        lon: 6.23562,
      },
    },
  },
] as unknown as NonEmptyArray<Suggestion>;

export default Suggestion;

// Success
