'use strict';

const { expect } = require('chai');
const utils = require('..');
const bookingOptionsRequest = require('./valid-booking-options-request.json');
const bookingOptionsResponse = require('./valid-booking-options-response.json');
const validBookingResponsesWithPaymentParameters = require('./valid-booking-responses-v2-payment-parameters.json');
const validBookingResponse = require('./valid-booking-response.json');
const bookingTicketRequestRequest = require('./valid-booking-ticket-request.json');
const bookingTicketRequestResponse = require('./valid-booking-ticket-response.json');
const customer = require('./partial-customer.json');

// Missing required fields [leg, customer, token] etc...
const invalidBookingResponse = {
  customer: {
    firstName: 'John',
    lastName: 'Doe',
    phone: 109381023,
    email: 'john.doe@example.com',
  },
};

describe('Schema validation', () => {
  describe('validate valid booking-create response', () => {
    const schema = require('../schemas/tsp/booking-create/response.json');

    it('should succeed without error', () => {
      expect(utils.validate(schema, validBookingResponse)).to.exist;
    });
  });

  describe('validate invalid booking-create response', () => {
    const schema = require('../schemas/tsp/booking-create/response.json');

    it('should have validation error', () => {
      try {
        expect(utils.validate(schema, invalidBookingResponse)).to.not.exist;
      } catch (e) {
        expect(e.name).to.equal('ValidationError');
        expect(e.statusCode).to.equal(400);
        expect(e).to.exist;
      }
    });
  });

  describe('validate schemas booking options request schema', () => {
    const schema = require('../schemas/tsp/booking-options-list/request.json');

    it('should succeed without error', () => {
      expect(utils.validate(schema, bookingOptionsRequest)).to.exist;
    });
  });

  describe('validate schemas booking options response schema', () => {
    const schema = require('../schemas/tsp/booking-options-list/response.json');

    it('should succeed without error', () => {
      expect(utils.validate(schema, bookingOptionsResponse)).to.exist;
    });
  });

  describe('validate prebuild booking ticket request schema', () => {
    const schema = require('../schemas/tsp/booking-ticket/request.json');

    it('should succeed without error', () => {
      expect(utils.validate(schema, bookingTicketRequestRequest)).to.exist;
    });
  });

  describe('validate prebuild booking ticket response schema', () => {
    const schema = require('../schemas/tsp/booking-ticket/response.json');

    it('should succeed without error', () => {
      expect(utils.validate(schema, bookingTicketRequestResponse)).to.exist;
    });
  });

  describe('validate schemas booking response schema with paymentParameters', () => {
    const schema = require('../schemas/maas-backend/bookings/v2/bookings-create/response.json');

    it('should succeed without error', () => {
      for (const validBookingResponse of validBookingResponsesWithPaymentParameters) {
        const validated = utils.validate(schema, validBookingResponse);

        expect(validated).to.exist;
        expect(validated.paymentParameters).to.deep.equal(validBookingResponse.paymentParameters);
      }
    });
  });

  describe('validate schemas customer', () => {
    const schema = require('../schemas/core/customer.json');

    it('should succeed without error', () => {
      expect(utils.validate(schema, customer)).to.exist;
    });
  });
});
