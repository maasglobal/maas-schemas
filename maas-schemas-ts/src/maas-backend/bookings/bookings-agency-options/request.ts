/*

undefined
Request schema for bookings-agency-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as TravelMode_ from 'maas-schemas-ts/core/components/travel-mode';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Address_ from 'maas-schemas-ts/core/components/address';
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
  'http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json';

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    mode?: TravelMode_.Default;
    agencyId?: Common_.AgencyId;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.ShortLocationString;
    to?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromRadius?: UnitsGeo_.Distance;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toRadius?: UnitsGeo_.Distance;
    bookingIdToExtend?: Units_.Uuid;
  } & Record<
    string,
    | TravelMode_.Default
    | Common_.AgencyId
    | Units_.Time
    | Units_.Time
    | UnitsGeo_.ShortLocationString
    | UnitsGeo_.ShortLocationString
    | Address_.PlaceName
    | Address_.ComponentAddress
    | UnitsGeo_.Distance
    | Address_.PlaceName
    | Address_.ComponentAddress
    | UnitsGeo_.Distance
    | Units_.Uuid
    | (string | number | boolean)
  >,
  PayloadBrand
>;
export const Payload = t.brand(
  t.intersection([
    t.partial({
      mode: TravelMode_.Default,
      agencyId: Common_.AgencyId,
      startTime: Units_.Time,
      endTime: Units_.Time,
      from: UnitsGeo_.ShortLocationString,
      to: UnitsGeo_.ShortLocationString,
      fromName: Address_.PlaceName,
      fromAddress: Address_.ComponentAddress,
      fromRadius: UnitsGeo_.Distance,
      toName: Address_.PlaceName,
      toAddress: Address_.ComponentAddress,
      toRadius: UnitsGeo_.Distance,
      bookingIdToExtend: Units_.Uuid,
    }),
    t.record(
      t.string,
      t.union([
        TravelMode_.Default,
        Common_.AgencyId,
        Units_.Time,
        Units_.Time,
        UnitsGeo_.ShortLocationString,
        UnitsGeo_.ShortLocationString,
        Address_.PlaceName,
        Address_.ComponentAddress,
        UnitsGeo_.Distance,
        Address_.PlaceName,
        Address_.ComponentAddress,
        UnitsGeo_.Distance,
        Units_.Uuid,
        t.union([t.string, t.number, t.boolean]),
      ]),
    ),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_.Default;
      agencyId?: Common_.AgencyId;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.ShortLocationString;
      to?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromRadius?: UnitsGeo_.Distance;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toRadius?: UnitsGeo_.Distance;
      bookingIdToExtend?: Units_.Uuid;
    } & Record<
      string,
      | TravelMode_.Default
      | Common_.AgencyId
      | Units_.Time
      | Units_.Time
      | UnitsGeo_.ShortLocationString
      | UnitsGeo_.ShortLocationString
      | Address_.PlaceName
      | Address_.ComponentAddress
      | UnitsGeo_.Distance
      | Address_.PlaceName
      | Address_.ComponentAddress
      | UnitsGeo_.Distance
      | Units_.Uuid
      | (string | number | boolean)
    >,
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
    headers: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
      headers: Defined;
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
