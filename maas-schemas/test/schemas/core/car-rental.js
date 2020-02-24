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

describe('car-rental.instruction', () => {
  generateTestCases(schema.definitions.instruction, true, [
    { title: 'TITLE', text: 'DESCRIPTION' },
    { title: 'TITLE', image: 'http://maasglobal.com/image.jpg' },
    { title: 'TITLE', image: 'http://maasglobal.com/image.jpg', icon: 'http://maasglobal.com/image.jpg' },
  ]);

  generateTestCases(schema.definitions.instruction, false, [{ title: 'TITLE' }]);
});
