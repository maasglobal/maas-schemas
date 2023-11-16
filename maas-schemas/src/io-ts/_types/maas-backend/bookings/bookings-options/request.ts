/*

undefined
Request schema for bookings-options

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Address_2d0a_ from '../../../core/components/address';
import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as Common_ffba_ from '../../../core/components/common';
import * as SpaceDemand_101a_ from '../../../core/components/spaceDemand';
import * as TravelMode_5e34_ from '../../../core/components/travel-mode';
import * as Units_c404_ from '../../../core/components/units';
import * as UnitsGeo_3e31_ from '../../../core/components/units-geo';

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
export type DefinedC = {} & DefinedType;
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/bookings/bookings-options/request.json';

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    mode?: TravelMode_5e34_.TravelMode;
    startTime?: Units_c404_.Time;
    endTime?: Units_c404_.Time;
    from?: UnitsGeo_3e31_.ShortLocationString;
    to?: UnitsGeo_3e31_.ShortLocationString;
    fromName?: Address_2d0a_.PlaceName;
    fromAddress?: Address_2d0a_.ComponentAddress;
    fromRadius?: UnitsGeo_3e31_.Distance;
    toName?: Address_2d0a_.PlaceName;
    toAddress?: Address_2d0a_.ComponentAddress;
    toRadius?: UnitsGeo_3e31_.Distance;
    bookingIdToExtend?: Units_c404_.Uuid;
    spaceDemand?: SpaceDemand_101a_.SpaceDemandString;
    agencyId?: Common_ffba_.AgencyId;
    code?: string;
  } & Record<
    string,
    | TravelMode_5e34_.TravelMode
    | Units_c404_.Time
    | Units_c404_.Time
    | UnitsGeo_3e31_.ShortLocationString
    | UnitsGeo_3e31_.ShortLocationString
    | Address_2d0a_.PlaceName
    | Address_2d0a_.ComponentAddress
    | UnitsGeo_3e31_.Distance
    | Address_2d0a_.PlaceName
    | Address_2d0a_.ComponentAddress
    | UnitsGeo_3e31_.Distance
    | Units_c404_.Uuid
    | SpaceDemand_101a_.SpaceDemandString
    | Common_ffba_.AgencyId
    | string
    | (string | number | boolean)
  >,
  PayloadBrand
>;
export type PayloadC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        mode: typeof TravelMode_5e34_.TravelMode;
        startTime: typeof Units_c404_.Time;
        endTime: typeof Units_c404_.Time;
        from: typeof UnitsGeo_3e31_.ShortLocationString;
        to: typeof UnitsGeo_3e31_.ShortLocationString;
        fromName: typeof Address_2d0a_.PlaceName;
        fromAddress: typeof Address_2d0a_.ComponentAddress;
        fromRadius: typeof UnitsGeo_3e31_.Distance;
        toName: typeof Address_2d0a_.PlaceName;
        toAddress: typeof Address_2d0a_.ComponentAddress;
        toRadius: typeof UnitsGeo_3e31_.Distance;
        bookingIdToExtend: typeof Units_c404_.Uuid;
        spaceDemand: typeof SpaceDemand_101a_.SpaceDemandString;
        agencyId: typeof Common_ffba_.AgencyId;
        code: t.StringC;
      }>,
      t.RecordC<
        t.StringC,
        t.UnionC<
          [
            typeof TravelMode_5e34_.TravelMode,
            typeof Units_c404_.Time,
            typeof Units_c404_.Time,
            typeof UnitsGeo_3e31_.ShortLocationString,
            typeof UnitsGeo_3e31_.ShortLocationString,
            typeof Address_2d0a_.PlaceName,
            typeof Address_2d0a_.ComponentAddress,
            typeof UnitsGeo_3e31_.Distance,
            typeof Address_2d0a_.PlaceName,
            typeof Address_2d0a_.ComponentAddress,
            typeof UnitsGeo_3e31_.Distance,
            typeof Units_c404_.Uuid,
            typeof SpaceDemand_101a_.SpaceDemandString,
            typeof Common_ffba_.AgencyId,
            t.StringC,
            t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>,
          ]
        >
      >,
    ]
  >,
  PayloadBrand
>;
export const Payload: PayloadC = t.brand(
  t.intersection([
    t.partial({
      mode: TravelMode_5e34_.TravelMode,
      startTime: Units_c404_.Time,
      endTime: Units_c404_.Time,
      from: UnitsGeo_3e31_.ShortLocationString,
      to: UnitsGeo_3e31_.ShortLocationString,
      fromName: Address_2d0a_.PlaceName,
      fromAddress: Address_2d0a_.ComponentAddress,
      fromRadius: UnitsGeo_3e31_.Distance,
      toName: Address_2d0a_.PlaceName,
      toAddress: Address_2d0a_.ComponentAddress,
      toRadius: UnitsGeo_3e31_.Distance,
      bookingIdToExtend: Units_c404_.Uuid,
      spaceDemand: SpaceDemand_101a_.SpaceDemandString,
      agencyId: Common_ffba_.AgencyId,
      code: t.string,
    }),
    t.record(
      t.string,
      t.union([
        TravelMode_5e34_.TravelMode,
        Units_c404_.Time,
        Units_c404_.Time,
        UnitsGeo_3e31_.ShortLocationString,
        UnitsGeo_3e31_.ShortLocationString,
        Address_2d0a_.PlaceName,
        Address_2d0a_.ComponentAddress,
        UnitsGeo_3e31_.Distance,
        Address_2d0a_.PlaceName,
        Address_2d0a_.ComponentAddress,
        UnitsGeo_3e31_.Distance,
        Units_c404_.Uuid,
        SpaceDemand_101a_.SpaceDemandString,
        Common_ffba_.AgencyId,
        t.string,
        t.union([t.string, t.number, t.boolean]),
      ]),
    ),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_5e34_.TravelMode;
      startTime?: Units_c404_.Time;
      endTime?: Units_c404_.Time;
      from?: UnitsGeo_3e31_.ShortLocationString;
      to?: UnitsGeo_3e31_.ShortLocationString;
      fromName?: Address_2d0a_.PlaceName;
      fromAddress?: Address_2d0a_.ComponentAddress;
      fromRadius?: UnitsGeo_3e31_.Distance;
      toName?: Address_2d0a_.PlaceName;
      toAddress?: Address_2d0a_.ComponentAddress;
      toRadius?: UnitsGeo_3e31_.Distance;
      bookingIdToExtend?: Units_c404_.Uuid;
      spaceDemand?: SpaceDemand_101a_.SpaceDemandString;
      agencyId?: Common_ffba_.AgencyId;
      code?: string;
    } & Record<
      string,
      | TravelMode_5e34_.TravelMode
      | Units_c404_.Time
      | Units_c404_.Time
      | UnitsGeo_3e31_.ShortLocationString
      | UnitsGeo_3e31_.ShortLocationString
      | Address_2d0a_.PlaceName
      | Address_2d0a_.ComponentAddress
      | UnitsGeo_3e31_.Distance
      | Address_2d0a_.PlaceName
      | Address_2d0a_.ComponentAddress
      | UnitsGeo_3e31_.Distance
      | Units_c404_.Uuid
      | SpaceDemand_101a_.SpaceDemandString
      | Common_ffba_.AgencyId
      | string
      | (string | number | boolean)
    >,
    PayloadBrand
  > => true,
  'Payload',
);
export type PayloadBrand = {
  readonly Payload: unique symbol;
};

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_c404_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_16a4_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_c404_.IdentityId;
        payload: typeof Payload;
        headers: typeof ApiCommon_16a4_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        payload: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_c404_.IdentityId,
      payload: Payload,
      headers: ApiCommon_16a4_.Headers,
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
      identityId?: Units_c404_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_16a4_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
      headers: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success
