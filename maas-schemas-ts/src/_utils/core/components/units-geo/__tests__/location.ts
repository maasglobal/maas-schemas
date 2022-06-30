import * as Location_ from '../location';

import { validator } from 'io-ts-validator';

import {
  Location,
  Latitude,
  Longitude,
} from '../../../../../_types/core/components/units-geo';

describe('Location utils', () => {
  it('should provide Location constructor', () => {
    const lat = validator(Latitude).decodeSync(12);
    const lon = validator(Longitude).decodeSync(34);
    const expected = validator(Location).decodeSync({ lat, lon });
    const location: Location = Location_.location(lat, lon);
    expect(location).toStrictEqual(expected);
  });
});
