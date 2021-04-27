/*

undefined
Customer Selection for Configurator v1

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as CustomerSelectionCommon_ from './customerSelectionCommon';

export const schemaId = 'http://maasglobal.com/core/components/customerSelectionV1.json';

// CustomerSelectionV1
// The default export. More information at the top.
export type CustomerSelectionV1 = t.Branded<
  {
    seatDirection?: CustomerSelectionCommon_.ConfigChoiceSelection;
    seatPosition?: CustomerSelectionCommon_.ConfigChoiceSelection;
    seatType?: CustomerSelectionCommon_.ConfigChoiceSelection;
    seatFeatures?: CustomerSelectionCommon_.ConfigChoiceSelection;
    outboundSingle?: CustomerSelectionCommon_.ConfigChoiceSelection;
    inboundSingle?: CustomerSelectionCommon_.ConfigChoiceSelection;
    openReturn?: CustomerSelectionCommon_.ConfigChoiceSelection;
    freeReturn?: CustomerSelectionCommon_.ConfigChoiceSelection;
    ticketCollectionPoint?: CustomerSelectionCommon_.TextInputSelection;
  },
  CustomerSelectionV1Brand
>;
export type CustomerSelectionV1C = t.BrandC<
  t.PartialC<{
    seatDirection: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    seatPosition: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    seatType: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    seatFeatures: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    outboundSingle: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    inboundSingle: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    openReturn: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    freeReturn: typeof CustomerSelectionCommon_.ConfigChoiceSelection;
    ticketCollectionPoint: typeof CustomerSelectionCommon_.TextInputSelection;
  }>,
  CustomerSelectionV1Brand
>;
export const CustomerSelectionV1: CustomerSelectionV1C = t.brand(
  t.partial({
    seatDirection: CustomerSelectionCommon_.ConfigChoiceSelection,
    seatPosition: CustomerSelectionCommon_.ConfigChoiceSelection,
    seatType: CustomerSelectionCommon_.ConfigChoiceSelection,
    seatFeatures: CustomerSelectionCommon_.ConfigChoiceSelection,
    outboundSingle: CustomerSelectionCommon_.ConfigChoiceSelection,
    inboundSingle: CustomerSelectionCommon_.ConfigChoiceSelection,
    openReturn: CustomerSelectionCommon_.ConfigChoiceSelection,
    freeReturn: CustomerSelectionCommon_.ConfigChoiceSelection,
    ticketCollectionPoint: CustomerSelectionCommon_.TextInputSelection,
  }),
  (
    x,
  ): x is t.Branded<
    {
      seatDirection?: CustomerSelectionCommon_.ConfigChoiceSelection;
      seatPosition?: CustomerSelectionCommon_.ConfigChoiceSelection;
      seatType?: CustomerSelectionCommon_.ConfigChoiceSelection;
      seatFeatures?: CustomerSelectionCommon_.ConfigChoiceSelection;
      outboundSingle?: CustomerSelectionCommon_.ConfigChoiceSelection;
      inboundSingle?: CustomerSelectionCommon_.ConfigChoiceSelection;
      openReturn?: CustomerSelectionCommon_.ConfigChoiceSelection;
      freeReturn?: CustomerSelectionCommon_.ConfigChoiceSelection;
      ticketCollectionPoint?: CustomerSelectionCommon_.TextInputSelection;
    },
    CustomerSelectionV1Brand
  > => true,
  'CustomerSelectionV1',
);
export interface CustomerSelectionV1Brand {
  readonly CustomerSelectionV1: unique symbol;
}

export default CustomerSelectionV1;

// Success
