import { BookingMeta } from '../../../../_types/core/booking-meta';
import { VehicleIdsByMode } from '../../../../_types/core/components/vehicle';
import * as VehicleIds_ from './vehicle-ids';

export function fromBookingMeta(meta: BookingMeta): VehicleIdsByMode {
  return {
    MODE_BICYCLE: meta['MODE_BICYCLE']
      ? VehicleIds_.fromMODE_BICYCLE(meta['MODE_BICYCLE'])
      : VehicleIds_.empty,
    MODE_BUS: meta['MODE_BUS']
      ? VehicleIds_.fromMODE_BUS(meta['MODE_BUS'])
      : VehicleIds_.empty,
    MODE_BUSISH: meta['MODE_BUSISH']
      ? VehicleIds_.fromMODE_BUSISH(meta['MODE_BUSISH'])
      : VehicleIds_.empty,
    MODE_CABLE_CAR: meta['MODE_CABLE_CAR']
      ? VehicleIds_.fromMODE_CABLE_CAR(meta['MODE_CABLE_CAR'])
      : VehicleIds_.empty,
    MODE_CAR: meta['MODE_CAR']
      ? VehicleIds_.fromMODE_CAR(meta['MODE_CAR'])
      : VehicleIds_.empty,
    MODE_FERRY: meta['MODE_FERRY']
      ? VehicleIds_.fromMODE_FERRY(meta['MODE_FERRY'])
      : VehicleIds_.empty,
    MODE_FUNICULAR: meta['MODE_FUNICULAR']
      ? VehicleIds_.fromMODE_FUNICULAR(meta['MODE_FUNICULAR'])
      : VehicleIds_.empty,
    MODE_GONDOLA: meta['MODE_GONDOLA']
      ? VehicleIds_.fromMODE_GONDOLA(meta['MODE_GONDOLA'])
      : VehicleIds_.empty,
    MODE_RAIL: meta['MODE_RAIL']
      ? VehicleIds_.fromMODE_RAIL(meta['MODE_RAIL'])
      : VehicleIds_.empty,
    MODE_SCOOTER: meta['MODE_SCOOTER']
      ? VehicleIds_.fromMODE_SCOOTER(meta['MODE_SCOOTER'])
      : VehicleIds_.empty,
    MODE_SHARED_BICYCLE: meta['MODE_SHARED_BICYCLE']
      ? VehicleIds_.fromMODE_SHARED_BICYCLE(meta['MODE_SHARED_BICYCLE'])
      : VehicleIds_.empty,
    MODE_SHARED_CAR: meta['MODE_SHARED_CAR']
      ? VehicleIds_.fromMODE_SHARED_CAR(meta['MODE_SHARED_CAR'])
      : VehicleIds_.empty,
    MODE_SHARED_E_BICYCLE: meta['MODE_SHARED_E_BICYCLE']
      ? VehicleIds_.fromMODE_SHARED_E_BICYCLE(meta['MODE_SHARED_E_BICYCLE'])
      : VehicleIds_.empty,
    MODE_SUBWAY: meta['MODE_SUBWAY']
      ? VehicleIds_.fromMODE_SUBWAY(meta['MODE_SUBWAY'])
      : VehicleIds_.empty,
    MODE_TAXI: meta['MODE_TAXI']
      ? VehicleIds_.fromMODE_TAXI(meta['MODE_TAXI'])
      : VehicleIds_.empty,
    MODE_TRAIN: meta['MODE_TRAIN']
      ? VehicleIds_.fromMODE_TRAIN(meta['MODE_TRAIN'])
      : VehicleIds_.empty,
    MODE_TRAINISH: meta['MODE_TRAINISH']
      ? VehicleIds_.fromMODE_TRAINISH(meta['MODE_TRAINISH'])
      : VehicleIds_.empty,
    MODE_TRAM: meta['MODE_TRAM']
      ? VehicleIds_.fromMODE_TRAM(meta['MODE_TRAM'])
      : VehicleIds_.empty,
    MODE_TRANSIT: meta['MODE_TRANSIT']
      ? VehicleIds_.fromMODE_TRANSIT(meta['MODE_TRANSIT'])
      : VehicleIds_.empty,
    MODE_WALK: meta['MODE_WALK']
      ? VehicleIds_.fromMODE_WALK(meta['MODE_WALK'])
      : VehicleIds_.empty,
  } as VehicleIdsByMode;
}
