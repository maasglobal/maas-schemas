/*

undefined
Request schema for getting journey options from a TSP adapter.

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from '../../core/components/units-geo';
import * as Address_ from '../../core/components/address';
import * as Station_ from '../../core/components/station';
import * as Units_ from '../../core/components/units';

export const schemaId = 'https://schemas.maas.global/tsp/journey-planner/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: {
      from?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromStationId?: Station_.Id;
      to?: UnitsGeo_.ShortLocationString;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toStationId?: Station_.Id;
      leaveAt?: Units_.Time;
      arriveBy?: Units_.Time;
      leaveAtReturn?: Units_.Time;
      arriveByReturn?: Units_.Time;
      mode?: string;
    };
  } & Record<
    string,
    | {
        from?: UnitsGeo_.ShortLocationString;
        fromName?: Address_.PlaceName;
        fromAddress?: Address_.ComponentAddress;
        fromStationId?: Station_.Id;
        to?: UnitsGeo_.ShortLocationString;
        toName?: Address_.PlaceName;
        toAddress?: Address_.ComponentAddress;
        toStationId?: Station_.Id;
        leaveAt?: Units_.Time;
        arriveBy?: Units_.Time;
        leaveAtReturn?: Units_.Time;
        arriveByReturn?: Units_.Time;
        mode?: string;
      }
    | (string | number | boolean)
  >,
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        payload: t.PartialC<{
          from: typeof UnitsGeo_.ShortLocationString;
          fromName: typeof Address_.PlaceName;
          fromAddress: typeof Address_.ComponentAddress;
          fromStationId: typeof Station_.Id;
          to: typeof UnitsGeo_.ShortLocationString;
          toName: typeof Address_.PlaceName;
          toAddress: typeof Address_.ComponentAddress;
          toStationId: typeof Station_.Id;
          leaveAt: typeof Units_.Time;
          arriveBy: typeof Units_.Time;
          leaveAtReturn: typeof Units_.Time;
          arriveByReturn: typeof Units_.Time;
          mode: t.StringC;
        }>;
      }>,
      t.RecordC<
        t.StringC,
        t.UnionC<
          [
            t.PartialC<{
              from: typeof UnitsGeo_.ShortLocationString;
              fromName: typeof Address_.PlaceName;
              fromAddress: typeof Address_.ComponentAddress;
              fromStationId: typeof Station_.Id;
              to: typeof UnitsGeo_.ShortLocationString;
              toName: typeof Address_.PlaceName;
              toAddress: typeof Address_.ComponentAddress;
              toStationId: typeof Station_.Id;
              leaveAt: typeof Units_.Time;
              arriveBy: typeof Units_.Time;
              leaveAtReturn: typeof Units_.Time;
              arriveByReturn: typeof Units_.Time;
              mode: t.StringC;
            }>,
            t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>,
          ]
        >
      >,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      payload: t.partial({
        from: UnitsGeo_.ShortLocationString,
        fromName: Address_.PlaceName,
        fromAddress: Address_.ComponentAddress,
        fromStationId: Station_.Id,
        to: UnitsGeo_.ShortLocationString,
        toName: Address_.PlaceName,
        toAddress: Address_.ComponentAddress,
        toStationId: Station_.Id,
        leaveAt: Units_.Time,
        arriveBy: Units_.Time,
        leaveAtReturn: Units_.Time,
        arriveByReturn: Units_.Time,
        mode: t.string,
      }),
    }),
    t.record(
      t.string,
      t.union([
        t.partial({
          from: UnitsGeo_.ShortLocationString,
          fromName: Address_.PlaceName,
          fromAddress: Address_.ComponentAddress,
          fromStationId: Station_.Id,
          to: UnitsGeo_.ShortLocationString,
          toName: Address_.PlaceName,
          toAddress: Address_.ComponentAddress,
          toStationId: Station_.Id,
          leaveAt: Units_.Time,
          arriveBy: Units_.Time,
          leaveAtReturn: Units_.Time,
          arriveByReturn: Units_.Time,
          mode: t.string,
        }),
        t.union([t.string, t.number, t.boolean]),
      ]),
    ),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        from?: UnitsGeo_.ShortLocationString;
        fromName?: Address_.PlaceName;
        fromAddress?: Address_.ComponentAddress;
        fromStationId?: Station_.Id;
        to?: UnitsGeo_.ShortLocationString;
        toName?: Address_.PlaceName;
        toAddress?: Address_.ComponentAddress;
        toStationId?: Station_.Id;
        leaveAt?: Units_.Time;
        arriveBy?: Units_.Time;
        leaveAtReturn?: Units_.Time;
        arriveByReturn?: Units_.Time;
        mode?: string;
      };
    } & Record<
      string,
      | {
          from?: UnitsGeo_.ShortLocationString;
          fromName?: Address_.PlaceName;
          fromAddress?: Address_.ComponentAddress;
          fromStationId?: Station_.Id;
          to?: UnitsGeo_.ShortLocationString;
          toName?: Address_.PlaceName;
          toAddress?: Address_.ComponentAddress;
          toStationId?: Station_.Id;
          leaveAt?: Units_.Time;
          arriveBy?: Units_.Time;
          leaveAtReturn?: Units_.Time;
          arriveByReturn?: Units_.Time;
          mode?: string;
        }
      | (string | number | boolean)
    >,
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success