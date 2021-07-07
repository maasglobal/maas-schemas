/*

undefined
Response schema for autocomplete suggestion

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
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
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'http://maasglobal.com/maas-backend/autocomplete/autocomplete-query/suggestion.json';

// Suggestion
// The default export. More information at the top.
export type Suggestion = t.Branded<
  {
    id?: string;
    label?: string;
    lat?: UnitsGeo_.RelaxedLatitude;
    lon?: UnitsGeo_.RelaxedLongitude;
    addressId?: string;
  } & {
    label: Defined;
  },
  SuggestionBrand
>;
export type SuggestionC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.StringC;
        label: t.StringC;
        lat: typeof UnitsGeo_.RelaxedLatitude;
        lon: typeof UnitsGeo_.RelaxedLongitude;
        addressId: t.StringC;
      }>,
      t.TypeC<{
        label: typeof Defined;
      }>,
    ]
  >,
  SuggestionBrand
>;
export const Suggestion: SuggestionC = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      label: t.string,
      lat: UnitsGeo_.RelaxedLatitude,
      lon: UnitsGeo_.RelaxedLongitude,
      addressId: t.string,
    }),
    t.type({
      label: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      label?: string;
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
      addressId?: string;
    } & {
      label: Defined;
    },
    SuggestionBrand
  > => true,
  'Suggestion',
);
export interface SuggestionBrand {
  readonly Suggestion: unique symbol;
}

export default Suggestion;

// Success
