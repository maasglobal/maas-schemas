'use strict';

const schema = require('../../../schemas/core/components/car-rental.json');
const { generateTestCases } = require('../../test-lib');

describe('car-rental.registrationPlate', () => {
  generateTestCases(schema.properties.car.properties.registrationPlate, true, [
    'ABC1234',
    'ABC 1234',
    'ABC-1234',
    '品川 580 わ 1043',
  ]);

  generateTestCases(schema.properties.car.properties.registrationPlate, false, ['', '💩']);
});
