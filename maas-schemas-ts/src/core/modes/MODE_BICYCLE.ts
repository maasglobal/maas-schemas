/*

undefined
undefined

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as BikeStation_ from 'maas-schemas-ts/core/components/bike-station';

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

export const schemaId = 'http://maasglobal.com/core/modes/MODE_BICYCLE.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    pickupStation?: BikeStation_.Default;
    returnStation?: BikeStation_.Default;
    pickupStationId?: string;
    returnStationId?: string;
    bike?: {
      id?: string;
      type?: string;
    } & {
      id: Defined;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    pickupStation: BikeStation_.Default,
    returnStation: BikeStation_.Default,
    pickupStationId: t.string,
    returnStationId: t.string,
    bike: t.intersection([
      t.partial({
        id: t.string,
        type: t.string,
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
      pickupStation?: BikeStation_.Default;
      returnStation?: BikeStation_.Default;
      pickupStationId?: string;
      returnStationId?: string;
      bike?: {
        id?: string;
        type?: string;
      } & {
        id: Defined;
      };
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
