/*

undefined
Configurator schema to customize a booking option

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Cost_ from './cost';
import * as Fare_ from './fare';
import * as Terms_ from './terms';

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

export const schemaId = 'http://maasglobal.com/core/components/configurator.json';

// Choice
// A choice for one customization
export type Choice = t.Branded<
  {
    id?: string;
    name?: string;
    description?: string;
    default?: boolean;
    cost?: Cost_.Cost;
    fares?: Array<Fare_.Fare>;
    terms?: Terms_.Terms;
    meta?: Record<string, unknown>;
  } & {
    id: Defined;
    name: Defined;
    default: Defined;
  },
  ChoiceBrand
>;
export type ChoiceC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.StringC;
        name: t.StringC;
        description: t.StringC;
        default: t.BooleanC;
        cost: typeof Cost_.Cost;
        fares: t.ArrayC<typeof Fare_.Fare>;
        terms: typeof Terms_.Terms;
        meta: t.UnknownRecordC;
      }>,
      t.TypeC<{
        id: typeof Defined;
        name: typeof Defined;
        default: typeof Defined;
      }>,
    ]
  >,
  ChoiceBrand
>;
export const Choice: ChoiceC = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      description: t.string,
      default: t.boolean,
      cost: Cost_.Cost,
      fares: t.array(Fare_.Fare),
      terms: Terms_.Terms,
      meta: t.UnknownRecord,
    }),
    t.type({
      id: Defined,
      name: Defined,
      default: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      description?: string;
      default?: boolean;
      cost?: Cost_.Cost;
      fares?: Array<Fare_.Fare>;
      terms?: Terms_.Terms;
      meta?: Record<string, unknown>;
    } & {
      id: Defined;
      name: Defined;
      default: Defined;
    },
    ChoiceBrand
  > => true,
  'Choice',
);
export interface ChoiceBrand {
  readonly Choice: unique symbol;
}

// Config
// A customization to the booking option
export type Config = t.Branded<
  {
    type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
    name?: string;
    description?: string;
    choices?: Array<Choice>;
  } & {
    type: Defined;
    name: Defined;
    choices: Defined;
  },
  ConfigBrand
>;
export type ConfigC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.UnionC<
          [
            t.LiteralC<'oneOf'>,
            t.LiteralC<'someOf'>,
            t.LiteralC<'allOf'>,
            t.LiteralC<'oneOrNoneOf'>,
            t.LiteralC<'someOrNoneOf'>,
          ]
        >;
        name: t.StringC;
        description: t.StringC;
        choices: t.ArrayC<typeof Choice>;
      }>,
      t.TypeC<{
        type: typeof Defined;
        name: typeof Defined;
        choices: typeof Defined;
      }>,
    ]
  >,
  ConfigBrand
>;
export const Config: ConfigC = t.brand(
  t.intersection([
    t.partial({
      type: t.union([
        t.literal('oneOf'),
        t.literal('someOf'),
        t.literal('allOf'),
        t.literal('oneOrNoneOf'),
        t.literal('someOrNoneOf'),
      ]),
      name: t.string,
      description: t.string,
      choices: t.array(Choice),
    }),
    t.type({
      type: Defined,
      name: Defined,
      choices: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
      name?: string;
      description?: string;
      choices?: Array<Choice>;
    } & {
      type: Defined;
      name: Defined;
      choices: Defined;
    },
    ConfigBrand
  > => true,
  'Config',
);
export interface ConfigBrand {
  readonly Config: unique symbol;
}

// Text
// Generic text field to pass information from user
export type Text = t.Branded<
  {
    type?: 'text';
    name?: string;
    description?: string;
    input?: string;
  } & {
    type: Defined;
    name: Defined;
  },
  TextBrand
>;
export type TextC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.LiteralC<'text'>;
        name: t.StringC;
        description: t.StringC;
        input: t.StringC;
      }>,
      t.TypeC<{
        type: typeof Defined;
        name: typeof Defined;
      }>,
    ]
  >,
  TextBrand
>;
export const Text: TextC = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('text'),
      name: t.string,
      description: t.string,
      input: t.string,
    }),
    t.type({
      type: Defined,
      name: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'text';
      name?: string;
      description?: string;
      input?: string;
    } & {
      type: Defined;
      name: Defined;
    },
    TextBrand
  > => true,
  'Text',
);
export interface TextBrand {
  readonly Text: unique symbol;
}

// Configurator
// The default export. More information at the top.
export type Configurator = t.Branded<
  {
    seatDirection?: Config;
    seatPosition?: Config;
    seatType?: Config;
    seatFeatures?: Config;
    outboundSingle?: Config;
    inboundSingle?: Config;
    openReturn?: Config;
    freeReturn?: Config;
    ticketCollectionPoint?: Text;
    estimatable?: boolean;
    nonPorchasable?: boolean;
  },
  ConfiguratorBrand
>;
export type ConfiguratorC = t.BrandC<
  t.PartialC<{
    seatDirection: typeof Config;
    seatPosition: typeof Config;
    seatType: typeof Config;
    seatFeatures: typeof Config;
    outboundSingle: typeof Config;
    inboundSingle: typeof Config;
    openReturn: typeof Config;
    freeReturn: typeof Config;
    ticketCollectionPoint: typeof Text;
    estimatable: t.BooleanC;
    nonPorchasable: t.BooleanC;
  }>,
  ConfiguratorBrand
>;
export const Configurator: ConfiguratorC = t.brand(
  t.partial({
    seatDirection: Config,
    seatPosition: Config,
    seatType: Config,
    seatFeatures: Config,
    outboundSingle: Config,
    inboundSingle: Config,
    openReturn: Config,
    freeReturn: Config,
    ticketCollectionPoint: Text,
    estimatable: t.boolean,
    nonPorchasable: t.boolean,
  }),
  (
    x,
  ): x is t.Branded<
    {
      seatDirection?: Config;
      seatPosition?: Config;
      seatType?: Config;
      seatFeatures?: Config;
      outboundSingle?: Config;
      inboundSingle?: Config;
      openReturn?: Config;
      freeReturn?: Config;
      ticketCollectionPoint?: Text;
      estimatable?: boolean;
      nonPorchasable?: boolean;
    },
    ConfiguratorBrand
  > => true,
  'Configurator',
);
export interface ConfiguratorBrand {
  readonly Configurator: unique symbol;
}

export default Configurator;

// Success
