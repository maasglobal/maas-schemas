/*

undefined
Format for multi-modal plans

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Units_c404_ from './components/units';
import * as ItineraryV2_5f31_ from './itineraryV2';

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

export const schemaId = 'https://schemas.maas.global/core/multimodal-plan.json';

// Itineraries
// The purpose of this remains a mystery
export type Itineraries = t.Branded<
  Array<ItineraryV2_5f31_.ItineraryV2>,
  ItinerariesBrand
>;
export type ItinerariesC = t.BrandC<
  t.ArrayC<typeof ItineraryV2_5f31_.ItineraryV2>,
  ItinerariesBrand
>;
export const Itineraries: ItinerariesC = t.brand(
  t.array(ItineraryV2_5f31_.ItineraryV2),
  (x): x is t.Branded<Array<ItineraryV2_5f31_.ItineraryV2>, ItinerariesBrand> => true,
  'Itineraries',
);
export type ItinerariesBrand = {
  readonly Itineraries: unique symbol;
};

// MultimodalPlan
// The default export. More information at the top.
export type MultimodalPlan = t.Branded<
  ({
    planId?: Units_c404_.Uuid;
    outwards?: Itineraries;
    returns?: Itineraries;
  } & Record<string, unknown>) & {
    planId: Defined;
    outwards: Defined;
    returns: Defined;
  },
  MultimodalPlanBrand
>;
export type MultimodalPlanC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            planId: typeof Units_c404_.Uuid;
            outwards: typeof Itineraries;
            returns: typeof Itineraries;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        planId: typeof Defined;
        outwards: typeof Defined;
        returns: typeof Defined;
      }>,
    ]
  >,
  MultimodalPlanBrand
>;
export const MultimodalPlan: MultimodalPlanC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        planId: Units_c404_.Uuid,
        outwards: Itineraries,
        returns: Itineraries,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      planId: Defined,
      outwards: Defined,
      returns: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      planId?: Units_c404_.Uuid;
      outwards?: Itineraries;
      returns?: Itineraries;
    } & Record<string, unknown>) & {
      planId: Defined;
      outwards: Defined;
      returns: Defined;
    },
    MultimodalPlanBrand
  > => true,
  'MultimodalPlan',
);
export type MultimodalPlanBrand = {
  readonly MultimodalPlan: unique symbol;
};

export default MultimodalPlan;

// Success
