'use strict';

const validRoutesEmptyResponse = require('./valid-booking-routes-empty-response.json');
const utils = require('../../../../');

describe('empty routes cause schema', () => {
  const schema = require('../../../../schemas/maas-backend/routes/routes-query/response.json');

  describe('main schema', () => {
    it('should succeed without error', () => {
      expect(utils.validate(schema, validRoutesEmptyResponse)).to.exist;
    });
  });
});
