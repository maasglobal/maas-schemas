'use strict';

const expect = require('chai').expect;
const utils = require('..');
const ValidationError = require('../ValidationError');
const bookingOptionsResponse =
  require('./valid-booking-options-response.json');
const validBookingResponse =
  require('./valid-booking-response.json');

// Missing required fields [leg, customer, token] etc...
const invalidBookingResponse = {
  customer: {
    firstName: 'John',
    lastName: 'Doe',
    phone: 109381023,
    email: 'john.doe@example.com',
  },
};

module.exports = function () {

  describe('Schema validation', () => {
    describe('validate valid booking-create response', () => {
      const schema =
        require('../prebuilt/tsp/booking-create/response.json');

      it('should succeed without error', () => {
        return utils.validate(schema, validBookingResponse);
      });
    });

    describe('validate invalid booking-create response', () => {
      const schema =
        require('../prebuilt/tsp/booking-create/response.json');

      it('should have validation error', () => {
        return utils.validate(schema, invalidBookingResponse)
        .then(
          response => {
            expect('should.not.succeed').to.be.null;
          }, error => {
            expect(error).to.be.an.instanceof(ValidationError);
          }
        );
      });
    });

    describe('validate prebuilt booking options schema', () => {
      const schema =
        require('../prebuilt/tsp/booking-options-list/response.json');

      it('should succeed without error', () => {
        return utils.validate(schema, bookingOptionsResponse);
      });
    });
  });
};
