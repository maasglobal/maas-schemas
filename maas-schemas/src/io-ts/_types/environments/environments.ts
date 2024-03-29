/*

undefined
The base environments object with several environment groups and related meta data

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Units_c404_ from '../core/components/units';
import * as Accounts_8a1b_ from './accounts';

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

export const schemaId = 'https://schemas.maas.global/environments/environments.json';

// EnvironmentId
// The purpose of this remains a mystery
export type EnvironmentId = t.Branded<
  string & Units_c404_.HostnameLabel,
  EnvironmentIdBrand
>;
export type EnvironmentIdC = t.BrandC<
  t.IntersectionC<[t.StringC, typeof Units_c404_.HostnameLabel]>,
  EnvironmentIdBrand
>;
export const EnvironmentId: EnvironmentIdC = t.brand(
  t.intersection([t.string, Units_c404_.HostnameLabel]),
  (x): x is t.Branded<string & Units_c404_.HostnameLabel, EnvironmentIdBrand> => true,
  'EnvironmentId',
);
export type EnvironmentIdBrand = {
  readonly EnvironmentId: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentId)).decodeSync(examplesEnvironmentId) // => examplesEnvironmentId */
export const examplesEnvironmentId: NonEmptyArray<EnvironmentId> = [
  'production',
  'testing',
  'environment13',
  'fantasy-topping',
] as unknown as NonEmptyArray<EnvironmentId>;

// EnvironmentLive
// Live environments are connected to actual payment and TSP services
export type EnvironmentLive = t.Branded<boolean, EnvironmentLiveBrand>;
export type EnvironmentLiveC = t.BrandC<t.BooleanC, EnvironmentLiveBrand>;
export const EnvironmentLive: EnvironmentLiveC = t.brand(
  t.boolean,
  (x): x is t.Branded<boolean, EnvironmentLiveBrand> => true,
  'EnvironmentLive',
);
export type EnvironmentLiveBrand = {
  readonly EnvironmentLive: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentLive)).decodeSync(examplesEnvironmentLive) // => examplesEnvironmentLive */
export const examplesEnvironmentLive: NonEmptyArray<EnvironmentLive> = [
  true,
  false,
] as unknown as NonEmptyArray<EnvironmentLive>;

// EnvironmentName
// The purpose of this remains a mystery
export type EnvironmentName = t.Branded<string, EnvironmentNameBrand>;
export type EnvironmentNameC = t.BrandC<t.StringC, EnvironmentNameBrand>;
export const EnvironmentName: EnvironmentNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentNameBrand> => true,
  'EnvironmentName',
);
export type EnvironmentNameBrand = {
  readonly EnvironmentName: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentName)).decodeSync(examplesEnvironmentName) // => examplesEnvironmentName */
export const examplesEnvironmentName: NonEmptyArray<EnvironmentName> = [
  'production',
  'testing',
  'environment 13',
  'Fantasy Topping',
] as unknown as NonEmptyArray<EnvironmentName>;

// EnvironmentDescription
// The purpose of this remains a mystery
export type EnvironmentDescription = t.Branded<string, EnvironmentDescriptionBrand>;
export type EnvironmentDescriptionC = t.BrandC<t.StringC, EnvironmentDescriptionBrand>;
export const EnvironmentDescription: EnvironmentDescriptionC = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentDescriptionBrand> => true,
  'EnvironmentDescription',
);
export type EnvironmentDescriptionBrand = {
  readonly EnvironmentDescription: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentDescription)).decodeSync(examplesEnvironmentDescription) // => examplesEnvironmentDescription */
export const examplesEnvironmentDescription: NonEmptyArray<EnvironmentDescription> = [
  'Production environment',
  'Testing environment',
  'Add support for pizza customization',
] as unknown as NonEmptyArray<EnvironmentDescription>;

// Environment
// The purpose of this remains a mystery
export type Environment = t.Branded<
  {
    id?: EnvironmentId;
    live?: EnvironmentLive;
    account?: Accounts_8a1b_.AccountAlias;
    name?: EnvironmentName;
    description?: EnvironmentDescription;
  } & {
    id: Defined;
    live: Defined;
    account: Defined;
  },
  EnvironmentBrand
>;
export type EnvironmentC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof EnvironmentId;
        live: typeof EnvironmentLive;
        account: typeof Accounts_8a1b_.AccountAlias;
        name: typeof EnvironmentName;
        description: typeof EnvironmentDescription;
      }>,
      t.TypeC<{
        id: typeof Defined;
        live: typeof Defined;
        account: typeof Defined;
      }>,
    ]
  >,
  EnvironmentBrand
>;
export const Environment: EnvironmentC = t.brand(
  t.intersection([
    t.partial({
      id: EnvironmentId,
      live: EnvironmentLive,
      account: Accounts_8a1b_.AccountAlias,
      name: EnvironmentName,
      description: EnvironmentDescription,
    }),
    t.type({
      id: Defined,
      live: Defined,
      account: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: EnvironmentId;
      live?: EnvironmentLive;
      account?: Accounts_8a1b_.AccountAlias;
      name?: EnvironmentName;
      description?: EnvironmentDescription;
    } & {
      id: Defined;
      live: Defined;
      account: Defined;
    },
    EnvironmentBrand
  > => true,
  'Environment',
);
export type EnvironmentBrand = {
  readonly Environment: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Environment)).decodeSync(examplesEnvironment) // => examplesEnvironment */
export const examplesEnvironment: NonEmptyArray<Environment> = [
  {
    id: 'production',
    live: true,
    account: 'production',
    description: 'Production environment',
  },
] as unknown as NonEmptyArray<Environment>;

// DevEnvironment
// The purpose of this remains a mystery
export type DevEnvironment = t.Branded<
  Environment &
    (({
      live?: false;
    } & Record<string, unknown>) & {
      live: Defined;
    }),
  DevEnvironmentBrand
>;
export type DevEnvironmentC = t.BrandC<
  t.IntersectionC<
    [
      typeof Environment,
      t.IntersectionC<
        [
          t.IntersectionC<
            [
              t.PartialC<{
                live: t.LiteralC<false>;
              }>,
              t.RecordC<t.StringC, t.UnknownC>,
            ]
          >,
          t.TypeC<{
            live: typeof Defined;
          }>,
        ]
      >,
    ]
  >,
  DevEnvironmentBrand
>;
export const DevEnvironment: DevEnvironmentC = t.brand(
  t.intersection([
    Environment,
    t.intersection([
      t.intersection([
        t.partial({
          live: t.literal(false),
        }),
        t.record(t.string, t.unknown),
      ]),
      t.type({
        live: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    Environment &
      (({
        live?: false;
      } & Record<string, unknown>) & {
        live: Defined;
      }),
    DevEnvironmentBrand
  > => true,
  'DevEnvironment',
);
export type DevEnvironmentBrand = {
  readonly DevEnvironment: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(DevEnvironment)).decodeSync(examplesDevEnvironment) // => examplesDevEnvironment */
export const examplesDevEnvironment: NonEmptyArray<DevEnvironment> = [
  { id: 'testing', live: false, account: 'testing', description: 'Testing environment' },
] as unknown as NonEmptyArray<DevEnvironment>;
// NEGATIVE Test Case: Live environment
/** require('io-ts-validator').validator(DevEnvironment).decodeEither({"id":"live","live":true,"account":"live","description":"Live environment"})._tag // => 'Left' */

// EnvironmentGroupName
// The purpose of this remains a mystery
export type EnvironmentGroupName = t.Branded<string, EnvironmentGroupNameBrand>;
export type EnvironmentGroupNameC = t.BrandC<t.StringC, EnvironmentGroupNameBrand>;
export const EnvironmentGroupName: EnvironmentGroupNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentGroupNameBrand> => true,
  'EnvironmentGroupName',
);
export type EnvironmentGroupNameBrand = {
  readonly EnvironmentGroupName: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentGroupName)).decodeSync(examplesEnvironmentGroupName) // => examplesEnvironmentGroupName */
export const examplesEnvironmentGroupName: NonEmptyArray<EnvironmentGroupName> = [
  'Core Environments',
  'Development Environments',
] as unknown as NonEmptyArray<EnvironmentGroupName>;

// EnvironmentGroupDescription
// The purpose of this remains a mystery
export type EnvironmentGroupDescription = t.Branded<
  string,
  EnvironmentGroupDescriptionBrand
>;
export type EnvironmentGroupDescriptionC = t.BrandC<
  t.StringC,
  EnvironmentGroupDescriptionBrand
>;
export const EnvironmentGroupDescription: EnvironmentGroupDescriptionC = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentGroupDescriptionBrand> => true,
  'EnvironmentGroupDescription',
);
export type EnvironmentGroupDescriptionBrand = {
  readonly EnvironmentGroupDescription: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentGroupDescription)).decodeSync(examplesEnvironmentGroupDescription) // => examplesEnvironmentGroupDescription */
export const examplesEnvironmentGroupDescription: NonEmptyArray<EnvironmentGroupDescription> =
  [
    'The main environments used by paying customers',
    'Production like environments used for quality assurance',
    'Development environments used for feature development',
  ] as unknown as NonEmptyArray<EnvironmentGroupDescription>;

// EnvironmentGroup
// The purpose of this remains a mystery
export type EnvironmentGroup = t.Branded<
  {
    name?: EnvironmentGroupName;
    envs?: Array<Environment>;
    description?: EnvironmentGroupDescription;
  } & {
    name: Defined;
    envs: Defined;
  },
  EnvironmentGroupBrand
>;
export type EnvironmentGroupC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        name: typeof EnvironmentGroupName;
        envs: t.ArrayC<typeof Environment>;
        description: typeof EnvironmentGroupDescription;
      }>,
      t.TypeC<{
        name: typeof Defined;
        envs: typeof Defined;
      }>,
    ]
  >,
  EnvironmentGroupBrand
>;
export const EnvironmentGroup: EnvironmentGroupC = t.brand(
  t.intersection([
    t.partial({
      name: EnvironmentGroupName,
      envs: t.array(Environment),
      description: EnvironmentGroupDescription,
    }),
    t.type({
      name: Defined,
      envs: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: EnvironmentGroupName;
      envs?: Array<Environment>;
      description?: EnvironmentGroupDescription;
    } & {
      name: Defined;
      envs: Defined;
    },
    EnvironmentGroupBrand
  > => true,
  'EnvironmentGroup',
);
export type EnvironmentGroupBrand = {
  readonly EnvironmentGroup: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentGroup)).decodeSync(examplesEnvironmentGroup) // => examplesEnvironmentGroup */
export const examplesEnvironmentGroup: NonEmptyArray<EnvironmentGroup> = [
  {
    name: 'Core Environments',
    envs: [
      {
        id: 'production',
        live: true,
        account: 'production',
        description: 'Production environment',
      },
      {
        id: 'testing',
        live: false,
        account: 'testing',
        description: 'Testing environment',
      },
    ],
  },
  {
    name: 'Development Environments',
    envs: [
      {
        id: 'fantasy-topping',
        live: false,
        account: 'testing',
        name: 'Fantasy Topping',
        description: 'Add support for pizza customization',
      },
    ],
  },
] as unknown as NonEmptyArray<EnvironmentGroup>;

// EnvironmentIndex
// The purpose of this remains a mystery
export type EnvironmentIndex = t.Branded<Array<EnvironmentGroup>, EnvironmentIndexBrand>;
export type EnvironmentIndexC = t.BrandC<
  t.ArrayC<typeof EnvironmentGroup>,
  EnvironmentIndexBrand
>;
export const EnvironmentIndex: EnvironmentIndexC = t.brand(
  t.array(EnvironmentGroup),
  (x): x is t.Branded<Array<EnvironmentGroup>, EnvironmentIndexBrand> => true,
  'EnvironmentIndex',
);
export type EnvironmentIndexBrand = {
  readonly EnvironmentIndex: unique symbol;
};

// Environments
// The default export. More information at the top.
export type Environments = t.Branded<
  {
    accounts?: Accounts_8a1b_.AccountIndex;
    index?: EnvironmentIndex;
  } & {
    index: Defined;
  },
  EnvironmentsBrand
>;
export type EnvironmentsC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        accounts: typeof Accounts_8a1b_.AccountIndex;
        index: typeof EnvironmentIndex;
      }>,
      t.TypeC<{
        index: typeof Defined;
      }>,
    ]
  >,
  EnvironmentsBrand
>;
export const Environments: EnvironmentsC = t.brand(
  t.intersection([
    t.partial({
      accounts: Accounts_8a1b_.AccountIndex,
      index: EnvironmentIndex,
    }),
    t.type({
      index: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      accounts?: Accounts_8a1b_.AccountIndex;
      index?: EnvironmentIndex;
    } & {
      index: Defined;
    },
    EnvironmentsBrand
  > => true,
  'Environments',
);
export type EnvironmentsBrand = {
  readonly Environments: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Environments)).decodeSync(examplesEnvironments) // => examplesEnvironments */
export const examplesEnvironments: NonEmptyArray<Environments> = [
  {
    accounts: {
      production: {
        id: '001234567890',
        name: 'Example Account',
        description: 'This account is but an example account',
      },
      testing: { id: '101234567890' },
    },
    index: [
      {
        name: 'Core Environments',
        envs: [
          {
            id: 'production',
            live: true,
            account: 'production',
            description: 'Production environment',
          },
          {
            id: 'testing',
            live: false,
            account: 'testing',
            description: 'Testing environment',
          },
        ],
      },
      {
        name: 'Development Environments',
        envs: [
          {
            id: 'fantasy-topping',
            live: false,
            account: 'testing',
            name: 'Fantasy Topping',
            description: 'Add support for pizza customization',
          },
        ],
      },
    ],
  },
] as unknown as NonEmptyArray<Environments>;

export default Environments;

// Success
