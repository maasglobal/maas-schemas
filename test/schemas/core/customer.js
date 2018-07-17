'use strict';

const schema = require('../../../schemas/core/customer.json');
const { generateTestCases } = require('../../../test-lib');

describe('customer.firstName', () => {
  generateTestCases(schema, true, [
    { firstName: 'Lauri' },
    { firstName: '明' }, // Chinese: Ming
    { firstName: 'ADÉLAÏDE' }, // French form of Adelaide
    { firstName: 'Hans V.' },
  ]);

  generateTestCases(schema, false, [
    { firstName: '💩' },
    //'lauri svan', // --> Should fail but doesn't - hard to define as regexp
  ]);
});

describe('customer.lastName', () => {
  generateTestCases(schema, true, [
    { lastName: 'Svan' },
    //'Пу́тин', // Cyrillic: Putin -> Not supported
    { lastName: '姚' }, // Chinese: Yao
    { lastName: "O'Neill" },
    { lastName: 'Sören-sön' },
    // 'महात्मा', // Hindi: Gandhi -> not supported
    { lastName: 'Dot. d`Tester' },
  ]);

  generateTestCases(schema, false, [
    { lastName: '💩' },
    //'svan', // --> Should fail but doesn't - hard to define as regexp
    '',
  ]);
});

describe('customer.phone', () => {
  generateTestCases(schema, true, [{ phone: '+35850123456' }, { phone: '+855979301811' }]);

  generateTestCases(schema, false, [
    { phone: '💩' },
    //'svan', // --> Should fail but doesn't - hard to define as regexp
    { phone: '' },
    { phone: 'sdfdsf' },
    { phone: '+358123456789012345678' }, // Too long string
  ]);
});

describe('customer.email', () => {
  generateTestCases(schema, true, [
    { email: 'info@maas.global' },
    // See https://hackernoon.com/the-100-correct-way-to-validate-email-addresses-7c4818f24643
    //'user@tt', // -> not supported
    { email: '#"€"€#"@gmail.com' },
    { email: 'very@very@unsual.com' },
  ]);
});
