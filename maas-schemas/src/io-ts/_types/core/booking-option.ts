/*

undefined
MaaS single TSP adapter option

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as BookingMeta_c057_ from './booking-meta';
import * as Common_ffba_ from './components/common';
import * as Configurator_2e96_ from './components/configurator';
import * as Cost_250f_ from './components/cost';
import * as Place_de2d_ from './components/place';
import * as Terms_bb95_ from './components/terms';
import * as TravelMode_5e34_ from './components/travel-mode';
import * as Units_c404_ from './components/units';
import * as UnitsGeo_3e31_ from './components/units-geo';
import * as Customer_c745_ from './customer';

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

export const schemaId = 'https://schemas.maas.global/core/booking-option.json';

// Leg
// A subset of the standard leg (../core/leg.json)
export type Leg = t.Branded<
  {
    mode?: TravelMode_5e34_.TravelMode;
    startTime?: Units_c404_.Time;
    endTime?: Units_c404_.Time;
    from?: Place_de2d_.Place;
    to?: Place_de2d_.Place;
    departureDelay?: Units_c404_.Duration;
    distance?: UnitsGeo_3e31_.Distance;
    agencyId?: Common_ffba_.AgencyId;
  } & {
    mode: Defined;
    startTime: Defined;
    endTime: Defined;
    from: Defined;
    to: Defined;
  },
  LegBrand
>;
export type LegC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        mode: typeof TravelMode_5e34_.TravelMode;
        startTime: typeof Units_c404_.Time;
        endTime: typeof Units_c404_.Time;
        from: typeof Place_de2d_.Place;
        to: typeof Place_de2d_.Place;
        departureDelay: typeof Units_c404_.Duration;
        distance: typeof UnitsGeo_3e31_.Distance;
        agencyId: typeof Common_ffba_.AgencyId;
      }>,
      t.TypeC<{
        mode: typeof Defined;
        startTime: typeof Defined;
        endTime: typeof Defined;
        from: typeof Defined;
        to: typeof Defined;
      }>,
    ]
  >,
  LegBrand
>;
export const Leg: LegC = t.brand(
  t.intersection([
    t.partial({
      mode: TravelMode_5e34_.TravelMode,
      startTime: Units_c404_.Time,
      endTime: Units_c404_.Time,
      from: Place_de2d_.Place,
      to: Place_de2d_.Place,
      departureDelay: Units_c404_.Duration,
      distance: UnitsGeo_3e31_.Distance,
      agencyId: Common_ffba_.AgencyId,
    }),
    t.type({
      mode: Defined,
      startTime: Defined,
      endTime: Defined,
      from: Defined,
      to: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_5e34_.TravelMode;
      startTime?: Units_c404_.Time;
      endTime?: Units_c404_.Time;
      from?: Place_de2d_.Place;
      to?: Place_de2d_.Place;
      departureDelay?: Units_c404_.Duration;
      distance?: UnitsGeo_3e31_.Distance;
      agencyId?: Common_ffba_.AgencyId;
    } & {
      mode: Defined;
      startTime: Defined;
      endTime: Defined;
      from: Defined;
      to: Defined;
    },
    LegBrand
  > => true,
  'Leg',
);
export type LegBrand = {
  readonly Leg: unique symbol;
};

// TspProduct
// Defines what kind of TSP product the booking option represents.
export type TspProduct = t.Branded<
  {
    id?: string;
    name?: string;
  } & {
    id: Defined;
  },
  TspProductBrand
>;
export type TspProductC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.StringC;
        name: t.StringC;
      }>,
      t.TypeC<{
        id: typeof Defined;
      }>,
    ]
  >,
  TspProductBrand
>;
export const TspProduct: TspProductC = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
    }),
    t.type({
      id: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
    } & {
      id: Defined;
    },
    TspProductBrand
  > => true,
  'TspProduct',
);
export type TspProductBrand = {
  readonly TspProduct: unique symbol;
};

// Customer
// MaaS booking customer
export type Customer = t.Branded<Customer_c745_.Customer, CustomerBrand>;
export type CustomerC = t.BrandC<typeof Customer_c745_.Customer, CustomerBrand>;
export const Customer: CustomerC = t.brand(
  Customer_c745_.Customer,
  (x): x is t.Branded<Customer_c745_.Customer, CustomerBrand> => true,
  'Customer',
);
export type CustomerBrand = {
  readonly Customer: unique symbol;
};

// ContentWithCost
// The purpose of this remains a mystery
export type ContentWithCost = t.Branded<
  ({
    leg?: Leg;
    terms?: Terms_bb95_.Terms;
    meta?: BookingMeta_c057_.BookingMeta;
    tspProduct?: TspProduct;
    cost?: Cost_250f_.Cost;
    customer?: Customer;
  } & Record<string, unknown>) & {
    leg: Defined;
    meta: Defined;
    terms: Defined;
    tspProduct: Defined;
    cost: Defined;
  },
  ContentWithCostBrand
>;
export type ContentWithCostC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            leg: typeof Leg;
            terms: typeof Terms_bb95_.Terms;
            meta: typeof BookingMeta_c057_.BookingMeta;
            tspProduct: typeof TspProduct;
            cost: typeof Cost_250f_.Cost;
            customer: typeof Customer;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        leg: typeof Defined;
        meta: typeof Defined;
        terms: typeof Defined;
        tspProduct: typeof Defined;
        cost: typeof Defined;
      }>,
    ]
  >,
  ContentWithCostBrand
>;
export const ContentWithCost: ContentWithCostC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        leg: Leg,
        terms: Terms_bb95_.Terms,
        meta: BookingMeta_c057_.BookingMeta,
        tspProduct: TspProduct,
        cost: Cost_250f_.Cost,
        customer: Customer,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      leg: Defined,
      meta: Defined,
      terms: Defined,
      tspProduct: Defined,
      cost: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      leg?: Leg;
      terms?: Terms_bb95_.Terms;
      meta?: BookingMeta_c057_.BookingMeta;
      tspProduct?: TspProduct;
      cost?: Cost_250f_.Cost;
      customer?: Customer;
    } & Record<string, unknown>) & {
      leg: Defined;
      meta: Defined;
      terms: Defined;
      tspProduct: Defined;
      cost: Defined;
    },
    ContentWithCostBrand
  > => true,
  'ContentWithCost',
);
export type ContentWithCostBrand = {
  readonly ContentWithCost: unique symbol;
};

// ContentWithConfigurator
// The purpose of this remains a mystery
export type ContentWithConfigurator = t.Branded<
  ({
    leg?: Leg;
    terms?: Terms_bb95_.Terms;
    meta?: BookingMeta_c057_.BookingMeta;
    tspProduct?: TspProduct;
    configurator?: Configurator_2e96_.Configurator;
    customer?: Customer;
  } & Record<string, unknown>) & {
    leg: Defined;
    meta: Defined;
    terms: Defined;
    tspProduct: Defined;
    configurator: Defined;
  },
  ContentWithConfiguratorBrand
>;
export type ContentWithConfiguratorC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            leg: typeof Leg;
            terms: typeof Terms_bb95_.Terms;
            meta: typeof BookingMeta_c057_.BookingMeta;
            tspProduct: typeof TspProduct;
            configurator: typeof Configurator_2e96_.Configurator;
            customer: typeof Customer;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        leg: typeof Defined;
        meta: typeof Defined;
        terms: typeof Defined;
        tspProduct: typeof Defined;
        configurator: typeof Defined;
      }>,
    ]
  >,
  ContentWithConfiguratorBrand
>;
export const ContentWithConfigurator: ContentWithConfiguratorC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        leg: Leg,
        terms: Terms_bb95_.Terms,
        meta: BookingMeta_c057_.BookingMeta,
        tspProduct: TspProduct,
        configurator: Configurator_2e96_.Configurator,
        customer: Customer,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      leg: Defined,
      meta: Defined,
      terms: Defined,
      tspProduct: Defined,
      configurator: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      leg?: Leg;
      terms?: Terms_bb95_.Terms;
      meta?: BookingMeta_c057_.BookingMeta;
      tspProduct?: TspProduct;
      configurator?: Configurator_2e96_.Configurator;
      customer?: Customer;
    } & Record<string, unknown>) & {
      leg: Defined;
      meta: Defined;
      terms: Defined;
      tspProduct: Defined;
      configurator: Defined;
    },
    ContentWithConfiguratorBrand
  > => true,
  'ContentWithConfigurator',
);
export type ContentWithConfiguratorBrand = {
  readonly ContentWithConfigurator: unique symbol;
};

// LegDelta
// A leg delta, containing any subset of the valid properties
export type LegDelta = t.Branded<
  {
    mode?: TravelMode_5e34_.TravelMode;
    startTime?: Units_c404_.Time;
    endTime?: Units_c404_.Time;
    departureDelay?: Units_c404_.Duration;
    from?: Place_de2d_.Place;
    to?: Place_de2d_.Place;
    legGeometry?: {
      points?: UnitsGeo_3e31_.Polyline;
    } & Record<string, unknown>;
  },
  LegDeltaBrand
>;
export type LegDeltaC = t.BrandC<
  t.PartialC<{
    mode: typeof TravelMode_5e34_.TravelMode;
    startTime: typeof Units_c404_.Time;
    endTime: typeof Units_c404_.Time;
    departureDelay: typeof Units_c404_.Duration;
    from: typeof Place_de2d_.Place;
    to: typeof Place_de2d_.Place;
    legGeometry: t.IntersectionC<
      [
        t.PartialC<{
          points: typeof UnitsGeo_3e31_.Polyline;
        }>,
        t.RecordC<t.StringC, t.UnknownC>,
      ]
    >;
  }>,
  LegDeltaBrand
>;
export const LegDelta: LegDeltaC = t.brand(
  t.partial({
    mode: TravelMode_5e34_.TravelMode,
    startTime: Units_c404_.Time,
    endTime: Units_c404_.Time,
    departureDelay: Units_c404_.Duration,
    from: Place_de2d_.Place,
    to: Place_de2d_.Place,
    legGeometry: t.intersection([
      t.partial({
        points: UnitsGeo_3e31_.Polyline,
      }),
      t.record(t.string, t.unknown),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_5e34_.TravelMode;
      startTime?: Units_c404_.Time;
      endTime?: Units_c404_.Time;
      departureDelay?: Units_c404_.Duration;
      from?: Place_de2d_.Place;
      to?: Place_de2d_.Place;
      legGeometry?: {
        points?: UnitsGeo_3e31_.Polyline;
      } & Record<string, unknown>;
    },
    LegDeltaBrand
  > => true,
  'LegDelta',
);
export type LegDeltaBrand = {
  readonly LegDelta: unique symbol;
};

// BookingOption
// The default export. More information at the top.
export type BookingOption = t.Branded<
  ContentWithCost | ContentWithConfigurator,
  BookingOptionBrand
>;
export type BookingOptionC = t.BrandC<
  t.UnionC<[typeof ContentWithCost, typeof ContentWithConfigurator]>,
  BookingOptionBrand
>;
export const BookingOption: BookingOptionC = t.brand(
  t.union([ContentWithCost, ContentWithConfigurator]),
  (x): x is t.Branded<ContentWithCost | ContentWithConfigurator, BookingOptionBrand> =>
    true,
  'BookingOption',
);
export type BookingOptionBrand = {
  readonly BookingOption: unique symbol;
};

export default BookingOption;

// Success
