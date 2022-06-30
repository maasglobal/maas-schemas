import {
  Location,
  Latitude,
  Longitude,
} from '../../../../_types/core/components/units-geo';

export function location(lat: Latitude, lon: Longitude): Location {
  return {
    lat,
    lon,
  } as Location;
}
