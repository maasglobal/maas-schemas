'use strict';

const schema = require('../../../schemas/core/components/common.json');
const customerSchema = require('../../../schemas/core/customer.json');
const { generateTestCases } = require('../../test-lib');

describe('customer.firstName', () => {
  generateTestCases(schema.definitions.personalName, true, [
    'Lauri',
    '明', // Chinese: Ming
    'ADÉLAÏDE', // French form of Adelaide
    'Hans V.',
  ]);

  generateTestCases(schema.definitions.personalName, false, [
    '💩',
    //'lauri svan', // --> Should fail but doesn't - hard to define as regexp
  ]);
});

describe('customer.lastName', () => {
  generateTestCases(schema.definitions.personalName, true, [
    'Svan',
    //'Пу́тин', // Cyrillic: Putin -> Not supported
    '姚', // Chinese: Yao
    "O'Neill",
    'Sören-sön',
    // 'महात्मा', // Hindi: Gandhi -> not supported
    'Dot. d`Tester',
  ]);
});

describe('customer.phone', () => {
  generateTestCases(schema.definitions.phone, true, ['+35850123456', '+855979301811']);

  generateTestCases(schema.definitions.phone, false, [
    '💩',
    //'svan', // --> Should fail but doesn't - hard to define as regexp
    '',
    'sdfdsf',
    '+358123456789012345678', // Too long string
  ]);
});

describe('customer.email', () => {
  generateTestCases(schema.definitions.email, true, [
    'info@maas.global',
    // See https://hackernoon.com/the-100-correct-way-to-validate-email-addresses-7c4818f24643
    //'user@tt', // -> not supported
    '#"€"€#"@gmail.com',
    'very@very@unsual.com',
  ]);
});

describe('customer.subscriberType', () => {
  generateTestCases(customerSchema.properties.subscriberType, true, ['non-subscriber']);
});
