import * as ruins from 'ruins-ts';
import { MODE_TAXI } from '../src/core/modes/MODE_TAXI';

describe('Check modes', () => {
  describe('MODE_TAXI', () => {
    it('should decode arriving taxi', () => {
      const inputMode = {
        eta: 1575014272286,
        vehicleLocation: { lat: 33.230993, lon: 6.374891 },
        vehicleId: 'Z 123 XX',
        vehicleDescription: 'proud-hand',
        taxiCenter: { name: 'More Taxi 123', phone: '+358401234567' },
      };
      const mode = ruins.fromEither(MODE_TAXI.decode(inputMode));
    });

    it('should decode only taxiCenter', () => {
      const inputMode = {
        taxiCenter: { name: 'Some taxi', phone: '+358401234567' },
      };
      const mode = ruins.fromEither(MODE_TAXI.decode(inputMode));
      expect(mode).toEqual(inputMode);
    });

    it('should allow extra', () => {
      const inputMode = {
        taxiCenter: { name: 'Some taxi', phone: '+358401234567' },
        extra: { values: 1 },
        more: 'More values',
      };
      const mode = ruins.fromEither(MODE_TAXI.decode(inputMode));
      expect(mode).toEqual(inputMode);
    });
  });
});
