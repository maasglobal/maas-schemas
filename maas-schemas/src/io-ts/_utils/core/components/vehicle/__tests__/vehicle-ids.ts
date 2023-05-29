import { validator } from 'io-ts-validator';

import { BookingMeta } from '../../../../../_types/core/booking-meta';
import { VehicleId, VehicleIds } from '../../../../../_types/core/components/vehicle';
import { MODE_BICYCLE } from '../../../../../_types/core/modes/MODE_BICYCLE';
import { MODE_BUS } from '../../../../../_types/core/modes/MODE_BUS';
import { MODE_BUSISH } from '../../../../../_types/core/modes/MODE_BUSISH';
import { MODE_CABLE_CAR } from '../../../../../_types/core/modes/MODE_CABLE_CAR';
import { MODE_CAR } from '../../../../../_types/core/modes/MODE_CAR';
import { MODE_FERRY } from '../../../../../_types/core/modes/MODE_FERRY';
import { MODE_FUNICULAR } from '../../../../../_types/core/modes/MODE_FUNICULAR';
import { MODE_GONDOLA } from '../../../../../_types/core/modes/MODE_GONDOLA';
import { MODE_RAIL } from '../../../../../_types/core/modes/MODE_RAIL';
import { MODE_SCOOTER } from '../../../../../_types/core/modes/MODE_SCOOTER';
import { MODE_SHARED_BICYCLE } from '../../../../../_types/core/modes/MODE_SHARED_BICYCLE';
import { MODE_SHARED_CAR } from '../../../../../_types/core/modes/MODE_SHARED_CAR';
import { MODE_SHARED_E_BICYCLE } from '../../../../../_types/core/modes/MODE_SHARED_E_BICYCLE';
import { MODE_SUBWAY } from '../../../../../_types/core/modes/MODE_SUBWAY';
import { MODE_TAXI } from '../../../../../_types/core/modes/MODE_TAXI';
import { MODE_TRAIN } from '../../../../../_types/core/modes/MODE_TRAIN';
import { MODE_TRAINISH } from '../../../../../_types/core/modes/MODE_TRAINISH';
import { MODE_TRAM } from '../../../../../_types/core/modes/MODE_TRAM';
import { MODE_TRANSIT } from '../../../../../_types/core/modes/MODE_TRANSIT';
import { MODE_WALK } from '../../../../../_types/core/modes/MODE_WALK';
import * as VehicleIds_ from '../vehicle-ids';

describe('vehicle-ids', () => {
  describe('empty', () => {
    it('should be an empty array', () => {
      expect(VehicleIds_.empty).toEqual([]);
    });
  });

  describe('fromArray', () => {
    it('should promote Array<VehicleId> to VehicleIds', () => {
      const id: VehicleId = validator(VehicleId).decodeSync('abc123');
      const ids: VehicleIds = VehicleIds_.fromArray([id]);
      expect(ids).toEqual([id]);
    });
  });

  describe('flatten', () => {
    it('should flatten Array<VehicleIds> to VehicleIds', () => {
      const ids1 = validator(VehicleIds).decodeSync(['abc']);
      const ids2 = validator(VehicleIds).decodeSync(['def']);
      const result: VehicleIds = VehicleIds_.flatten([ids1, ids2]);
      expect(result).toEqual([...ids1, ...ids2]);
    });
  });

  describe('fromNullableVehicleId', () => {
    it('should convert null to VehicleIds', () => {
      const result: VehicleIds = VehicleIds_.fromNullableVehicleId(null);
      expect(result).toEqual([]);
    });
    it('should convert undefined to VehicleIds', () => {
      const result: VehicleIds = VehicleIds_.fromNullableVehicleId(undefined);
      expect(result).toEqual([]);
    });
    it('should convert VehicleId to VehicleIds', () => {
      const id: VehicleId = validator(VehicleId).decodeSync('abc123');
      const result: VehicleIds = VehicleIds_.fromNullableVehicleId(id);
      expect(result).toEqual([id]);
    });
  });

  describe('fromMODE_BICYCLE', () => {
    it('should extract VehicleIds from MODE_BICYCLE', () => {
      const id = 'bicycle1';
      const mode = validator(MODE_BICYCLE).decodeSync({
        bike: {
          id,
        },
      });
      const result: VehicleIds = VehicleIds_.fromMODE_BICYCLE(mode);
      expect(result).toEqual([id]);
    });
    it('should support MODE_BICYCLE with missing bike property', () => {
      const mode = validator(MODE_BICYCLE).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_BICYCLE(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_BUS', () => {
    it('should extract VehicleIds from MODE_BUS', () => {
      const mode = validator(MODE_BUS).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_BUS(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_BUSISH', () => {
    it('should extract VehicleIds from MODE_BUSISH', () => {
      const mode = validator(MODE_BUSISH).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_BUSISH(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_CABLE_CAR', () => {
    it('should extract VehicleIds from MODE_CABLE_CAR', () => {
      const mode = validator(MODE_CABLE_CAR).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_CABLE_CAR(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_CAR', () => {
    it('should extract VehicleIds from MODE_CAR', () => {
      const id = 'car1';
      const mode = validator(MODE_CAR).decodeSync({
        id,
        name: 'Basic Car',
        description: 'Red sedan',
        image: 'https://example.com/image.png',
      });
      const result: VehicleIds = VehicleIds_.fromMODE_CAR(mode);
      expect(result).toEqual([id]);
    });
  });

  describe('fromMODE_FERRY', () => {
    it('should extract VehicleIds from MODE_FERRY', () => {
      const mode = validator(MODE_FERRY).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_FERRY(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_FUNICULAR', () => {
    it('should extract VehicleIds from MODE_FUNICULAR', () => {
      const mode = validator(MODE_FUNICULAR).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_FUNICULAR(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_GONDOLA', () => {
    it('should extract VehicleIds from MODE_GONDOLA', () => {
      const mode = validator(MODE_GONDOLA).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_GONDOLA(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_RAIL', () => {
    it('should extract VehicleIds from MODE_RAIL', () => {
      const mode = validator(MODE_RAIL).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_RAIL(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_SCOOTER', () => {
    it('should extract VehicleIds from MODE_SCOOTER', () => {
      const id = 'scooter1';
      const mode = validator(MODE_SCOOTER).decodeSync({
        scooter: {
          id,
        },
      });
      const result: VehicleIds = VehicleIds_.fromMODE_SCOOTER(mode);
      expect(result).toEqual([id]);
    });
    it('should support MODE_SCOOTER with missing scooter property', () => {
      const mode = validator(MODE_SCOOTER).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_SCOOTER(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_SHARED_BICYCLE', () => {
    it('should extract VehicleIds from MODE_SHARED_BICYCLE', () => {
      const id = 'sharedBicycle1';
      const mode = validator(MODE_SHARED_BICYCLE).decodeSync({
        bike: {
          id,
        },
      });
      const result: VehicleIds = VehicleIds_.fromMODE_SHARED_BICYCLE(mode);
      expect(result).toEqual([id]);
    });
    it('should support MODE_SHARED_BICYCLE with missing bike property', () => {
      const mode = validator(MODE_SHARED_BICYCLE).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_SHARED_BICYCLE(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_SHARED_CAR', () => {
    it('should extract VehicleIds from MODE_SHARED_CAR', () => {
      const id = 'sharedCar1';
      const mode = validator(MODE_SHARED_CAR).decodeSync({
        id,
        name: 'Basic Car',
        description: 'Red sedan',
        image: 'https://example.com/image.png',
      });
      const result: VehicleIds = VehicleIds_.fromMODE_SHARED_CAR(mode);
      expect(result).toEqual([id]);
    });
  });

  describe('fromMODE_SHARED_E_BICYCLE', () => {
    it('should extract VehicleIds from MODE_SHARED_E_BICYCLE', () => {
      const id = 'sharedEBicycle1';
      const mode = validator(MODE_SHARED_E_BICYCLE).decodeSync({
        bike: {
          id,
        },
      });
      const result: VehicleIds = VehicleIds_.fromMODE_SHARED_E_BICYCLE(mode);
      expect(result).toEqual([id]);
    });
    it('should support MODE_SHARED_E_BICYCLE with missing bike property', () => {
      const mode = validator(MODE_SHARED_E_BICYCLE).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_SHARED_E_BICYCLE(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_SUBWAY', () => {
    it('should extract VehicleIds from MODE_SUBWAY', () => {
      const mode = validator(MODE_SUBWAY).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_SUBWAY(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_TAXI', () => {
    it('should extract VehicleIds from MODE_TAXI', () => {
      const vehicleId = 'taxi1';
      const mode = validator(MODE_TAXI).decodeSync({
        vehicleId,
      });
      const result: VehicleIds = VehicleIds_.fromMODE_TAXI(mode);
      expect(result).toEqual([vehicleId]);
    });
  });

  describe('fromMODE_TRAIN', () => {
    it('should extract VehicleIds from MODE_TRAIN', () => {
      const mode = validator(MODE_TRAIN).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_TRAIN(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_TRAINISH', () => {
    it('should extract VehicleIds from MODE_TRAINISH', () => {
      const mode = validator(MODE_TRAINISH).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_TRAINISH(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_TRAM', () => {
    it('should extract VehicleIds from MODE_TRAM', () => {
      const mode = validator(MODE_TRAM).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_TRAM(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_TRANSIT', () => {
    it('should extract VehicleIds from MODE_TRANSIT', () => {
      const mode = validator(MODE_TRANSIT).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_TRANSIT(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromMODE_WALK', () => {
    it('should extract VehicleIds from MODE_WALK', () => {
      const mode = validator(MODE_WALK).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromMODE_WALK(mode);
      expect(result).toEqual([]);
    });
  });

  describe('fromBookingBeta', () => {
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
      const result: VehicleIds = VehicleIds_.fromBookingMeta(bookingMeta);
      expect(result).toEqual([
        bicycleId,
        carId,
        scooterId,
        sharedBicycleId,
        sharedCarId,
        sharedEBicycleId,
        taxiId,
      ]);
    });
    it('should support BookingMeta with no modes', () => {
      const bookingMeta = validator(BookingMeta).decodeSync({});
      const result: VehicleIds = VehicleIds_.fromBookingMeta(bookingMeta);
      expect(result).toEqual([]);
    });
  });
});
