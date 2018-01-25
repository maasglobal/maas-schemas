'use strict';

const expect = require('chai').expect;
const schema = require('../../../prebuilt/core/components/customer.json');
const validator = require('../../../validator');
const ValidationError = require('../../../ValidationError');

function generateTestCases(schema, positive, cases) {
  if (positive) {
    it('positive cases', () => {
      cases.forEach(value => {
        expect(validator.validateSync(schema, value)).to.be.an.object;
      });
    });
  } else {
    it('negative cases', () => {
      cases.forEach(value => {
        const func = () => {
          validator.validateSync(schema, value);
          console.warn(`We should not get here. Input: ${value}`);
        };
        expect(func).to.throw(ValidationError);
      });
    });
  }
}

describe('customer.firstName', () => {
  generateTestCases(schema.properties.firstName, true, [
    'Lauri',
    //'Влади́мир', // Cyrillic: Vladimir -> Not supported
    '明', // Chinese: Ming
    'ADÉLAÏDE', // French form of Adelaide
    'Hans V.',
  ]);

  generateTestCases(schema.properties.firstName, false, [
    '💩',
    //'lauri svan', // --> Should fail but doesn't - hard to define as regexp
  ]);
});

describe('customer.lastName', () => {
  generateTestCases(schema.properties.lastName, true, [
    'Svan',
    //'Пу́тин', // Cyrillic: Putin -> Not supported
    '姚', // Chinese: Yao
    'O\'Neill',
    'Sören-sön',
    // 'महात्मा', // Hindi: Gandhi -> not supported
    'Dot. d`Tester',
  ]);

  generateTestCases(schema.properties.lastName, false, [
    '💩',
    //'svan', // --> Should fail but doesn't - hard to define as regexp
    '',
  ]);
});

describe('customer.phone', () => {
  generateTestCases(schema.properties.phone, true, [
    '+35850123456',
    '+855979301811',
  ]);

  generateTestCases(schema.properties.phone, false, [
    '💩',
    //'svan', // --> Should fail but doesn't - hard to define as regexp
    '',
    'sdfdsf',
    '+358123456789012345678', // Too long string
  ]);
});

describe('customer.email', () => {
  generateTestCases(schema.properties.email, true, [
    'info@maas.global',
    // See https://hackernoon.com/the-100-correct-way-to-validate-email-addresses-7c4818f24643#.3w69zak2b
    //'user@tt', // -> not supported
    '#"€"€#"@gmail.com',
    'very@very@unsual.com',
  ]);

  generateTestCases(schema.properties.phone, false, [
    '💩',
    //'svan', // --> Should fail but doesn't - hard to define as regexp
    '',
    'sdfdsf',
    '+358123456789012345678', // Too long string
  ]);
});
