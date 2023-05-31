import { validator } from 'io-ts-validator';

import { BookingMeta } from '../../../../../_types/core/booking-meta';
import { VehicleIdsByMode } from '../../../../../_types/core/components/vehicle';
import * as VehicleIdsByMode_ from '../vehicle-ids-by-mode';

describe('vehicle-ids-by-mode', () => {
  describe('fromBookingMeta', () => {
    it('should extract VehicleIds from BookingMeta', () => {
      const bicycleId = 'bicycle1';
      const carId = 'car1';
      const scooterId = 'scooter1';
      const sharedBicycleId = 'sharedBicycle1';
      const sharedCarId = 'sharedCar1';
      const sharedEBicycleId = 'sharedEBicycle1';
      const taxiId = 'taxi1';
      const bookingMeta = validator(BookingMeta).decodeSync({
        MODE_BICYCLE: {
          bike: {
            id: bicycleId,
          },
        },
        MODE_BUS: {},
        MODE_BUSISH: {},
        MODE_CABLE_CAR: {},
        MODE_CAR: {
          id: carId,
          name: 'Basic Car',
          description: 'Red sedan',
          image: 'https://example.com/image.png',
        },
        MODE_FERRY: {},
        MODE_FUNICULAR: {},
        MODE_GONDOLA: {},
        MODE_RAIL: {},
        MODE_SCOOTER: {
          scooter: {
            id: scooterId,
          },
        },
        MODE_SHARED_BICYCLE: {
          bike: {
            id: sharedBicycleId,
          },
        },
        MODE_SHARED_CAR: {
          id: sharedCarId,
          name: 'Basic Car',
          description: 'Red sedan',
          image: 'https://example.com/image.png',
        },
        MODE_SHARED_E_BICYCLE: {
          bike: {
            id: sharedEBicycleId,
          },
        },
        MODE_SUBWAY: {},
        MODE_TAXI: {
          vehicleId: taxiId,
        },
        MODE_TRAIN: {},
        MODE_TRAINISH: {},
        MODE_TRAM: {},
        MODE_TRANSIT: {},
        MODE_WALK: {},
      });
      const result: VehicleIdsByMode = VehicleIdsByMode_.fromBookingMeta(bookingMeta);
      expect(result).toEqual({
        MODE_BICYCLE: [bicycleId],
        MODE_BUS: [],
        MODE_BUSISH: [],
        MODE_CABLE_CAR: [],
        MODE_CAR: [carId],
        MODE_FERRY: [],
        MODE_FUNICULAR: [],
        MODE_GONDOLA: [],
        MODE_RAIL: [],
        MODE_SCOOTER: [scooterId],
        MODE_SHARED_BICYCLE: [sharedBicycleId],
        MODE_SHARED_CAR: [sharedCarId],
        MODE_SHARED_E_BICYCLE: [sharedEBicycleId],
        MODE_SUBWAY: [],
        MODE_TAXI: [taxiId],
        MODE_TRAIN: [],
        MODE_TRAINISH: [],
        MODE_TRAM: [],
        MODE_TRANSIT: [],
        MODE_WALK: [],
      });
    });
    it('should support BookingMeta with no modes', () => {
      const bookingMeta = validator(BookingMeta).decodeSync({});
      const result: VehicleIdsByMode = VehicleIdsByMode_.fromBookingMeta(bookingMeta);
      expect(result).toEqual({
        MODE_BICYCLE: [],
        MODE_BUS: [],
        MODE_BUSISH: [],
        MODE_CABLE_CAR: [],
        MODE_CAR: [],
        MODE_FERRY: [],
        MODE_FUNICULAR: [],
        MODE_GONDOLA: [],
        MODE_RAIL: [],
        MODE_SCOOTER: [],
        MODE_SHARED_BICYCLE: [],
        MODE_SHARED_CAR: [],
        MODE_SHARED_E_BICYCLE: [],
        MODE_SUBWAY: [],
        MODE_TAXI: [],
        MODE_TRAIN: [],
        MODE_TRAINISH: [],
        MODE_TRAM: [],
        MODE_TRANSIT: [],
        MODE_WALK: [],
      });
    });
  });
});
