import * as ruins from 'ruins-ts';
import { MODE_TAXI } from '../src/core/modes/MODE_TAXI';

describe('Check modes', () => {
  describe('MODE_TAXI', () => {
    it('should decode arriving taxi', () => {
      ruins.fromEither(
        MODE_TAXI.decode({
          eta: 1575014272286,
          vehicleLocation: { lat: 33.230993, lon: 6.374891 },
          vehicleId: 'Z 123 XX',
          vehicleDescription: 'proud-hand',
          taxiCenter: { name: 'More Taxi 123', phone: '+358401234567' },
        }),
      );
    });

    it('should decode only taxiCenter', () => {
      ruins.fromEither(
        MODE_TAXI.decode({
          taxiCenter: { name: 'Some taxi', phone: '+358401234567' },
        }),
      );
    });

    it('should allow extra', () => {
      ruins.fromEither(
        MODE_TAXI.decode({
          taxiCenter: { name: 'Some taxi', phone: '+358401234567' },
          extra: { values: 1 },
          more: 'More values',
        }),
      );
    });
  });
});
