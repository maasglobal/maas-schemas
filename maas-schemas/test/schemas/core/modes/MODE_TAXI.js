'use strict';

const { expect } = require('chai');
const utils = require('../../../../');

const responseWithoutSpaceDemand = {
  vehicleId: 'T123',
  vehicleType: 'Mercedes',
};

describe('MODE_TAXI response', () => {
  const schema = require('../../../../schemas/core/modes/MODE_TAXI.json');

  it('should succeed without error for response without space demand', () => {
    const result = utils.validate(schema, responseWithoutSpaceDemand);

    expect(result).to.exist;
    expect(result.spaceDemand).to.not.exist;
  });

  it('should succeed without error for response with space demand', () => {
    const result = utils.validate(
      schema,
      Object.assign(
        {
          spaceDemand: {
            adults: 1,
          },
        },
        responseWithoutSpaceDemand
      )
    );

    expect(result).to.exist;
    expect(result.spaceDemand).to.exist;
    expect(result.spaceDemand.adults).to.equal(1);
  });
});
