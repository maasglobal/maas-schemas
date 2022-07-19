/*

undefined
Product option for an itinerary, is either an existing booking pointer or a new booking instruction

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';
import * as Product_ from './product';
import * as Terms_ from './components/terms';
import * as BookingMeta_ from './booking-meta';
import * as Configurator_ from './components/configurator';
import * as BookingOption_ from './booking-option';
import * as Fare_ from './components/fare';
import * as Cost_ from './components/cost';

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

export const schemaId = 'https://schemas.maas.global/core/product-option.json';

// Ref
// numeric key for connecting productOption with leg.productOption
export type Ref = t.Branded<number, RefBrand>;
export type RefC = t.BrandC<t.NumberC, RefBrand>;
export const Ref: RefC = t.brand(
  t.number,
  (x): x is t.Branded<number, RefBrand> => Number.isInteger(x),
  'Ref',
);
export interface RefBrand {
  readonly Ref: unique symbol;
}
/** require('io-ts-validator').validator(Ref).decodeSync(minimumRef) // => minimumRef */
export const minimumRef: Ref = (0 as unknown) as Ref;

// WithConfigurator
// Works with configurator
export type WithConfigurator = t.Branded<
  ({
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    ref?: Ref;
    product?: Product_.Product;
    terms?: Terms_.Terms;
    meta?: BookingMeta_.BookingMeta;
    configurator?: Configurator_.Configurator;
    customer?: BookingOption_.Customer;
  } & Record<string, unknown>) & {
    ref: Defined;
    terms: Defined;
    meta: Defined;
    configurator: Defined;
  },
  WithConfiguratorBrand
>;
export type WithConfiguratorC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            identityId: typeof Units_.IdentityId;
            bookingId: typeof Units_.Uuid;
            ref: typeof Ref;
            product: typeof Product_.Product;
            terms: typeof Terms_.Terms;
            meta: typeof BookingMeta_.BookingMeta;
            configurator: typeof Configurator_.Configurator;
            customer: typeof BookingOption_.Customer;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        terms: typeof Defined;
        meta: typeof Defined;
        configurator: typeof Defined;
      }>,
    ]
  >,
  WithConfiguratorBrand
>;
export const WithConfigurator: WithConfiguratorC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        identityId: Units_.IdentityId,
        bookingId: Units_.Uuid,
        ref: Ref,
        product: Product_.Product,
        terms: Terms_.Terms,
        meta: BookingMeta_.BookingMeta,
        configurator: Configurator_.Configurator,
        customer: BookingOption_.Customer,
      }),
      t.record(t.string, t.unknown),
    ]),
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
    ({
      identityId?: Units_.IdentityId;
      bookingId?: Units_.Uuid;
      ref?: Ref;
      product?: Product_.Product;
      terms?: Terms_.Terms;
      meta?: BookingMeta_.BookingMeta;
      configurator?: Configurator_.Configurator;
      customer?: BookingOption_.Customer;
    } & Record<string, unknown>) & {
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
  ({
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    ref?: number;
    product?: Product_.Product;
    fares?: Array<Fare_.Fare>;
    terms?: Terms_.Terms;
    meta?: BookingMeta_.BookingMeta;
    customer?: BookingOption_.Customer;
  } & Record<string, unknown>) & {
    ref: Defined;
    terms: Defined;
    meta: Defined;
    fares: Defined;
  },
  WithFaresBrand
>;
export type WithFaresC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            identityId: typeof Units_.IdentityId;
            bookingId: typeof Units_.Uuid;
            ref: t.NumberC;
            product: typeof Product_.Product;
            fares: t.ArrayC<typeof Fare_.Fare>;
            terms: typeof Terms_.Terms;
            meta: typeof BookingMeta_.BookingMeta;
            customer: typeof BookingOption_.Customer;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        terms: typeof Defined;
        meta: typeof Defined;
        fares: typeof Defined;
      }>,
    ]
  >,
  WithFaresBrand
>;
export const WithFares: WithFaresC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        identityId: Units_.IdentityId,
        bookingId: Units_.Uuid,
        ref: t.number,
        product: Product_.Product,
        fares: t.array(Fare_.Fare),
        terms: Terms_.Terms,
        meta: BookingMeta_.BookingMeta,
        customer: BookingOption_.Customer,
      }),
      t.record(t.string, t.unknown),
    ]),
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
    ({
      identityId?: Units_.IdentityId;
      bookingId?: Units_.Uuid;
      ref?: number;
      product?: Product_.Product;
      fares?: Array<Fare_.Fare>;
      terms?: Terms_.Terms;
      meta?: BookingMeta_.BookingMeta;
      customer?: BookingOption_.Customer;
    } & Record<string, unknown>) & {
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
  ({
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    ref?: number;
    product?: Product_.Product;
    cost?: Cost_.Cost;
    terms?: Terms_.Terms;
    meta?: BookingMeta_.BookingMeta;
    customer?: BookingOption_.Customer;
  } & Record<string, unknown>) & {
    ref: Defined;
    terms: Defined;
    meta: Defined;
    cost: Defined;
  },
  WithCostBrand
>;
export type WithCostC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            identityId: typeof Units_.IdentityId;
            bookingId: typeof Units_.Uuid;
            ref: t.NumberC;
            product: typeof Product_.Product;
            cost: typeof Cost_.Cost;
            terms: typeof Terms_.Terms;
            meta: typeof BookingMeta_.BookingMeta;
            customer: typeof BookingOption_.Customer;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        terms: typeof Defined;
        meta: typeof Defined;
        cost: typeof Defined;
      }>,
    ]
  >,
  WithCostBrand
>;
export const WithCost: WithCostC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        identityId: Units_.IdentityId,
        bookingId: Units_.Uuid,
        ref: t.number,
        product: Product_.Product,
        cost: Cost_.Cost,
        terms: Terms_.Terms,
        meta: BookingMeta_.BookingMeta,
        customer: BookingOption_.Customer,
      }),
      t.record(t.string, t.unknown),
    ]),
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
    ({
      identityId?: Units_.IdentityId;
      bookingId?: Units_.Uuid;
      ref?: number;
      product?: Product_.Product;
      cost?: Cost_.Cost;
      terms?: Terms_.Terms;
      meta?: BookingMeta_.BookingMeta;
      customer?: BookingOption_.Customer;
    } & Record<string, unknown>) & {
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

// ProductOption
// The default export. More information at the top.
export type ProductOption = t.Branded<
  WithConfigurator | WithFares | WithCost,
  ProductOptionBrand
>;
export type ProductOptionC = t.BrandC<
  t.UnionC<[typeof WithConfigurator, typeof WithFares, typeof WithCost]>,
  ProductOptionBrand
>;
export const ProductOption: ProductOptionC = t.brand(
  t.union([WithConfigurator, WithFares, WithCost]),
  (x): x is t.Branded<WithConfigurator | WithFares | WithCost, ProductOptionBrand> =>
    true,
  'ProductOption',
);
export interface ProductOptionBrand {
  readonly ProductOption: unique symbol;
}

export default ProductOption;

// Success
