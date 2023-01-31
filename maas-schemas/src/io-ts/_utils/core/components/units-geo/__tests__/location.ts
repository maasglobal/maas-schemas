import { validator } from 'io-ts-validator';

import {
  Latitude,
  Location,
  Longitude,
} from '../../../../../_types/core/components/units-geo';
import * as Location_ from '../location';

describe('Location utils', () => {
  it('should provide Location constructor', () => {
    const lat = validator(Latitude).decodeSync(12);
    const lon = validator(Longitude).decodeSync(34);
    const expected = validator(Location).decodeSync({ lat, lon });
    const location: Location = Location_.location(lat, lon);
    expect(location).toStrictEqual(expected);
  });
});
