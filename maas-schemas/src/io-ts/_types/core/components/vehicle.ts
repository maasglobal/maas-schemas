/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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

export const schemaId = 'https://schemas.maas.global/core/components/vehicle.json';

// VehicleId
// An identifier used by a TSP to uniquely identify one of their vehicles. Used by customer care to report a broken scooter to the TSP or locate the physical car where a customer left their umbrella.
export type VehicleId = t.Branded<string, VehicleIdBrand>;
export type VehicleIdC = t.BrandC<t.StringC, VehicleIdBrand>;
export const VehicleId: VehicleIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, VehicleIdBrand> => true,
  'VehicleId',
);
export type VehicleIdBrand = {
  readonly VehicleId: unique symbol;
};

// VehicleIds
// The purpose of this remains a mystery
export type VehicleIds = t.Branded<Array<VehicleId>, VehicleIdsBrand>;
export type VehicleIdsC = t.BrandC<t.ArrayC<typeof VehicleId>, VehicleIdsBrand>;
export const VehicleIds: VehicleIdsC = t.brand(
  t.array(VehicleId),
  (x): x is t.Branded<Array<VehicleId>, VehicleIdsBrand> => true,
  'VehicleIds',
);
export type VehicleIdsBrand = {
  readonly VehicleIds: unique symbol;
};

// VehicleIdsByMode
// The purpose of this remains a mystery
export type VehicleIdsByMode = t.Branded<
  {
    MODE_BICYCLE?: VehicleIds;
    MODE_BUS?: VehicleIds;
    MODE_BUSISH?: VehicleIds;
    MODE_CABLE_CAR?: VehicleIds;
    MODE_CAR?: VehicleIds;
    MODE_FERRY?: VehicleIds;
    MODE_FUNICULAR?: VehicleIds;
    MODE_GONDOLA?: VehicleIds;
    MODE_RAIL?: VehicleIds;
    MODE_SCOOTER?: VehicleIds;
    MODE_SHARED_BICYCLE?: VehicleIds;
    MODE_SHARED_CAR?: VehicleIds;
    MODE_SHARED_E_BICYCLE?: VehicleIds;
    MODE_MOPED?: VehicleIds;
    MODE_SUBWAY?: VehicleIds;
    MODE_TAXI?: VehicleIds;
    MODE_TRAIN?: VehicleIds;
    MODE_TRAINISH?: VehicleIds;
    MODE_TRAM?: VehicleIds;
    MODE_TRANSIT?: VehicleIds;
    MODE_WALK?: VehicleIds;
  } & {
    MODE_BICYCLE: Defined;
    MODE_BUS: Defined;
    MODE_BUSISH: Defined;
    MODE_CABLE_CAR: Defined;
    MODE_CAR: Defined;
    MODE_FERRY: Defined;
    MODE_FUNICULAR: Defined;
    MODE_GONDOLA: Defined;
    MODE_RAIL: Defined;
    MODE_SCOOTER: Defined;
    MODE_SHARED_BICYCLE: Defined;
    MODE_SHARED_CAR: Defined;
    MODE_SHARED_E_BICYCLE: Defined;
    MODE_SUBWAY: Defined;
    MODE_TAXI: Defined;
    MODE_TRAIN: Defined;
    MODE_TRAINISH: Defined;
    MODE_TRAM: Defined;
    MODE_TRANSIT: Defined;
    MODE_WALK: Defined;
  },
  VehicleIdsByModeBrand
>;
export type VehicleIdsByModeC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        MODE_BICYCLE: typeof VehicleIds;
        MODE_BUS: typeof VehicleIds;
        MODE_BUSISH: typeof VehicleIds;
        MODE_CABLE_CAR: typeof VehicleIds;
        MODE_CAR: typeof VehicleIds;
        MODE_FERRY: typeof VehicleIds;
        MODE_FUNICULAR: typeof VehicleIds;
        MODE_GONDOLA: typeof VehicleIds;
        MODE_RAIL: typeof VehicleIds;
        MODE_SCOOTER: typeof VehicleIds;
        MODE_SHARED_BICYCLE: typeof VehicleIds;
        MODE_SHARED_CAR: typeof VehicleIds;
        MODE_SHARED_E_BICYCLE: typeof VehicleIds;
        MODE_MOPED: typeof VehicleIds;
        MODE_SUBWAY: typeof VehicleIds;
        MODE_TAXI: typeof VehicleIds;
        MODE_TRAIN: typeof VehicleIds;
        MODE_TRAINISH: typeof VehicleIds;
        MODE_TRAM: typeof VehicleIds;
        MODE_TRANSIT: typeof VehicleIds;
        MODE_WALK: typeof VehicleIds;
      }>,
      t.TypeC<{
        MODE_BICYCLE: typeof Defined;
        MODE_BUS: typeof Defined;
        MODE_BUSISH: typeof Defined;
        MODE_CABLE_CAR: typeof Defined;
        MODE_CAR: typeof Defined;
        MODE_FERRY: typeof Defined;
        MODE_FUNICULAR: typeof Defined;
        MODE_GONDOLA: typeof Defined;
        MODE_RAIL: typeof Defined;
        MODE_SCOOTER: typeof Defined;
        MODE_SHARED_BICYCLE: typeof Defined;
        MODE_SHARED_CAR: typeof Defined;
        MODE_SHARED_E_BICYCLE: typeof Defined;
        MODE_SUBWAY: typeof Defined;
        MODE_TAXI: typeof Defined;
        MODE_TRAIN: typeof Defined;
        MODE_TRAINISH: typeof Defined;
        MODE_TRAM: typeof Defined;
        MODE_TRANSIT: typeof Defined;
        MODE_WALK: typeof Defined;
      }>,
    ]
  >,
  VehicleIdsByModeBrand
>;
export const VehicleIdsByMode: VehicleIdsByModeC = t.brand(
  t.intersection([
    t.partial({
      MODE_BICYCLE: VehicleIds,
      MODE_BUS: VehicleIds,
      MODE_BUSISH: VehicleIds,
      MODE_CABLE_CAR: VehicleIds,
      MODE_CAR: VehicleIds,
      MODE_FERRY: VehicleIds,
      MODE_FUNICULAR: VehicleIds,
      MODE_GONDOLA: VehicleIds,
      MODE_RAIL: VehicleIds,
      MODE_SCOOTER: VehicleIds,
      MODE_SHARED_BICYCLE: VehicleIds,
      MODE_SHARED_CAR: VehicleIds,
      MODE_SHARED_E_BICYCLE: VehicleIds,
      MODE_MOPED: VehicleIds,
      MODE_SUBWAY: VehicleIds,
      MODE_TAXI: VehicleIds,
      MODE_TRAIN: VehicleIds,
      MODE_TRAINISH: VehicleIds,
      MODE_TRAM: VehicleIds,
      MODE_TRANSIT: VehicleIds,
      MODE_WALK: VehicleIds,
    }),
    t.type({
      MODE_BICYCLE: Defined,
      MODE_BUS: Defined,
      MODE_BUSISH: Defined,
      MODE_CABLE_CAR: Defined,
      MODE_CAR: Defined,
      MODE_FERRY: Defined,
      MODE_FUNICULAR: Defined,
      MODE_GONDOLA: Defined,
      MODE_RAIL: Defined,
      MODE_SCOOTER: Defined,
      MODE_SHARED_BICYCLE: Defined,
      MODE_SHARED_CAR: Defined,
      MODE_SHARED_E_BICYCLE: Defined,
      MODE_SUBWAY: Defined,
      MODE_TAXI: Defined,
      MODE_TRAIN: Defined,
      MODE_TRAINISH: Defined,
      MODE_TRAM: Defined,
      MODE_TRANSIT: Defined,
      MODE_WALK: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      MODE_BICYCLE?: VehicleIds;
      MODE_BUS?: VehicleIds;
      MODE_BUSISH?: VehicleIds;
      MODE_CABLE_CAR?: VehicleIds;
      MODE_CAR?: VehicleIds;
      MODE_FERRY?: VehicleIds;
      MODE_FUNICULAR?: VehicleIds;
      MODE_GONDOLA?: VehicleIds;
      MODE_RAIL?: VehicleIds;
      MODE_SCOOTER?: VehicleIds;
      MODE_SHARED_BICYCLE?: VehicleIds;
      MODE_SHARED_CAR?: VehicleIds;
      MODE_SHARED_E_BICYCLE?: VehicleIds;
      MODE_MOPED?: VehicleIds;
      MODE_SUBWAY?: VehicleIds;
      MODE_TAXI?: VehicleIds;
      MODE_TRAIN?: VehicleIds;
      MODE_TRAINISH?: VehicleIds;
      MODE_TRAM?: VehicleIds;
      MODE_TRANSIT?: VehicleIds;
      MODE_WALK?: VehicleIds;
    } & {
      MODE_BICYCLE: Defined;
      MODE_BUS: Defined;
      MODE_BUSISH: Defined;
      MODE_CABLE_CAR: Defined;
      MODE_CAR: Defined;
      MODE_FERRY: Defined;
      MODE_FUNICULAR: Defined;
      MODE_GONDOLA: Defined;
      MODE_RAIL: Defined;
      MODE_SCOOTER: Defined;
      MODE_SHARED_BICYCLE: Defined;
      MODE_SHARED_CAR: Defined;
      MODE_SHARED_E_BICYCLE: Defined;
      MODE_SUBWAY: Defined;
      MODE_TAXI: Defined;
      MODE_TRAIN: Defined;
      MODE_TRAINISH: Defined;
      MODE_TRAM: Defined;
      MODE_TRANSIT: Defined;
      MODE_WALK: Defined;
    },
    VehicleIdsByModeBrand
  > => true,
  'VehicleIdsByMode',
);
export type VehicleIdsByModeBrand = {
  readonly VehicleIdsByMode: unique symbol;
};

// Vehicle
// The default export. More information at the top.
export type Vehicle = t.Branded<unknown, VehicleBrand>;
export type VehicleC = t.BrandC<t.UnknownC, VehicleBrand>;
export const Vehicle: VehicleC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, VehicleBrand> => true,
  'Vehicle',
);
export type VehicleBrand = {
  readonly Vehicle: unique symbol;
};

export default Vehicle;

// Success
