/*

undefined
Request schema for autocomplete

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Address_ from 'maas-schemas-ts/core/components/address';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/autocomplete/autocomplete-query/request.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      name?: Address_.PlaceName;
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
      count?: number;
      radius?: UnitsGeo_.Distance;
    } & {
      name: Defined;
    };
    headers?: ApiCommon_.Headers;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    payload: t.intersection([
      t.partial({
        name: Address_.PlaceName,
        lat: UnitsGeo_.RelaxedLatitude,
        lon: UnitsGeo_.RelaxedLongitude,
        count: t.number,
        radius: UnitsGeo_.Distance,
      }),
      t.type({
        name: Defined,
      }),
    ]),
    headers: ApiCommon_.Headers,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        name?: Address_.PlaceName;
        lat?: UnitsGeo_.RelaxedLatitude;
        lon?: UnitsGeo_.RelaxedLongitude;
        count?: number;
        radius?: UnitsGeo_.Distance;
      } & {
        name: Defined;
      };
      headers?: ApiCommon_.Headers;
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
