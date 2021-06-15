/*

undefined
MaaS package bundle schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';
import * as Cost_ from './components/cost';
import * as Common_ from './components/common';

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

export const schemaId = 'http://maasglobal.com/core/package-bundle.json';

// Package
// The purpose of this remains a mystery
export type Package = t.Branded<
  {
    packageId?: string;
    active?: boolean;
    hidden?: boolean;
    appVersion?: {
      ios?: string;
      android?: string;
    };
    name?: string;
    description?: string;
    shortDescription?: string;
    paymentInstruction?: string;
    icon?: Units_.Url;
    price?: Cost_.Cost;
    balances?: Record<string, unknown>;
  } & {
    packageId: Defined;
    active: Defined;
    hidden: Defined;
    name: Defined;
    description: Defined;
    shortDescription: Defined;
    paymentInstruction: Defined;
    price: Defined;
    balances: Defined;
  },
  PackageBrand
>;
export type PackageC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        packageId: t.StringC;
        active: t.BooleanC;
        hidden: t.BooleanC;
        appVersion: t.PartialC<{
          ios: t.StringC;
          android: t.StringC;
        }>;
        name: t.StringC;
        description: t.StringC;
        shortDescription: t.StringC;
        paymentInstruction: t.StringC;
        icon: typeof Units_.Url;
        price: typeof Cost_.Cost;
        balances: t.UnknownRecordC;
      }>,
      t.TypeC<{
        packageId: typeof Defined;
        active: typeof Defined;
        hidden: typeof Defined;
        name: typeof Defined;
        description: typeof Defined;
        shortDescription: typeof Defined;
        paymentInstruction: typeof Defined;
        price: typeof Defined;
        balances: typeof Defined;
      }>,
    ]
  >,
  PackageBrand
>;
export const Package: PackageC = t.brand(
  t.intersection([
    t.partial({
      packageId: t.string,
      active: t.boolean,
      hidden: t.boolean,
      appVersion: t.partial({
        ios: t.string,
        android: t.string,
      }),
      name: t.string,
      description: t.string,
      shortDescription: t.string,
      paymentInstruction: t.string,
      icon: Units_.Url,
      price: Cost_.Cost,
      balances: t.UnknownRecord,
    }),
    t.type({
      packageId: Defined,
      active: Defined,
      hidden: Defined,
      name: Defined,
      description: Defined,
      shortDescription: Defined,
      paymentInstruction: Defined,
      price: Defined,
      balances: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      packageId?: string;
      active?: boolean;
      hidden?: boolean;
      appVersion?: {
        ios?: string;
        android?: string;
      };
      name?: string;
      description?: string;
      shortDescription?: string;
      paymentInstruction?: string;
      icon?: Units_.Url;
      price?: Cost_.Cost;
      balances?: Record<string, unknown>;
    } & {
      packageId: Defined;
      active: Defined;
      hidden: Defined;
      name: Defined;
      description: Defined;
      shortDescription: Defined;
      paymentInstruction: Defined;
      price: Defined;
      balances: Defined;
    },
    PackageBrand
  > => true,
  'Package',
);
export interface PackageBrand {
  readonly Package: unique symbol;
}

// PackagesGroup
// The purpose of this remains a mystery
export type PackagesGroup = t.Branded<
  {
    type?: 'packages';
    title?: string;
    subtitle?: string;
    icon?: Units_.Url;
    packages?: Array<Package>;
  } & {
    type: Defined;
    title: Defined;
    subtitle: Defined;
    packages: Defined;
  },
  PackagesGroupBrand
>;
export type PackagesGroupC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.LiteralC<'packages'>;
        title: t.StringC;
        subtitle: t.StringC;
        icon: typeof Units_.Url;
        packages: t.ArrayC<typeof Package>;
      }>,
      t.TypeC<{
        type: typeof Defined;
        title: typeof Defined;
        subtitle: typeof Defined;
        packages: typeof Defined;
      }>,
    ]
  >,
  PackagesGroupBrand
>;
export const PackagesGroup: PackagesGroupC = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('packages'),
      title: t.string,
      subtitle: t.string,
      icon: Units_.Url,
      packages: t.array(Package),
    }),
    t.type({
      type: Defined,
      title: Defined,
      subtitle: Defined,
      packages: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'packages';
      title?: string;
      subtitle?: string;
      icon?: Units_.Url;
      packages?: Array<Package>;
    } & {
      type: Defined;
      title: Defined;
      subtitle: Defined;
      packages: Defined;
    },
    PackagesGroupBrand
  > => true,
  'PackagesGroup',
);
export interface PackagesGroupBrand {
  readonly PackagesGroup: unique symbol;
}

// InfoGroup
// The purpose of this remains a mystery
export type InfoGroup = t.Branded<
  {
    type?: 'info';
    title?: string;
    subtitle?: string;
    icon?: Units_.Url;
    contentHtml?: string;
  } & {
    type: Defined;
    title: Defined;
    subtitle: Defined;
    contentHtml: Defined;
  },
  InfoGroupBrand
>;
export type InfoGroupC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.LiteralC<'info'>;
        title: t.StringC;
        subtitle: t.StringC;
        icon: typeof Units_.Url;
        contentHtml: t.StringC;
      }>,
      t.TypeC<{
        type: typeof Defined;
        title: typeof Defined;
        subtitle: typeof Defined;
        contentHtml: typeof Defined;
      }>,
    ]
  >,
  InfoGroupBrand
>;
export const InfoGroup: InfoGroupC = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('info'),
      title: t.string,
      subtitle: t.string,
      icon: Units_.Url,
      contentHtml: t.string,
    }),
    t.type({
      type: Defined,
      title: Defined,
      subtitle: Defined,
      contentHtml: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'info';
      title?: string;
      subtitle?: string;
      icon?: Units_.Url;
      contentHtml?: string;
    } & {
      type: Defined;
      title: Defined;
      subtitle: Defined;
      contentHtml: Defined;
    },
    InfoGroupBrand
  > => true,
  'InfoGroup',
);
export interface InfoGroupBrand {
  readonly InfoGroup: unique symbol;
}

// PackageBundle
// The default export. More information at the top.
export type PackageBundle = t.Branded<
  {
    id?: string;
    agencyId?: Common_.AgencyId;
    name?: string;
    description?: string;
    shortDescription?: string;
    image?: Units_.Url;
    leftColor?: string;
    rightColor?: string;
    active?: boolean;
    grouping?: Array<PackagesGroup | InfoGroup>;
  } & {
    id: Defined;
    agencyId: Defined;
    name: Defined;
    description: Defined;
    shortDescription: Defined;
    active: Defined;
    grouping: Defined;
  },
  PackageBundleBrand
>;
export type PackageBundleC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.StringC;
        agencyId: typeof Common_.AgencyId;
        name: t.StringC;
        description: t.StringC;
        shortDescription: t.StringC;
        image: typeof Units_.Url;
        leftColor: t.StringC;
        rightColor: t.StringC;
        active: t.BooleanC;
        grouping: t.ArrayC<t.UnionC<[typeof PackagesGroup, typeof InfoGroup]>>;
      }>,
      t.TypeC<{
        id: typeof Defined;
        agencyId: typeof Defined;
        name: typeof Defined;
        description: typeof Defined;
        shortDescription: typeof Defined;
        active: typeof Defined;
        grouping: typeof Defined;
      }>,
    ]
  >,
  PackageBundleBrand
>;
export const PackageBundle: PackageBundleC = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      agencyId: Common_.AgencyId,
      name: t.string,
      description: t.string,
      shortDescription: t.string,
      image: Units_.Url,
      leftColor: t.string,
      rightColor: t.string,
      active: t.boolean,
      grouping: t.array(t.union([PackagesGroup, InfoGroup])),
    }),
    t.type({
      id: Defined,
      agencyId: Defined,
      name: Defined,
      description: Defined,
      shortDescription: Defined,
      active: Defined,
      grouping: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      agencyId?: Common_.AgencyId;
      name?: string;
      description?: string;
      shortDescription?: string;
      image?: Units_.Url;
      leftColor?: string;
      rightColor?: string;
      active?: boolean;
      grouping?: Array<PackagesGroup | InfoGroup>;
    } & {
      id: Defined;
      agencyId: Defined;
      name: Defined;
      description: Defined;
      shortDescription: Defined;
      active: Defined;
      grouping: Defined;
    },
    PackageBundleBrand
  > => true,
  'PackageBundle',
);
export interface PackageBundleBrand {
  readonly PackageBundle: unique symbol;
}

export default PackageBundle;

// Success
