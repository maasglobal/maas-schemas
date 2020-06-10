/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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

export const schemaId = 'http://maasglobal.com/core/modes/MODE_SCOOTER.json';

// MODE_SCOOTER
// The default export. More information at the top.
export type MODE_SCOOTER = t.Branded<
  {
    scooter?: {
      id?: string;
    } & {
      id: Defined;
    };
  },
  MODE_SCOOTERBrand
>;
export const MODE_SCOOTER = t.brand(
  t.partial({
    scooter: t.intersection([
      t.partial({
        id: t.string,
      }),
      t.type({
        id: Defined,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      scooter?: {
        id?: string;
      } & {
        id: Defined;
      };
    },
    MODE_SCOOTERBrand
  > => true,
  'MODE_SCOOTER',
);
export interface MODE_SCOOTERBrand {
  readonly MODE_SCOOTER: unique symbol;
}

export default MODE_SCOOTER;

// Success
