/*

undefined
Product option for an itinerary, is either an existing booking pointer or a new booking instruction

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Product_ from 'maas-schemas-ts/core/product';
import * as Terms_ from 'maas-schemas-ts/core/components/terms';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/core/product-option.json';

// Ref
// numeric key for connecting productOption with leg.productOption
export type Ref = t.Branded<number, RefBrand>;
export const Ref = t.brand(
  t.number,
  (x): x is t.Branded<number, RefBrand> => Number.isInteger(x),
  'Ref',
);
export interface RefBrand {
  readonly Ref: unique symbol;
}

// WithConfigurator
// Works with configurator
export type WithConfigurator = t.Branded<
  {
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    ref?: Ref;
    product?: Product_.Default;
    terms?: Terms_.Default;
    meta?: BookingMeta_.Default;
    configurator?: Configurator_.Default;
    customer?: BookingOption_.Customer;
  } & {
    ref: Defined;
    terms: Defined;
    meta: Defined;
    configurator: Defined;
  },
  WithConfiguratorBrand
>;
export const WithConfigurator = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      bookingId: Units_.Uuid,
      ref: Ref,
      product: Product_.Default,
      terms: Terms_.Default,
      meta: BookingMeta_.Default,
      configurator: Configurator_.Default,
      customer: BookingOption_.Customer,
    }),
    t.type({
      ref: Defined,
      terms: Defined,
      meta: Defined,
      configurator: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      bookingId?: Units_.Uuid;
      ref?: Ref;
      product?: Product_.Default;
      terms?: Terms_.Default;
      meta?: BookingMeta_.Default;
      configurator?: Configurator_.Default;
      customer?: BookingOption_.Customer;
    } & {
      ref: Defined;
      terms: Defined;
      meta: Defined;
      configurator: Defined;
    },
    WithConfiguratorBrand
  > => true,
  'WithConfigurator',
);
export interface WithConfiguratorBrand {
  readonly WithConfigurator: unique symbol;
}

// WithFares
// Works with fares
export type WithFares = t.Branded<
  {
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    ref?: number;
    product?: Product_.Default;
    fares?: Array<Fare_.Default>;
    terms?: Terms_.Default;
    meta?: BookingMeta_.Default;
    customer?: BookingOption_.Customer;
  } & {
    ref: Defined;
    terms: Defined;
    meta: Defined;
    fares: Defined;
  },
  WithFaresBrand
>;
export const WithFares = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      bookingId: Units_.Uuid,
      ref: t.number,
      product: Product_.Default,
      fares: t.array(Fare_.Default),
      terms: Terms_.Default,
      meta: BookingMeta_.Default,
      customer: BookingOption_.Customer,
    }),
    t.type({
      ref: Defined,
      terms: Defined,
      meta: Defined,
      fares: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      bookingId?: Units_.Uuid;
      ref?: number;
      product?: Product_.Default;
      fares?: Array<Fare_.Default>;
      terms?: Terms_.Default;
      meta?: BookingMeta_.Default;
      customer?: BookingOption_.Customer;
    } & {
      ref: Defined;
      terms: Defined;
      meta: Defined;
      fares: Defined;
    },
    WithFaresBrand
  > => true,
  'WithFares',
);
export interface WithFaresBrand {
  readonly WithFares: unique symbol;
}

// WithCost
// Works with cost
export type WithCost = t.Branded<
  {
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    ref?: number;
    product?: Product_.Default;
    cost?: Cost_.Default;
    terms?: Terms_.Default;
    meta?: BookingMeta_.Default;
    customer?: BookingOption_.Customer;
  } & {
    ref: Defined;
    terms: Defined;
    meta: Defined;
    cost: Defined;
  },
  WithCostBrand
>;
export const WithCost = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      bookingId: Units_.Uuid,
      ref: t.number,
      product: Product_.Default,
      cost: Cost_.Default,
      terms: Terms_.Default,
      meta: BookingMeta_.Default,
      customer: BookingOption_.Customer,
    }),
    t.type({
      ref: Defined,
      terms: Defined,
      meta: Defined,
      cost: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      bookingId?: Units_.Uuid;
      ref?: number;
      product?: Product_.Default;
      cost?: Cost_.Default;
      terms?: Terms_.Default;
      meta?: BookingMeta_.Default;
      customer?: BookingOption_.Customer;
    } & {
      ref: Defined;
      terms: Defined;
      meta: Defined;
      cost: Defined;
    },
    WithCostBrand
  > => true,
  'WithCost',
);
export interface WithCostBrand {
  readonly WithCost: unique symbol;
}

// Default
// The default export. More information at the top.
export type Default = t.Branded<WithConfigurator | WithFares | WithCost, DefaultBrand>;
export const Default = t.brand(
  t.union([WithConfigurator, WithFares, WithCost]),
  (x): x is t.Branded<WithConfigurator | WithFares | WithCost, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
