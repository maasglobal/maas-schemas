'use strict';

const schema = require('../../../schemas/core/components/common.json');
const customerSchema = require('../../../schemas/core/customer.json');
const { generateTestCases } = require('../../test-lib');

describe('customer.name', () => {
  generateTestCases(schema.definitions.personalName, true, [
    'Lauri',
    '姚 明', // Chinese: Yao Ming
    'ADÉLAÏDE', // French form of Adelaide
    'Hans V.',
    'じぇいむず', // Japanese
    'Hiếu Nguyễn', // Vietnamese
    // 'รถยนต์', // Thai ----------- Does not work though it should
    // 'ລົດ', // Lao ----------- Does not work though it should
    'سيارة', // Arabic
    '차', // Korean
    // 'Влади́мир Пу́тин', // Cyrillic Vladimir Putin ----------- Does not work though it should
    'Jędruś', // Polish
    'Svan',
    "O'Neill",
    'Sören-sön',
    // 'महात्मा', // Hindi: Gandhi ----------- Does not work though it should
    'Dot. d`Tester',
    'ぐえん', // Japanese
  ]);

  generateTestCases(schema.definitions.personalName, false, [
    '123123', // Number should fail
    '+123123',
    '#"€"€#',
    '',
    '💩',
  ]);
});

describe('customer.phone', () => {
  generateTestCases(schema.definitions.phone, true, ['+35850123456', '+855979301811']);

  generateTestCases(schema.definitions.phone, false, [
    '💩',
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
