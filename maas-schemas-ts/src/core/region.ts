/*

undefined
MaaS region schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Address_ from 'maas-schemas-ts/core/components/address';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/core/region.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: string;
    name?: string;
    countryCode?: Address_.Country;
    zipCode?: Address_.ZipCode;
    availability?: {};
  } & {
    id: Defined;
    countryCode: Defined;
    zipCode: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      countryCode: Address_.Country,
      zipCode: Address_.ZipCode,
      availability: t.type({}),
    }),
    t.type({
      id: Defined,
      countryCode: Defined,
      zipCode: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      countryCode?: Address_.Country;
      zipCode?: Address_.ZipCode;
      availability?: {};
    } & {
      id: Defined;
      countryCode: Defined;
      zipCode: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
