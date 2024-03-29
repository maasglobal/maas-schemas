/*

undefined
Response schema for bookings-agency-products

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Common_ffba_ from '../../../core/components/common';
import * as Fare_a3ab_ from '../../../core/components/fare';
import * as Units_c404_ from '../../../core/components/units';

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
  'https://schemas.maas.global/maas-backend/bookings/bookings-agency-products/response.json';

// Product
// The purpose of this remains a mystery
export type Product = t.Branded<
  ({
    id?: string;
    agencyId?: string;
    tspProductId?: string;
    name?: string;
    meta?: Record<string, unknown>;
    icon?: Units_c404_.Url;
    fares?: Array<Fare_a3ab_.Fare>;
    description?: string;
  } & Record<string, unknown>) & {
    id: Defined;
    agencyId: Defined;
    tspProductId: Defined;
    name: Defined;
    description: Defined;
    icon: Defined;
    fares: Defined;
  },
  ProductBrand
>;
export type ProductC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            id: t.StringC;
            agencyId: t.StringC;
            tspProductId: t.StringC;
            name: t.StringC;
            meta: t.RecordC<t.StringC, t.UnknownC>;
            icon: typeof Units_c404_.Url;
            fares: t.ArrayC<typeof Fare_a3ab_.Fare>;
            description: t.StringC;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        id: typeof Defined;
        agencyId: typeof Defined;
        tspProductId: typeof Defined;
        name: typeof Defined;
        description: typeof Defined;
        icon: typeof Defined;
        fares: typeof Defined;
      }>,
    ]
  >,
  ProductBrand
>;
export const Product: ProductC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        id: t.string,
        agencyId: t.string,
        tspProductId: t.string,
        name: t.string,
        meta: t.record(t.string, t.unknown),
        icon: Units_c404_.Url,
        fares: t.array(Fare_a3ab_.Fare),
        description: t.string,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      id: Defined,
      agencyId: Defined,
      tspProductId: Defined,
      name: Defined,
      description: Defined,
      icon: Defined,
      fares: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      id?: string;
      agencyId?: string;
      tspProductId?: string;
      name?: string;
      meta?: Record<string, unknown>;
      icon?: Units_c404_.Url;
      fares?: Array<Fare_a3ab_.Fare>;
      description?: string;
    } & Record<string, unknown>) & {
      id: Defined;
      agencyId: Defined;
      tspProductId: Defined;
      name: Defined;
      description: Defined;
      icon: Defined;
      fares: Defined;
    },
    ProductBrand
  > => true,
  'Product',
);
export type ProductBrand = {
  readonly Product: unique symbol;
};

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    agencyId?: Common_ffba_.AgencyId;
    products?: Array<Product>;
  } & {
    agencyId: Defined;
    products: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        agencyId: typeof Common_ffba_.AgencyId;
        products: t.ArrayC<typeof Product>;
      }>,
      t.TypeC<{
        agencyId: typeof Defined;
        products: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      agencyId: Common_ffba_.AgencyId,
      products: t.array(Product),
    }),
    t.type({
      agencyId: Defined,
      products: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: Common_ffba_.AgencyId;
      products?: Array<Product>;
    } & {
      agencyId: Defined;
      products: Defined;
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
