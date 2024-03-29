/*

undefined
MaaS subscription intent schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as State_2db3_ from '../../core/components/state';
import * as StateLog_4daf_ from '../../core/components/state-log';
import * as Units_c404_ from '../../core/components/units';
import * as Subscription_b8eb_ from './subscription';

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
  'https://schemas.maas.global/maas-backend/subscriptions/subscription-intent.json';

// PlanId
// The purpose of this remains a mystery
export type PlanId = t.Branded<string, PlanIdBrand>;
export type PlanIdC = t.BrandC<t.StringC, PlanIdBrand>;
export const PlanId: PlanIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, PlanIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'PlanId',
);
export type PlanIdBrand = {
  readonly PlanId: unique symbol;
};

// CouponId
// The purpose of this remains a mystery
export type CouponId = t.Branded<string, CouponIdBrand>;
export type CouponIdC = t.BrandC<t.StringC, CouponIdBrand>;
export const CouponId: CouponIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, CouponIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'CouponId',
);
export type CouponIdBrand = {
  readonly CouponId: unique symbol;
};

// SubscriptionIntentCreate
// The purpose of this remains a mystery
export type SubscriptionIntentCreate = t.Branded<
  ({
    planId?: PlanId;
    planAddons?: Array<Subscription_b8eb_.Addon>;
    planCoupons?: Array<CouponId>;
    state?: State_2db3_.SubscriptionIntentState;
  } & Record<string, unknown>) & {
    planId: Defined;
    planAddons: Defined;
  },
  SubscriptionIntentCreateBrand
>;
export type SubscriptionIntentCreateC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            planId: typeof PlanId;
            planAddons: t.ArrayC<typeof Subscription_b8eb_.Addon>;
            planCoupons: t.ArrayC<typeof CouponId>;
            state: typeof State_2db3_.SubscriptionIntentState;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        planId: typeof Defined;
        planAddons: typeof Defined;
      }>,
    ]
  >,
  SubscriptionIntentCreateBrand
>;
export const SubscriptionIntentCreate: SubscriptionIntentCreateC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        planId: PlanId,
        planAddons: t.array(Subscription_b8eb_.Addon),
        planCoupons: t.array(CouponId),
        state: State_2db3_.SubscriptionIntentState,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      planId: Defined,
      planAddons: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      planId?: PlanId;
      planAddons?: Array<Subscription_b8eb_.Addon>;
      planCoupons?: Array<CouponId>;
      state?: State_2db3_.SubscriptionIntentState;
    } & Record<string, unknown>) & {
      planId: Defined;
      planAddons: Defined;
    },
    SubscriptionIntentCreateBrand
  > => true,
  'SubscriptionIntentCreate',
);
export type SubscriptionIntentCreateBrand = {
  readonly SubscriptionIntentCreate: unique symbol;
};

// SubscriptionIntentBase
// The purpose of this remains a mystery
export type SubscriptionIntentBase = t.Branded<
  {
    id?: Units_c404_.Uuid;
    identityId?: Units_c404_.IdentityId;
    subscriptionId?: Units_c404_.IdentityId;
    nextPlanId?: PlanId;
    nextPlanAddons?: Array<Subscription_b8eb_.Addon>;
    nextPlanCoupons?: Array<CouponId>;
    prevPlanId?: PlanId;
    prevPlanAddons?: Array<Subscription_b8eb_.Addon>;
    state?: State_2db3_.SubscriptionIntentState;
    stateLog?: StateLog_4daf_.StateLog;
    created?: Units_c404_.Time;
    modified?: Units_c404_.Time;
  } & {
    identityId: Defined;
    subscriptionId: Defined;
    nextPlanId: Defined;
    nextPlanAddons: Defined;
  },
  SubscriptionIntentBaseBrand
>;
export type SubscriptionIntentBaseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof Units_c404_.Uuid;
        identityId: typeof Units_c404_.IdentityId;
        subscriptionId: typeof Units_c404_.IdentityId;
        nextPlanId: typeof PlanId;
        nextPlanAddons: t.ArrayC<typeof Subscription_b8eb_.Addon>;
        nextPlanCoupons: t.ArrayC<typeof CouponId>;
        prevPlanId: typeof PlanId;
        prevPlanAddons: t.ArrayC<typeof Subscription_b8eb_.Addon>;
        state: typeof State_2db3_.SubscriptionIntentState;
        stateLog: typeof StateLog_4daf_.StateLog;
        created: typeof Units_c404_.Time;
        modified: typeof Units_c404_.Time;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        subscriptionId: typeof Defined;
        nextPlanId: typeof Defined;
        nextPlanAddons: typeof Defined;
      }>,
    ]
  >,
  SubscriptionIntentBaseBrand
>;
export const SubscriptionIntentBase: SubscriptionIntentBaseC = t.brand(
  t.intersection([
    t.partial({
      id: Units_c404_.Uuid,
      identityId: Units_c404_.IdentityId,
      subscriptionId: Units_c404_.IdentityId,
      nextPlanId: PlanId,
      nextPlanAddons: t.array(Subscription_b8eb_.Addon),
      nextPlanCoupons: t.array(CouponId),
      prevPlanId: PlanId,
      prevPlanAddons: t.array(Subscription_b8eb_.Addon),
      state: State_2db3_.SubscriptionIntentState,
      stateLog: StateLog_4daf_.StateLog,
      created: Units_c404_.Time,
      modified: Units_c404_.Time,
    }),
    t.type({
      identityId: Defined,
      subscriptionId: Defined,
      nextPlanId: Defined,
      nextPlanAddons: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_c404_.Uuid;
      identityId?: Units_c404_.IdentityId;
      subscriptionId?: Units_c404_.IdentityId;
      nextPlanId?: PlanId;
      nextPlanAddons?: Array<Subscription_b8eb_.Addon>;
      nextPlanCoupons?: Array<CouponId>;
      prevPlanId?: PlanId;
      prevPlanAddons?: Array<Subscription_b8eb_.Addon>;
      state?: State_2db3_.SubscriptionIntentState;
      stateLog?: StateLog_4daf_.StateLog;
      created?: Units_c404_.Time;
      modified?: Units_c404_.Time;
    } & {
      identityId: Defined;
      subscriptionId: Defined;
      nextPlanId: Defined;
      nextPlanAddons: Defined;
    },
    SubscriptionIntentBaseBrand
  > => true,
  'SubscriptionIntentBase',
);
export type SubscriptionIntentBaseBrand = {
  readonly SubscriptionIntentBase: unique symbol;
};

// AddonId
// The purpose of this remains a mystery
export type AddonId = t.Branded<string, AddonIdBrand>;
export type AddonIdC = t.BrandC<t.StringC, AddonIdBrand>;
export const AddonId: AddonIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, AddonIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'AddonId',
);
export type AddonIdBrand = {
  readonly AddonId: unique symbol;
};

// SubscriptionIntent
// The default export. More information at the top.
export type SubscriptionIntent = t.Branded<unknown, SubscriptionIntentBrand>;
export type SubscriptionIntentC = t.BrandC<t.UnknownC, SubscriptionIntentBrand>;
export const SubscriptionIntent: SubscriptionIntentC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, SubscriptionIntentBrand> => true,
  'SubscriptionIntent',
);
export type SubscriptionIntentBrand = {
  readonly SubscriptionIntent: unique symbol;
};

export default SubscriptionIntent;

// Success
