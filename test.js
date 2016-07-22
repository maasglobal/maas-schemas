'use strict';

const index = require('./index.js');
const expect = require('chai').expect;
const bookingSchema = require('./core/booking.json');

describe('MaaS.fi schemas', () => {

  let fullSchema;
  let error;

  describe('deref booking.json schema', () => {
    before(done => {
      index.derefSchema(bookingSchema)
        .then((_fullSchema, _error) => {
          fullSchema = _fullSchema;
          error = _error;
          done();
        });

    });

    it('should return a deref-ed schema', () => {
      expect(fullSchema).to.not.be.undefined;
    });

    it('should succeed without error', () => {
      expect(error).to.be.undefined;
    });
  });
});
