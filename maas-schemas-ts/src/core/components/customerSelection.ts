/*

undefined
Customer Selection for Configurator

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/customerSelection.json';

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

// CustomerSelection
// The default export. More information at the top.
export type CustomerSelection = t.Branded<
  {
    seatDirection?: ConfigChoiceSelection;
    stations?: ConfigChoiceSelection;
    seatPosition?: ConfigChoiceSelection;
    seatType?: ConfigChoiceSelection;
    seatFeatures?: ConfigChoiceSelection;
    outboundSingle?: ConfigChoiceSelection;
    inboundSingle?: ConfigChoiceSelection;
    openReturn?: ConfigChoiceSelection;
    freeReturn?: ConfigChoiceSelection;
    ticketCollectionPoint?: TextInputSelection;
  },
  CustomerSelectionBrand
>;
export type CustomerSelectionC = t.BrandC<
  t.PartialC<{
    seatDirection: typeof ConfigChoiceSelection;
    stations: typeof ConfigChoiceSelection;
    seatPosition: typeof ConfigChoiceSelection;
    seatType: typeof ConfigChoiceSelection;
    seatFeatures: typeof ConfigChoiceSelection;
    outboundSingle: typeof ConfigChoiceSelection;
    inboundSingle: typeof ConfigChoiceSelection;
    openReturn: typeof ConfigChoiceSelection;
    freeReturn: typeof ConfigChoiceSelection;
    ticketCollectionPoint: typeof TextInputSelection;
  }>,
  CustomerSelectionBrand
>;
export const CustomerSelection: CustomerSelectionC = t.brand(
  t.partial({
    seatDirection: ConfigChoiceSelection,
    stations: ConfigChoiceSelection,
    seatPosition: ConfigChoiceSelection,
    seatType: ConfigChoiceSelection,
    seatFeatures: ConfigChoiceSelection,
    outboundSingle: ConfigChoiceSelection,
    inboundSingle: ConfigChoiceSelection,
    openReturn: ConfigChoiceSelection,
    freeReturn: ConfigChoiceSelection,
    ticketCollectionPoint: TextInputSelection,
  }),
  (
    x,
  ): x is t.Branded<
    {
      seatDirection?: ConfigChoiceSelection;
      stations?: ConfigChoiceSelection;
      seatPosition?: ConfigChoiceSelection;
      seatType?: ConfigChoiceSelection;
      seatFeatures?: ConfigChoiceSelection;
      outboundSingle?: ConfigChoiceSelection;
      inboundSingle?: ConfigChoiceSelection;
      openReturn?: ConfigChoiceSelection;
      freeReturn?: ConfigChoiceSelection;
      ticketCollectionPoint?: TextInputSelection;
    },
    CustomerSelectionBrand
  > => true,
  'CustomerSelection',
);
export interface CustomerSelectionBrand {
  readonly CustomerSelection: unique symbol;
}

export default CustomerSelection;

// Success
