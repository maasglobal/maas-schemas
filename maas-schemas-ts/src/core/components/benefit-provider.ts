/*

undefined
MaaS Benefit Provider

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export const schemaId = 'http://maasglobal.com/core/components/benefit-provider.json';

// BenefitsProviderId
// Benefit Provider ID (name)
export type BenefitsProviderId = t.Branded<string, BenefitsProviderIdBrand>;
export type BenefitsProviderIdC = t.BrandC<t.StringC, BenefitsProviderIdBrand>;
export const BenefitsProviderId: BenefitsProviderIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, BenefitsProviderIdBrand> => true,
  'BenefitsProviderId',
);
export interface BenefitsProviderIdBrand {
  readonly BenefitsProviderId: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(BenefitsProviderId)).decodeSync(examplesBenefitsProviderId) // => examplesBenefitsProviderId */
export const examplesBenefitsProviderId: NonEmptyArray<BenefitsProviderId> = ([
  'smartum',
  'epassi',
] as unknown) as NonEmptyArray<BenefitsProviderId>;

// BenefitProvider
// The default export. More information at the top.
export type BenefitProvider = t.Branded<unknown, BenefitProviderBrand>;
export type BenefitProviderC = t.BrandC<t.UnknownC, BenefitProviderBrand>;
export const BenefitProvider: BenefitProviderC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, BenefitProviderBrand> => true,
  'BenefitProvider',
);
export interface BenefitProviderBrand {
  readonly BenefitProvider: unique symbol;
}

export default BenefitProvider;

// Success
