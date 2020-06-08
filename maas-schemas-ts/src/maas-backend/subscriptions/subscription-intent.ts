/*

undefined
MaaS subscription intent schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as State_ from 'maas-schemas-ts/core/components/state';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as StateLog_ from 'maas-schemas-ts/core/components/state-log';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscription-intent.json';

// PlanId
// The purpose of this remains a mystery
export type PlanId = t.Branded<string, PlanIdBrand>;
export const PlanId = t.brand(
  t.string,
  (x): x is t.Branded<string, PlanIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'PlanId',
);
export interface PlanIdBrand {
  readonly PlanId: unique symbol;
}

// AddonId
// The purpose of this remains a mystery
export type AddonId = t.Branded<string, AddonIdBrand>;
export const AddonId = t.brand(
  t.string,
  (x): x is t.Branded<string, AddonIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'AddonId',
);
export interface AddonIdBrand {
  readonly AddonId: unique symbol;
}

// CouponId
// The purpose of this remains a mystery
export type CouponId = t.Branded<string, CouponIdBrand>;
export const CouponId = t.brand(
  t.string,
  (x): x is t.Branded<string, CouponIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'CouponId',
);
export interface CouponIdBrand {
  readonly CouponId: unique symbol;
}

// SubscriptionIntentCreate
// The purpose of this remains a mystery
export type SubscriptionIntentCreate = t.Branded<
  {
    planId?: PlanId;
    planAddons?: Array<AddonId>;
    coupons?: Array<CouponId>;
    state?: State_.SubscriptionIntentState;
  } & {
    planId: Defined;
    planAddons: Defined;
  },
  SubscriptionIntentCreateBrand
>;
export const SubscriptionIntentCreate = t.brand(
  t.intersection([
    t.partial({
      planId: PlanId,
      planAddons: t.array(AddonId),
      coupons: t.array(CouponId),
      state: State_.SubscriptionIntentState,
    }),
    t.type({
      planId: Defined,
      planAddons: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      planId?: PlanId;
      planAddons?: Array<AddonId>;
      coupons?: Array<CouponId>;
      state?: State_.SubscriptionIntentState;
    } & {
      planId: Defined;
      planAddons: Defined;
    },
    SubscriptionIntentCreateBrand
  > => true,
  'SubscriptionIntentCreate',
);
export interface SubscriptionIntentCreateBrand {
  readonly SubscriptionIntentCreate: unique symbol;
}

// SubscriptionIntentBase
// The purpose of this remains a mystery
export type SubscriptionIntentBase = t.Branded<
  {
    id?: Units_.Uuid;
    identityId?: Units_.IdentityId;
    subscriptionId?: Units_.IdentityId;
    nextPlanId?: PlanId;
    nextPlanAddons?: Array<AddonId>;
    nextPlanCoupons?: Array<CouponId>;
    prevPlanId?: PlanId;
    prevPlanAddons?: Array<AddonId>;
    state?: State_.SubscriptionIntentState;
    stateLog?: StateLog_.StateLog;
    created?: Units_.Time;
    modified?: Units_.Time;
  } & {
    identityId: Defined;
    subscriptionId: Defined;
    nextPlanId: Defined;
    nextPlanAddons: Defined;
    nextPlanCoupons: Defined;
  },
  SubscriptionIntentBaseBrand
>;
export const SubscriptionIntentBase = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      identityId: Units_.IdentityId,
      subscriptionId: Units_.IdentityId,
      nextPlanId: PlanId,
      nextPlanAddons: t.array(AddonId),
      nextPlanCoupons: t.array(CouponId),
      prevPlanId: PlanId,
      prevPlanAddons: t.array(AddonId),
      state: State_.SubscriptionIntentState,
      stateLog: StateLog_.StateLog,
      created: Units_.Time,
      modified: Units_.Time,
    }),
    t.type({
      identityId: Defined,
      subscriptionId: Defined,
      nextPlanId: Defined,
      nextPlanAddons: Defined,
      nextPlanCoupons: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      identityId?: Units_.IdentityId;
      subscriptionId?: Units_.IdentityId;
      nextPlanId?: PlanId;
      nextPlanAddons?: Array<AddonId>;
      nextPlanCoupons?: Array<CouponId>;
      prevPlanId?: PlanId;
      prevPlanAddons?: Array<AddonId>;
      state?: State_.SubscriptionIntentState;
      stateLog?: StateLog_.StateLog;
      created?: Units_.Time;
      modified?: Units_.Time;
    } & {
      identityId: Defined;
      subscriptionId: Defined;
      nextPlanId: Defined;
      nextPlanAddons: Defined;
      nextPlanCoupons: Defined;
    },
    SubscriptionIntentBaseBrand
  > => true,
  'SubscriptionIntentBase',
);
export interface SubscriptionIntentBaseBrand {
  readonly SubscriptionIntentBase: unique symbol;
}

// SubscriptionIntent
// The default export. More information at the top.
export type SubscriptionIntent = t.Branded<unknown, SubscriptionIntentBrand>;
export const SubscriptionIntent = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, SubscriptionIntentBrand> => true,
  'SubscriptionIntent',
);
export interface SubscriptionIntentBrand {
  readonly SubscriptionIntent: unique symbol;
}

export default SubscriptionIntent;

// Success
