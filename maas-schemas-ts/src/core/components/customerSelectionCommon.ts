/*

undefined
Customer Selection for Configurator common definitions

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/core/components/customerSelectionCommon.json';

// ConfigChoiceSelection
// customerSelection format for configurator config type - choice
export type ConfigChoiceSelection = t.Branded<Array<string>, ConfigChoiceSelectionBrand>;
export type ConfigChoiceSelectionC = t.BrandC<
  t.ArrayC<t.StringC>,
  ConfigChoiceSelectionBrand
>;
export const ConfigChoiceSelection: ConfigChoiceSelectionC = t.brand(
  t.array(t.string),
  (x): x is t.Branded<Array<string>, ConfigChoiceSelectionBrand> => true,
  'ConfigChoiceSelection',
);
export interface ConfigChoiceSelectionBrand {
  readonly ConfigChoiceSelection: unique symbol;
}

// TextInputSelection
// customerSelection format for configurator config type - text
export type TextInputSelection = t.Branded<string, TextInputSelectionBrand>;
export type TextInputSelectionC = t.BrandC<t.StringC, TextInputSelectionBrand>;
export const TextInputSelection: TextInputSelectionC = t.brand(
  t.string,
  (x): x is t.Branded<string, TextInputSelectionBrand> =>
    typeof x !== 'string' || x.length <= 8192,
  'TextInputSelection',
);
export interface TextInputSelectionBrand {
  readonly TextInputSelection: unique symbol;
}

// CustomerSelectionCommon
// The default export. More information at the top.
export type CustomerSelectionCommon = t.Branded<unknown, CustomerSelectionCommonBrand>;
export type CustomerSelectionCommonC = t.BrandC<t.UnknownC, CustomerSelectionCommonBrand>;
export const CustomerSelectionCommon: CustomerSelectionCommonC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, CustomerSelectionCommonBrand> => true,
  'CustomerSelectionCommon',
);
export interface CustomerSelectionCommonBrand {
  readonly CustomerSelectionCommon: unique symbol;
}

export default CustomerSelectionCommon;

// Success
