import * as Vehicle_ from '../vehicle';

describe('vehicle', () => {
  it('should export VehicleIds utils', () => {
    expect(Vehicle_.VehicleIds_).toBeDefined;
  });
  it('should export VehicleIdsByMode utils', () => {
    expect(Vehicle_.VehicleIdsByMode_).toBeDefined;
  });
});
