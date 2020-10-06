'use strict';

const { expect } = require('chai');
const validRoutesEmptyResponse = require('./valid-provider.json');
const utils = require('../../../../');

describe('product provider schema', () => {
  const schema = require('../../../../schemas/maas-backend/products/provider.json');

  it('should validate without error', () => {
    expect(utils.validate(schema, validRoutesEmptyResponse)).to.exist;
  });
});
