/*

undefined
Request schema for routes query

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Address_2d0a_ from '../../../core/components/address';
import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as SpaceDemand_101a_ from '../../../core/components/spaceDemand';
import * as Station_dfde_ from '../../../core/components/station';
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
  'https://schemas.maas.global/maas-backend/routes/routes-query/request.json';

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  ({
    from?: UnitsGeo_3e31_.ShortLocationString;
    fromName?: Address_2d0a_.PlaceName;
    fromAddress?: Address_2d0a_.ComponentAddress;
    fromStationId?: Station_dfde_.Id;
    to?: UnitsGeo_3e31_.ShortLocationString;
    toName?: Address_2d0a_.PlaceName;
    toAddress?: Address_2d0a_.ComponentAddress;
    toStationId?: Station_dfde_.Id;
    leaveAt?: Units_c404_.Time;
    arriveBy?: Units_c404_.Time;
    leaveAtReturn?: Units_c404_.Time;
    arriveByReturn?: Units_c404_.Time;
    modes?: string &
      (
        | 'PUBLIC_TRANSIT'
        | 'TAXI'
        | 'CAR'
        | 'WALK'
        | 'BICYCLE'
        | 'BICYCLE_RENT'
        | 'SCOOTER'
      );
    transitMode?: string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL');
    options?: Record<string, unknown> & Record<string, unknown>;
    bookingIdToExtend?: Units_c404_.Uuid;
    spaceDemand?: SpaceDemand_101a_.SpaceDemandString;
  } & Record<
    string,
    | UnitsGeo_3e31_.ShortLocationString
    | Address_2d0a_.PlaceName
    | Address_2d0a_.ComponentAddress
    | Station_dfde_.Id
    | UnitsGeo_3e31_.ShortLocationString
    | Address_2d0a_.PlaceName
    | Address_2d0a_.ComponentAddress
    | Station_dfde_.Id
    | Units_c404_.Time
    | Units_c404_.Time
    | Units_c404_.Time
    | Units_c404_.Time
    | (string &
        (
          | 'PUBLIC_TRANSIT'
          | 'TAXI'
          | 'CAR'
          | 'WALK'
          | 'BICYCLE'
          | 'BICYCLE_RENT'
          | 'SCOOTER'
        ))
    | (string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL'))
    | (Record<string, unknown> & Record<string, unknown>)
    | Units_c404_.Uuid
    | SpaceDemand_101a_.SpaceDemandString
    | (string | number | boolean)
  >) & {
    from: Defined;
    to: Defined;
  },
  PayloadBrand
>;
export type PayloadC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            from: typeof UnitsGeo_3e31_.ShortLocationString;
            fromName: typeof Address_2d0a_.PlaceName;
            fromAddress: typeof Address_2d0a_.ComponentAddress;
            fromStationId: typeof Station_dfde_.Id;
            to: typeof UnitsGeo_3e31_.ShortLocationString;
            toName: typeof Address_2d0a_.PlaceName;
            toAddress: typeof Address_2d0a_.ComponentAddress;
            toStationId: typeof Station_dfde_.Id;
            leaveAt: typeof Units_c404_.Time;
            arriveBy: typeof Units_c404_.Time;
            leaveAtReturn: typeof Units_c404_.Time;
            arriveByReturn: typeof Units_c404_.Time;
            modes: t.IntersectionC<
              [
                t.StringC,
                t.UnionC<
                  [
                    t.LiteralC<'PUBLIC_TRANSIT'>,
                    t.LiteralC<'TAXI'>,
                    t.LiteralC<'CAR'>,
                    t.LiteralC<'WALK'>,
                    t.LiteralC<'BICYCLE'>,
                    t.LiteralC<'BICYCLE_RENT'>,
                    t.LiteralC<'SCOOTER'>,
                  ]
                >,
              ]
            >;
            transitMode: t.IntersectionC<
              [
                t.StringC,
                t.UnionC<
                  [
                    t.LiteralC<'TRAIN'>,
                    t.LiteralC<'BUS'>,
                    t.LiteralC<'SUBWAY'>,
                    t.LiteralC<'TRAM'>,
                    t.LiteralC<'RAIL'>,
                  ]
                >,
              ]
            >;
            options: t.IntersectionC<
              [t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]
            >;
            bookingIdToExtend: typeof Units_c404_.Uuid;
            spaceDemand: typeof SpaceDemand_101a_.SpaceDemandString;
          }>,
          t.RecordC<
            t.StringC,
            t.UnionC<
              [
                typeof UnitsGeo_3e31_.ShortLocationString,
                typeof Address_2d0a_.PlaceName,
                typeof Address_2d0a_.ComponentAddress,
                typeof Station_dfde_.Id,
                typeof UnitsGeo_3e31_.ShortLocationString,
                typeof Address_2d0a_.PlaceName,
                typeof Address_2d0a_.ComponentAddress,
                typeof Station_dfde_.Id,
                typeof Units_c404_.Time,
                typeof Units_c404_.Time,
                typeof Units_c404_.Time,
                typeof Units_c404_.Time,
                t.IntersectionC<
                  [
                    t.StringC,
                    t.UnionC<
                      [
                        t.LiteralC<'PUBLIC_TRANSIT'>,
                        t.LiteralC<'TAXI'>,
                        t.LiteralC<'CAR'>,
                        t.LiteralC<'WALK'>,
                        t.LiteralC<'BICYCLE'>,
                        t.LiteralC<'BICYCLE_RENT'>,
                        t.LiteralC<'SCOOTER'>,
                      ]
                    >,
                  ]
                >,
                t.IntersectionC<
                  [
                    t.StringC,
                    t.UnionC<
                      [
                        t.LiteralC<'TRAIN'>,
                        t.LiteralC<'BUS'>,
                        t.LiteralC<'SUBWAY'>,
                        t.LiteralC<'TRAM'>,
                        t.LiteralC<'RAIL'>,
                      ]
                    >,
                  ]
                >,
                t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>,
                typeof Units_c404_.Uuid,
                typeof SpaceDemand_101a_.SpaceDemandString,
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
  PayloadBrand
>;
export const Payload: PayloadC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        from: UnitsGeo_3e31_.ShortLocationString,
        fromName: Address_2d0a_.PlaceName,
        fromAddress: Address_2d0a_.ComponentAddress,
        fromStationId: Station_dfde_.Id,
        to: UnitsGeo_3e31_.ShortLocationString,
        toName: Address_2d0a_.PlaceName,
        toAddress: Address_2d0a_.ComponentAddress,
        toStationId: Station_dfde_.Id,
        leaveAt: Units_c404_.Time,
        arriveBy: Units_c404_.Time,
        leaveAtReturn: Units_c404_.Time,
        arriveByReturn: Units_c404_.Time,
        modes: t.intersection([
          t.string,
          t.union([
            t.literal('PUBLIC_TRANSIT'),
            t.literal('TAXI'),
            t.literal('CAR'),
            t.literal('WALK'),
            t.literal('BICYCLE'),
            t.literal('BICYCLE_RENT'),
            t.literal('SCOOTER'),
          ]),
        ]),
        transitMode: t.intersection([
          t.string,
          t.union([
            t.literal('TRAIN'),
            t.literal('BUS'),
            t.literal('SUBWAY'),
            t.literal('TRAM'),
            t.literal('RAIL'),
          ]),
        ]),
        options: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
        bookingIdToExtend: Units_c404_.Uuid,
        spaceDemand: SpaceDemand_101a_.SpaceDemandString,
      }),
      t.record(
        t.string,
        t.union([
          UnitsGeo_3e31_.ShortLocationString,
          Address_2d0a_.PlaceName,
          Address_2d0a_.ComponentAddress,
          Station_dfde_.Id,
          UnitsGeo_3e31_.ShortLocationString,
          Address_2d0a_.PlaceName,
          Address_2d0a_.ComponentAddress,
          Station_dfde_.Id,
          Units_c404_.Time,
          Units_c404_.Time,
          Units_c404_.Time,
          Units_c404_.Time,
          t.intersection([
            t.string,
            t.union([
              t.literal('PUBLIC_TRANSIT'),
              t.literal('TAXI'),
              t.literal('CAR'),
              t.literal('WALK'),
              t.literal('BICYCLE'),
              t.literal('BICYCLE_RENT'),
              t.literal('SCOOTER'),
            ]),
          ]),
          t.intersection([
            t.string,
            t.union([
              t.literal('TRAIN'),
              t.literal('BUS'),
              t.literal('SUBWAY'),
              t.literal('TRAM'),
              t.literal('RAIL'),
            ]),
          ]),
          t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
          Units_c404_.Uuid,
          SpaceDemand_101a_.SpaceDemandString,
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
      from?: UnitsGeo_3e31_.ShortLocationString;
      fromName?: Address_2d0a_.PlaceName;
      fromAddress?: Address_2d0a_.ComponentAddress;
      fromStationId?: Station_dfde_.Id;
      to?: UnitsGeo_3e31_.ShortLocationString;
      toName?: Address_2d0a_.PlaceName;
      toAddress?: Address_2d0a_.ComponentAddress;
      toStationId?: Station_dfde_.Id;
      leaveAt?: Units_c404_.Time;
      arriveBy?: Units_c404_.Time;
      leaveAtReturn?: Units_c404_.Time;
      arriveByReturn?: Units_c404_.Time;
      modes?: string &
        (
          | 'PUBLIC_TRANSIT'
          | 'TAXI'
          | 'CAR'
          | 'WALK'
          | 'BICYCLE'
          | 'BICYCLE_RENT'
          | 'SCOOTER'
        );
      transitMode?: string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL');
      options?: Record<string, unknown> & Record<string, unknown>;
      bookingIdToExtend?: Units_c404_.Uuid;
      spaceDemand?: SpaceDemand_101a_.SpaceDemandString;
    } & Record<
      string,
      | UnitsGeo_3e31_.ShortLocationString
      | Address_2d0a_.PlaceName
      | Address_2d0a_.ComponentAddress
      | Station_dfde_.Id
      | UnitsGeo_3e31_.ShortLocationString
      | Address_2d0a_.PlaceName
      | Address_2d0a_.ComponentAddress
      | Station_dfde_.Id
      | Units_c404_.Time
      | Units_c404_.Time
      | Units_c404_.Time
      | Units_c404_.Time
      | (string &
          (
            | 'PUBLIC_TRANSIT'
            | 'TAXI'
            | 'CAR'
            | 'WALK'
            | 'BICYCLE'
            | 'BICYCLE_RENT'
            | 'SCOOTER'
          ))
      | (string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL'))
      | (Record<string, unknown> & Record<string, unknown>)
      | Units_c404_.Uuid
      | SpaceDemand_101a_.SpaceDemandString
      | (string | number | boolean)
    >) & {
      from: Defined;
      to: Defined;
    },
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
  ({
    identityId?: Units_c404_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_16a4_.Headers;
  } & Record<string, unknown>) & {
    identityId: Defined;
    payload: Defined;
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
            payload: typeof Payload;
            headers: typeof ApiCommon_16a4_.Headers;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        identityId: typeof Defined;
        payload: typeof Defined;
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
        payload: Payload,
        headers: ApiCommon_16a4_.Headers,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      identityId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      identityId?: Units_c404_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_16a4_.Headers;
    } & Record<string, unknown>) & {
      identityId: Defined;
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Request)).decodeSync(examplesRequest) // => examplesRequest */
export const examplesRequest: NonEmptyArray<Request> = [
  {
    identityId: 'e0dd4850-6449-11ea-b274-21ac9ed58ee0',
    payload: {
      from: '35.6917414,139.7829273',
      fromAddress:
        'state:Tokyo|zipCode:103-0004|country:Japan|streetNumber:10-3|city:Chuo City|district:Higashinihonbashi 3-chōme',
      fromName: 'Chuo City, Higashinihonbashi 3-chōme, 10-3',
      leaveAt: 1627485225645,
      modes: 'TAXI',
      to: '35.6910514,139.7823222',
      toAddress:
        'state:Tokyo|zipCode:103-0004|country:Japan|streetNumber:3-18|city:Chuo City|district:3-chōme Higashinihonbashi',
      toName: 'Chuo City, 3-chōme Higashinihonbashi, 3-18',
    },
  },
  {
    identityId: 'e0dd4850-6449-11ea-b274-21ac9ed58ee0',
    payload: {
      from: '35.6917414,139.7829273',
      fromAddress:
        'state:Tokyo|zipCode:103-0004|country:Japan|streetNumber:10-3|city:Chuo City|district:Higashinihonbashi 3-chōme',
      fromName: 'Chuo City, Higashinihonbashi 3-chōme, 10-3',
      leaveAt: 1627485225645,
      modes: 'TAXI',
      to: '35.6910514,139.7823222',
      toAddress:
        'state:Tokyo|zipCode:103-0004|country:Japan|streetNumber:3-18|city:Chuo City|district:3-chōme Higashinihonbashi',
      toName: 'Chuo City, 3-chōme Higashinihonbashi, 3-18',
      spaceDemand: 'adults:1|bags:2',
    },
  },
] as unknown as NonEmptyArray<Request>;

export default Request;

// Success
