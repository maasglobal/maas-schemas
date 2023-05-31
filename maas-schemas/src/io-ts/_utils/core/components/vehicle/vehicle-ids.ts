import { BookingMeta } from '../../../../_types/core/booking-meta';
import { VehicleId, VehicleIds } from '../../../../_types/core/components/vehicle';
import { MODE_BICYCLE } from '../../../../_types/core/modes/MODE_BICYCLE';
import { MODE_BUS } from '../../../../_types/core/modes/MODE_BUS';
import { MODE_BUSISH } from '../../../../_types/core/modes/MODE_BUSISH';
import { MODE_CABLE_CAR } from '../../../../_types/core/modes/MODE_CABLE_CAR';
import { MODE_CAR } from '../../../../_types/core/modes/MODE_CAR';
import { MODE_FERRY } from '../../../../_types/core/modes/MODE_FERRY';
import { MODE_FUNICULAR } from '../../../../_types/core/modes/MODE_FUNICULAR';
import { MODE_GONDOLA } from '../../../../_types/core/modes/MODE_GONDOLA';
import { MODE_RAIL } from '../../../../_types/core/modes/MODE_RAIL';
import { MODE_SCOOTER } from '../../../../_types/core/modes/MODE_SCOOTER';
import { MODE_SHARED_BICYCLE } from '../../../../_types/core/modes/MODE_SHARED_BICYCLE';
import { MODE_SHARED_CAR } from '../../../../_types/core/modes/MODE_SHARED_CAR';
import { MODE_SHARED_E_BICYCLE } from '../../../../_types/core/modes/MODE_SHARED_E_BICYCLE';
import { MODE_SUBWAY } from '../../../../_types/core/modes/MODE_SUBWAY';
import { MODE_TAXI } from '../../../../_types/core/modes/MODE_TAXI';
import { MODE_TRAIN } from '../../../../_types/core/modes/MODE_TRAIN';
import { MODE_TRAINISH } from '../../../../_types/core/modes/MODE_TRAINISH';
import { MODE_TRAM } from '../../../../_types/core/modes/MODE_TRAM';
import { MODE_TRANSIT } from '../../../../_types/core/modes/MODE_TRANSIT';
import { MODE_WALK } from '../../../../_types/core/modes/MODE_WALK';

export type Nullable<A> = A | undefined | null;

export function flatten(ids: Array<VehicleIds>): VehicleIds {
  return ids.flat() as VehicleIds;
}

export function fromArray(ids: Array<VehicleId>): VehicleIds {
  return ids as VehicleIds;
}

export const empty: VehicleIds = fromArray([]);

export function fromNullableVehicleId(nullable: Nullable<VehicleId>): VehicleIds {
  if (nullable === null) {
    return empty;
  }
  if (typeof nullable === 'undefined') {
    return empty;
  }
  return fromArray([nullable]);
}

/* eslint-disable @typescript-eslint/naming-convention */

export function fromMODE_BICYCLE(mode: MODE_BICYCLE): VehicleIds {
  return fromNullableVehicleId(mode.bike?.id);
}

export function fromMODE_BUS(_mode: MODE_BUS): VehicleIds {
  return empty;
}
export function fromMODE_BUSISH(_mode: MODE_BUSISH): VehicleIds {
  return empty;
}

export function fromMODE_CABLE_CAR(_mode: MODE_CABLE_CAR): VehicleIds {
  return empty;
}

export function fromMODE_CAR(mode: MODE_CAR): VehicleIds {
  return fromNullableVehicleId(mode.id);
}

export function fromMODE_FERRY(_mode: MODE_FERRY): VehicleIds {
  return empty;
}

export function fromMODE_FUNICULAR(_mode: MODE_FUNICULAR): VehicleIds {
  return empty;
}

export function fromMODE_GONDOLA(_mode: MODE_GONDOLA): VehicleIds {
  return empty;
}

export function fromMODE_RAIL(_mode: MODE_RAIL): VehicleIds {
  return empty;
}

export function fromMODE_SCOOTER(mode: MODE_SCOOTER): VehicleIds {
  return fromNullableVehicleId(mode.scooter?.id);
}

export function fromMODE_SHARED_BICYCLE(mode: MODE_SHARED_BICYCLE): VehicleIds {
  return fromNullableVehicleId(mode.bike?.id);
}

export function fromMODE_SHARED_CAR(mode: MODE_SHARED_CAR): VehicleIds {
  return fromNullableVehicleId(mode.id);
}

export function fromMODE_SHARED_E_BICYCLE(mode: MODE_SHARED_E_BICYCLE): VehicleIds {
  return fromNullableVehicleId(mode.bike?.id);
}

export function fromMODE_SUBWAY(_mode: MODE_SUBWAY): VehicleIds {
  return empty;
}

export function fromMODE_TAXI(mode: MODE_TAXI): VehicleIds {
  return fromNullableVehicleId(mode.vehicleId);
}

export function fromMODE_TRAIN(_mode: MODE_TRAIN): VehicleIds {
  return empty;
}

export function fromMODE_TRAINISH(_mode: MODE_TRAINISH): VehicleIds {
  return empty;
}

export function fromMODE_TRAM(_mode: MODE_TRAM): VehicleIds {
  return empty;
}

export function fromMODE_TRANSIT(_mode: MODE_TRANSIT): VehicleIds {
  return empty;
}

export function fromMODE_WALK(_mode: MODE_WALK): VehicleIds {
  return empty;
}

/* eslint-enable @typescript-eslint/naming-convention */

export function fromBookingMeta(meta: BookingMeta): VehicleIds {
  return flatten([
    meta['MODE_BICYCLE'] ? fromMODE_BICYCLE(meta['MODE_BICYCLE']) : empty,
    meta['MODE_BUS'] ? fromMODE_BUS(meta['MODE_BUS']) : empty,
    meta['MODE_BUSISH'] ? fromMODE_BUSISH(meta['MODE_BUSISH']) : empty,
    meta['MODE_CABLE_CAR'] ? fromMODE_CABLE_CAR(meta['MODE_CABLE_CAR']) : empty,
    meta['MODE_CAR'] ? fromMODE_CAR(meta['MODE_CAR']) : empty,
    meta['MODE_FERRY'] ? fromMODE_FERRY(meta['MODE_FERRY']) : empty,
    meta['MODE_FUNICULAR'] ? fromMODE_FUNICULAR(meta['MODE_FUNICULAR']) : empty,
    meta['MODE_GONDOLA'] ? fromMODE_GONDOLA(meta['MODE_GONDOLA']) : empty,
    meta['MODE_RAIL'] ? fromMODE_RAIL(meta['MODE_RAIL']) : empty,
    meta['MODE_SCOOTER'] ? fromMODE_SCOOTER(meta['MODE_SCOOTER']) : empty,
    meta['MODE_SHARED_BICYCLE']
      ? fromMODE_SHARED_BICYCLE(meta['MODE_SHARED_BICYCLE'])
      : empty,
    meta['MODE_SHARED_CAR'] ? fromMODE_SHARED_CAR(meta['MODE_SHARED_CAR']) : empty,
    meta['MODE_SHARED_E_BICYCLE']
      ? fromMODE_SHARED_E_BICYCLE(meta['MODE_SHARED_E_BICYCLE'])
      : empty,
    meta['MODE_SUBWAY'] ? fromMODE_SUBWAY(meta['MODE_SUBWAY']) : empty,
    meta['MODE_TAXI'] ? fromMODE_TAXI(meta['MODE_TAXI']) : empty,
    meta['MODE_TRAIN'] ? fromMODE_TRAIN(meta['MODE_TRAIN']) : empty,
    meta['MODE_TRAINISH'] ? fromMODE_TRAINISH(meta['MODE_TRAINISH']) : empty,
    meta['MODE_TRAM'] ? fromMODE_TRAM(meta['MODE_TRAM']) : empty,
    meta['MODE_TRANSIT'] ? fromMODE_TRANSIT(meta['MODE_TRANSIT']) : empty,
    meta['MODE_WALK'] ? fromMODE_WALK(meta['MODE_WALK']) : empty,
  ]);
}
