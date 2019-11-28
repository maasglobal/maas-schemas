/*

undefined
MaaS pricing schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Subscription_ from 'maas-schemas-ts/maas-backend/subscriptions/subscription';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';
import * as Units_ from 'maas-schemas-ts/core/components/units';

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

export const schemaId = 'http://maasglobal.com/maas-backend/subscriptions/pricing.json';

// LineItem
// An item that is priced with it summaries
export type LineItem = t.Branded<
  {
    id?: Subscription_.SubscriptionItemId;
    type?: string;
    description?: string;
    quantity?: number;
    unitPrice?: Cost_.Default;
  } & {
    id: Defined;
    type: Defined;
    description: Defined;
    quantity: Defined;
    unitPrice: Defined;
  },
  LineItemBrand
>;
export const LineItem = t.brand(
  t.intersection([
    t.partial({
      id: Subscription_.SubscriptionItemId,
      type: t.string,
      description: t.string,
      quantity: t.number,
      unitPrice: Cost_.Default,
    }),
    t.type({
      id: Defined,
      type: Defined,
      description: Defined,
      quantity: Defined,
      unitPrice: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Subscription_.SubscriptionItemId;
      type?: string;
      description?: string;
      quantity?: number;
      unitPrice?: Cost_.Default;
    } & {
      id: Defined;
      type: Defined;
      description: Defined;
      quantity: Defined;
      unitPrice: Defined;
    },
    LineItemBrand
  > => true,
  'LineItem',
);
export interface LineItemBrand {
  readonly LineItem: unique symbol;
}

// Discount
// A discount from coupon or such
export type Discount = t.Branded<
  {
    description?: string;
    discount?: Cost_.Default;
  } & {
    description: Defined;
    discount: Defined;
  },
  DiscountBrand
>;
export const Discount = t.brand(
  t.intersection([
    t.partial({
      description: t.string,
      discount: Cost_.Default,
    }),
    t.type({
      description: Defined,
      discount: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      description?: string;
      discount?: Cost_.Default;
    } & {
      description: Defined;
      discount: Defined;
    },
    DiscountBrand
  > => true,
  'Discount',
);
export interface DiscountBrand {
  readonly Discount: unique symbol;
}

// Terms
// Terms related to this subscription
export type Terms = t.Branded<
  {
    validity?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
    } & {
      startTime: Defined;
      endTime: Defined;
    };
  } & {
    validity: Defined;
  },
  TermsBrand
>;
export const Terms = t.brand(
  t.intersection([
    t.partial({
      validity: t.intersection([
        t.partial({
          startTime: Units_.Time,
          endTime: Units_.Time,
        }),
        t.type({
          startTime: Defined,
          endTime: Defined,
        }),
      ]),
    }),
    t.type({
      validity: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      validity?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
      } & {
        startTime: Defined;
        endTime: Defined;
      };
    } & {
      validity: Defined;
    },
    TermsBrand
  > => true,
  'Terms',
);
export interface TermsBrand {
  readonly Terms: unique symbol;
}

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    lineItems?: Array<LineItem>;
    discounts?: Array<Discount>;
    total?: Cost_.Default;
    terms?: Terms;
  } & {
    lineItems: Defined;
    total: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      lineItems: t.array(LineItem),
      discounts: t.array(Discount),
      total: Cost_.Default,
      terms: Terms,
    }),
    t.type({
      lineItems: Defined,
      total: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      lineItems?: Array<LineItem>;
      discounts?: Array<Discount>;
      total?: Cost_.Default;
      terms?: Terms;
    } & {
      lineItems: Defined;
      total: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
