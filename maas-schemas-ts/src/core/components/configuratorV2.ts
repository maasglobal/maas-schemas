/*

undefined
Configurator schema v2 to customize a booking option

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './units';
import * as CustomerSelectionV2_ from './customerSelectionV2';
import * as ConfiguratorCommon_ from './configuratorCommon';
import * as Cost_ from './cost';
import * as Fare_ from './fare';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

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

export const schemaId = 'http://maasglobal.com/core/components/configuratorV2.json';

// ConfiguratorV2
// The default export. More information at the top.
export type ConfiguratorV2 = t.Branded<
  {
    version?: string;
    estimatable?: boolean;
    purchasable?: boolean;
    validUntil?: Units_.Time | 0;
    configuratorSelection?: CustomerSelectionV2_.CustomerSelectionV2;
    configurations?: Record<string, ConfiguratorCommon_.Config>;
    cost?: Cost_.Cost;
    fares?: Array<Fare_.Fare>;
  } & {
    version: Defined;
    estimatable: Defined;
    purchasable: Defined;
    validUntil: Defined;
    configuratorSelection: Defined;
    configurations: Defined;
  },
  ConfiguratorV2Brand
>;
export type ConfiguratorV2C = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        version: t.StringC;
        estimatable: t.BooleanC;
        purchasable: t.BooleanC;
        validUntil: t.UnionC<[typeof Units_.Time, t.LiteralC<0>]>;
        configuratorSelection: typeof CustomerSelectionV2_.CustomerSelectionV2;
        configurations: t.RecordC<t.StringC, typeof ConfiguratorCommon_.Config>;
        cost: typeof Cost_.Cost;
        fares: t.ArrayC<typeof Fare_.Fare>;
      }>,
      t.TypeC<{
        version: typeof Defined;
        estimatable: typeof Defined;
        purchasable: typeof Defined;
        validUntil: typeof Defined;
        configuratorSelection: typeof Defined;
        configurations: typeof Defined;
      }>,
    ]
  >,
  ConfiguratorV2Brand
>;
export const ConfiguratorV2: ConfiguratorV2C = t.brand(
  t.intersection([
    t.partial({
      version: t.string,
      estimatable: t.boolean,
      purchasable: t.boolean,
      validUntil: t.union([Units_.Time, t.literal(0)]),
      configuratorSelection: CustomerSelectionV2_.CustomerSelectionV2,
      configurations: t.record(t.string, ConfiguratorCommon_.Config),
      cost: Cost_.Cost,
      fares: t.array(Fare_.Fare),
    }),
    t.type({
      version: Defined,
      estimatable: Defined,
      purchasable: Defined,
      validUntil: Defined,
      configuratorSelection: Defined,
      configurations: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      version?: string;
      estimatable?: boolean;
      purchasable?: boolean;
      validUntil?: Units_.Time | 0;
      configuratorSelection?: CustomerSelectionV2_.CustomerSelectionV2;
      configurations?: Record<string, ConfiguratorCommon_.Config>;
      cost?: Cost_.Cost;
      fares?: Array<Fare_.Fare>;
    } & {
      version: Defined;
      estimatable: Defined;
      purchasable: Defined;
      validUntil: Defined;
      configuratorSelection: Defined;
      configurations: Defined;
    },
    ConfiguratorV2Brand
  > => true,
  'ConfiguratorV2',
);
export interface ConfiguratorV2Brand {
  readonly ConfiguratorV2: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ConfiguratorV2)).decodeSync(examplesConfiguratorV2) // => examplesConfiguratorV2 */
export const examplesConfiguratorV2: NonEmptyArray<ConfiguratorV2> = ([
  {
    version: '2',
    estimatable: true,
    purchasable: false,
    validUntil: 1621967334551,
    configuratorSelection: { ticketClass: ['second-class'] },
    configurations: {
      ticketClass: {
        type: 'oneOf',
        name: 'Ticket class',
        description: 'Are you posh or not?',
        choices: [
          {
            id: 'first-class',
            name: '1st Class',
            description: 'Yes, posh',
            fares: [{ amount: 100, currency: 'EUR' }],
            default: false,
          },
          {
            id: 'second-class',
            name: '2nd Class',
            description: 'Not posh',
            fares: [{ amount: 30, currency: 'EUR' }],
            default: true,
          },
        ],
      },
    },
  },
] as unknown) as NonEmptyArray<ConfiguratorV2>;

export default ConfiguratorV2;

// Success
