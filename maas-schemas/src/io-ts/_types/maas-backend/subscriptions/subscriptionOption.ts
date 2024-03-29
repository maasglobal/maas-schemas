/*

undefined
MaaS subscription option schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Common_ffba_ from '../../core/components/common';
import * as PersonalDataAllowItem_b3f0_ from '../../core/components/personalDataAllowItem';
import * as PersonalDataValidation_1572_ from '../../core/components/personalDataValidation';
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
  'https://schemas.maas.global/maas-backend/subscriptions/subscriptionOption.json';

// SubscriptionAdditions
// The purpose of this remains a mystery
export type SubscriptionAdditions = t.Branded<
  ({
    discounts?: Array<unknown>;
    requiredAuthorizations?: Array<Common_ffba_.AgencyId>;
    regionDefault?: boolean;
    personalDataCreateAllow?: Array<PersonalDataAllowItem_b3f0_.PersonalDataAllowItem>;
    personalDataValidations?: Array<PersonalDataValidation_1572_.PersonalDataValidation>;
  } & Record<string, unknown>) & {
    plan: Defined;
    pointCost: Defined;
    addons: Defined;
    coupons: Defined;
    requiredAuthorizations: Defined;
    regionDefault: Defined;
  },
  SubscriptionAdditionsBrand
>;
export type SubscriptionAdditionsC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            discounts: t.UnknownArrayC;
            requiredAuthorizations: t.ArrayC<typeof Common_ffba_.AgencyId>;
            regionDefault: t.BooleanC;
            personalDataCreateAllow: t.ArrayC<
              typeof PersonalDataAllowItem_b3f0_.PersonalDataAllowItem
            >;
            personalDataValidations: t.ArrayC<
              typeof PersonalDataValidation_1572_.PersonalDataValidation
            >;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        plan: typeof Defined;
        pointCost: typeof Defined;
        addons: typeof Defined;
        coupons: typeof Defined;
        requiredAuthorizations: typeof Defined;
        regionDefault: typeof Defined;
      }>,
    ]
  >,
  SubscriptionAdditionsBrand
>;
export const SubscriptionAdditions: SubscriptionAdditionsC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        discounts: t.UnknownArray,
        requiredAuthorizations: t.array(Common_ffba_.AgencyId),
        regionDefault: t.boolean,
        personalDataCreateAllow: t.array(
          PersonalDataAllowItem_b3f0_.PersonalDataAllowItem,
        ),
        personalDataValidations: t.array(
          PersonalDataValidation_1572_.PersonalDataValidation,
        ),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      plan: Defined,
      pointCost: Defined,
      addons: Defined,
      coupons: Defined,
      requiredAuthorizations: Defined,
      regionDefault: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      discounts?: Array<unknown>;
      requiredAuthorizations?: Array<Common_ffba_.AgencyId>;
      regionDefault?: boolean;
      personalDataCreateAllow?: Array<PersonalDataAllowItem_b3f0_.PersonalDataAllowItem>;
      personalDataValidations?: Array<PersonalDataValidation_1572_.PersonalDataValidation>;
    } & Record<string, unknown>) & {
      plan: Defined;
      pointCost: Defined;
      addons: Defined;
      coupons: Defined;
      requiredAuthorizations: Defined;
      regionDefault: Defined;
    },
    SubscriptionAdditionsBrand
  > => true,
  'SubscriptionAdditions',
);
export type SubscriptionAdditionsBrand = {
  readonly SubscriptionAdditions: unique symbol;
};

// SubscriptionOption
// The default export. More information at the top.
export type SubscriptionOption = t.Branded<
  Subscription_b8eb_.SubscriptionBase & SubscriptionAdditions,
  SubscriptionOptionBrand
>;
export type SubscriptionOptionC = t.BrandC<
  t.IntersectionC<
    [typeof Subscription_b8eb_.SubscriptionBase, typeof SubscriptionAdditions]
  >,
  SubscriptionOptionBrand
>;
export const SubscriptionOption: SubscriptionOptionC = t.brand(
  t.intersection([Subscription_b8eb_.SubscriptionBase, SubscriptionAdditions]),
  (
    x,
  ): x is t.Branded<
    Subscription_b8eb_.SubscriptionBase & SubscriptionAdditions,
    SubscriptionOptionBrand
  > => true,
  'SubscriptionOption',
);
export type SubscriptionOptionBrand = {
  readonly SubscriptionOption: unique symbol;
};

export default SubscriptionOption;

// Success
