/*

undefined
Request schema for routes providers

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Address_2d0a_ from '../../../core/components/address';
import * as Station_dfde_ from '../../../core/components/station';
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
  'https://schemas.maas.global/maas-backend/provider/routes/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    identityId?: Units_c404_.IdentityId;
    from?: UnitsGeo_3e31_.ShortLocation;
    fromName?: Address_2d0a_.PlaceName;
    fromAddress?: Address_2d0a_.ComponentAddress;
    fromStationId?: Station_dfde_.Id;
    to?: UnitsGeo_3e31_.ShortLocation;
    toName?: Address_2d0a_.PlaceName;
    toAddress?: Address_2d0a_.ComponentAddress;
    toStationId?: Station_dfde_.Id;
    leaveAt?: Units_c404_.Time;
    arriveBy?: Units_c404_.Time;
    modes?: TravelMode_5e34_.TravelMode;
  } & Record<
    string,
    | Units_c404_.IdentityId
    | UnitsGeo_3e31_.ShortLocation
    | Address_2d0a_.PlaceName
    | Address_2d0a_.ComponentAddress
    | Station_dfde_.Id
    | UnitsGeo_3e31_.ShortLocation
    | Address_2d0a_.PlaceName
    | Address_2d0a_.ComponentAddress
    | Station_dfde_.Id
    | Units_c404_.Time
    | Units_c404_.Time
    | TravelMode_5e34_.TravelMode
    | (string | number | boolean)
  >) & {
    from: Defined;
    to: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            identityId: typeof Units_c404_.IdentityId;
            from: typeof UnitsGeo_3e31_.ShortLocation;
            fromName: typeof Address_2d0a_.PlaceName;
            fromAddress: typeof Address_2d0a_.ComponentAddress;
            fromStationId: typeof Station_dfde_.Id;
            to: typeof UnitsGeo_3e31_.ShortLocation;
            toName: typeof Address_2d0a_.PlaceName;
            toAddress: typeof Address_2d0a_.ComponentAddress;
            toStationId: typeof Station_dfde_.Id;
            leaveAt: typeof Units_c404_.Time;
            arriveBy: typeof Units_c404_.Time;
            modes: typeof TravelMode_5e34_.TravelMode;
          }>,
          t.RecordC<
            t.StringC,
            t.UnionC<
              [
                typeof Units_c404_.IdentityId,
                typeof UnitsGeo_3e31_.ShortLocation,
                typeof Address_2d0a_.PlaceName,
                typeof Address_2d0a_.ComponentAddress,
                typeof Station_dfde_.Id,
                typeof UnitsGeo_3e31_.ShortLocation,
                typeof Address_2d0a_.PlaceName,
                typeof Address_2d0a_.ComponentAddress,
                typeof Station_dfde_.Id,
                typeof Units_c404_.Time,
                typeof Units_c404_.Time,
                typeof TravelMode_5e34_.TravelMode,
                t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>,
              ]
            >
          >,
        ]
      >,
      t.TypeC<{
        from: typeof Defined;
        to: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        identityId: Units_c404_.IdentityId,
        from: UnitsGeo_3e31_.ShortLocation,
        fromName: Address_2d0a_.PlaceName,
        fromAddress: Address_2d0a_.ComponentAddress,
        fromStationId: Station_dfde_.Id,
        to: UnitsGeo_3e31_.ShortLocation,
        toName: Address_2d0a_.PlaceName,
        toAddress: Address_2d0a_.ComponentAddress,
        toStationId: Station_dfde_.Id,
        leaveAt: Units_c404_.Time,
        arriveBy: Units_c404_.Time,
        modes: TravelMode_5e34_.TravelMode,
      }),
      t.record(
        t.string,
        t.union([
          Units_c404_.IdentityId,
          UnitsGeo_3e31_.ShortLocation,
          Address_2d0a_.PlaceName,
          Address_2d0a_.ComponentAddress,
          Station_dfde_.Id,
          UnitsGeo_3e31_.ShortLocation,
          Address_2d0a_.PlaceName,
          Address_2d0a_.ComponentAddress,
          Station_dfde_.Id,
          Units_c404_.Time,
          Units_c404_.Time,
          TravelMode_5e34_.TravelMode,
          t.union([t.string, t.number, t.boolean]),
        ]),
      ),
    ]),
    t.type({
      from: Defined,
      to: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      identityId?: Units_c404_.IdentityId;
      from?: UnitsGeo_3e31_.ShortLocation;
      fromName?: Address_2d0a_.PlaceName;
      fromAddress?: Address_2d0a_.ComponentAddress;
      fromStationId?: Station_dfde_.Id;
      to?: UnitsGeo_3e31_.ShortLocation;
      toName?: Address_2d0a_.PlaceName;
      toAddress?: Address_2d0a_.ComponentAddress;
      toStationId?: Station_dfde_.Id;
      leaveAt?: Units_c404_.Time;
      arriveBy?: Units_c404_.Time;
      modes?: TravelMode_5e34_.TravelMode;
    } & Record<
      string,
      | Units_c404_.IdentityId
      | UnitsGeo_3e31_.ShortLocation
      | Address_2d0a_.PlaceName
      | Address_2d0a_.ComponentAddress
      | Station_dfde_.Id
      | UnitsGeo_3e31_.ShortLocation
      | Address_2d0a_.PlaceName
      | Address_2d0a_.ComponentAddress
      | Station_dfde_.Id
      | Units_c404_.Time
      | Units_c404_.Time
      | TravelMode_5e34_.TravelMode
      | (string | number | boolean)
    >) & {
      from: Defined;
      to: Defined;
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
