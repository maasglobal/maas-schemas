'use strict';

const schema = require('../../../../schemas/maas-backend/subscriptions/subscription.json');
const { generateTestCases } = require('../../../test-lib');

describe('addon.quantity', () => {
  generateTestCases(schema.definitions.addon.properties.quantity, true, [
    0, // min value
    151280, // In range
    200000, // max value
  ]);

  generateTestCases(schema.definitions.addon.properties.quantity, false, [
    200001, // Over
  ]);
});
