/*

undefined
Customer Selection for Configurator

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as CustomerSelectionV2_ from './customerSelectionV2';
import * as CustomerSelectionV1_ from './customerSelectionV1';
import * as Common_ from './common';

export const schemaId =
  'https://schemas.maas.global/core/components/customerSelection.json';

// CustomerSelection
// The default export. More information at the top.
export type CustomerSelection = t.Branded<
  | CustomerSelectionV2_.CustomerSelectionV2
  | CustomerSelectionV1_.CustomerSelectionV1
  | Common_.EmptyObject,
  CustomerSelectionBrand
>;
export type CustomerSelectionC = t.BrandC<
  t.UnionC<
    [
      typeof CustomerSelectionV2_.CustomerSelectionV2,
      typeof CustomerSelectionV1_.CustomerSelectionV1,
      typeof Common_.EmptyObject,
    ]
  >,
  CustomerSelectionBrand
>;
export const CustomerSelection: CustomerSelectionC = t.brand(
  t.union([
    CustomerSelectionV2_.CustomerSelectionV2,
    CustomerSelectionV1_.CustomerSelectionV1,
    Common_.EmptyObject,
  ]),
  (
    x,
  ): x is t.Branded<
    | CustomerSelectionV2_.CustomerSelectionV2
    | CustomerSelectionV1_.CustomerSelectionV1
    | Common_.EmptyObject,
    CustomerSelectionBrand
  > => true,
  'CustomerSelection',
);
export interface CustomerSelectionBrand {
  readonly CustomerSelection: unique symbol;
}

export default CustomerSelection;

// Success
