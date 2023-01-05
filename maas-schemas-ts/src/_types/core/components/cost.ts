/*

undefined
MaaS common units that are used consistently within our own objects

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Units_ from './units';

export type NullBrand = {
  readonly Null: unique symbol;
};
export type NullC = t.BrandC<t.UnknownC, NullBrand>;
export const Null: NullC = t.brand(
  t.unknown,
  (n): n is t.Branded<unknown, NullBrand> => n === null,
  'Null',
);
export type Null = t.TypeOf<typeof Null>;

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

export const schemaId = 'https://schemas.maas.global/core/components/cost.json';

// Cost
// The default export. More information at the top.
export type Cost = t.Branded<
  {
    amount?: number | Null;
    originalAmount?: number | Null;
    discount?: number;
    taxes?: number;
    isFixedPrice?: boolean;
    currency?: Units_.Currency | Null;
    type?: string & 'promotional_credits';
  } & {
    amount: Defined;
    currency: Defined;
  },
  CostBrand
>;
export type CostC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        amount: t.UnionC<[t.NumberC, typeof Null]>;
        originalAmount: t.UnionC<[t.NumberC, typeof Null]>;
        discount: t.NumberC;
        taxes: t.NumberC;
        isFixedPrice: t.BooleanC;
        currency: t.UnionC<[typeof Units_.Currency, typeof Null]>;
        type: t.IntersectionC<[t.StringC, t.LiteralC<'promotional_credits'>]>;
      }>,
      t.TypeC<{
        amount: typeof Defined;
        currency: typeof Defined;
      }>,
    ]
  >,
  CostBrand
>;
export const Cost: CostC = t.brand(
  t.intersection([
    t.partial({
      amount: t.union([t.number, Null]),
      originalAmount: t.union([t.number, Null]),
      discount: t.number,
      taxes: t.number,
      isFixedPrice: t.boolean,
      currency: t.union([Units_.Currency, Null]),
      type: t.intersection([t.string, t.literal('promotional_credits')]),
    }),
    t.type({
      amount: Defined,
      currency: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      amount?: number | Null;
      originalAmount?: number | Null;
      discount?: number;
      taxes?: number;
      isFixedPrice?: boolean;
      currency?: Units_.Currency | Null;
      type?: string & 'promotional_credits';
    } & {
      amount: Defined;
      currency: Defined;
    },
    CostBrand
  > => true,
  'Cost',
);
export type CostBrand = {
  readonly Cost: unique symbol;
};

export default Cost;

// Success
