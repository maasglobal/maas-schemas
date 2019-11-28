/*

undefined
MaaS station schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Address_ from 'maas-schemas-ts/core/components/address';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as TravelMode_ from 'maas-schemas-ts/core/components/travel-mode';
import * as Units_ from 'maas-schemas-ts/core/components/units';

export const schemaId = 'http://maasglobal.com/core/components/station.json';

// Id
// The purpose of this remains a mystery
export type Id = t.Branded<string, IdBrand>;
export const Id = t.brand(
  t.string,
  (x): x is t.Branded<string, IdBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'Id',
);
export interface IdBrand {
  readonly Id: unique symbol;
}

// Code
// The purpose of this remains a mystery
export type Code = t.Branded<string, CodeBrand>;
export const Code = t.brand(
  t.string,
  (x): x is t.Branded<string, CodeBrand> => true,
  'Code',
);
export interface CodeBrand {
  readonly Code: unique symbol;
}

// Name
// The purpose of this remains a mystery
export type Name = t.Branded<string, NameBrand>;
export const Name = t.brand(
  t.string,
  (x): x is t.Branded<string, NameBrand> => true,
  'Name',
);
export interface NameBrand {
  readonly Name: unique symbol;
}

// Location
// The purpose of this remains a mystery
export type Location = UnitsGeo_.ShortLocationString;
export const Location = UnitsGeo_.ShortLocationString;

// Address
// The purpose of this remains a mystery
export type Address = Address_.Address;
export const Address = Address_.Address;

// City
// The purpose of this remains a mystery
export type City = Address_.City;
export const City = Address_.City;

// Country
// The purpose of this remains a mystery
export type Country = Address_.Country;
export const Country = Address_.Country;

// AgencyId
// The purpose of this remains a mystery
export type AgencyId = Common_.AgencyId;
export const AgencyId = Common_.AgencyId;

// OpeningHours
// Opening hour of the station, object format is left for TSP to decide
export type OpeningHours = t.Branded<{}, OpeningHoursBrand>;
export const OpeningHours = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, OpeningHoursBrand> => true,
  'OpeningHours',
);
export interface OpeningHoursBrand {
  readonly OpeningHours: unique symbol;
}

// Facilities
// Station facilities, including services and features
export type Facilities = t.Branded<Array<string>, FacilitiesBrand>;
export const Facilities = t.brand(
  t.array(t.string),
  (x): x is t.Branded<Array<string>, FacilitiesBrand> => true,
  'Facilities',
);
export interface FacilitiesBrand {
  readonly Facilities: unique symbol;
}

// Services
// What agency and mode of transport will occupy this station
export type Services = t.Branded<Array<TravelMode_.Default>, ServicesBrand>;
export const Services = t.brand(
  t.array(TravelMode_.Default),
  (x): x is t.Branded<Array<TravelMode_.Default>, ServicesBrand> => true,
  'Services',
);
export interface ServicesBrand {
  readonly Services: unique symbol;
}

// Timetables
// Timetable for passing by / originating transports
export type Timetables = t.Branded<
  Array<{
    id?: string;
    mode?: TravelMode_.Default;
    name?: string;
    longName?: string;
    schedule?: Units_.Time;
    realtime?: Units_.Time;
    isRealtime?: boolean;
  }>,
  TimetablesBrand
>;
export const Timetables = t.brand(
  t.array(
    t.partial({
      id: t.string,
      mode: TravelMode_.Default,
      name: t.string,
      longName: t.string,
      schedule: Units_.Time,
      realtime: Units_.Time,
      isRealtime: t.boolean,
    }),
  ),
  (
    x,
  ): x is t.Branded<
    Array<{
      id?: string;
      mode?: TravelMode_.Default;
      name?: string;
      longName?: string;
      schedule?: Units_.Time;
      realtime?: Units_.Time;
      isRealtime?: boolean;
    }>,
    TimetablesBrand
  > => true,
  'Timetables',
);
export interface TimetablesBrand {
  readonly Timetables: unique symbol;
}

// Zone
// Geofencing zone defined by provider that the station is within
export type Zone = t.Branded<number | string, ZoneBrand>;
export const Zone = t.brand(
  t.union([t.number, t.string]),
  (x): x is t.Branded<number | string, ZoneBrand> => true,
  'Zone',
);
export interface ZoneBrand {
  readonly Zone: unique symbol;
}

// PlatformCode
// Platform number
export type PlatformCode = t.Branded<number | string, PlatformCodeBrand>;
export const PlatformCode = t.brand(
  t.union([t.number, t.string]),
  (x): x is t.Branded<number | string, PlatformCodeBrand> => true,
  'PlatformCode',
);
export interface PlatformCodeBrand {
  readonly PlatformCode: unique symbol;
}

// Default
// The default export. More information at the top.
export type Default = t.Branded<{}, DefaultBrand>;
export const Default = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
