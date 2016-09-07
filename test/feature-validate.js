'use strict';

const expect = require('chai').expect;
const index = require('../index.js');

// Missing required field [leg, customer]
const dummyInvalidBooking = {
  customer: {
    title: 'mr',
    firstName: 'John',
    lastName: 'Doe',
    phone: 109381023,
    email: 'john.doe@test.fi',
  },
};

const dummyValidBooking = {
  leg: {
    mode: 'WALK',
    startTime: Date.now(),
    endTime: Date.now(),
    agencyId: 'dummy',
  },
  terms: {
    price: {
      amount: 0,
      currency: 'EUR',
    },
  },
  customer: {
    title: 'mr',
    firstName: 'John',
    lastName: 'Doe',
    phone: '123456',
    email: 'john.doe@test.fi',
  },
  meta: {},
};

module.exports = function () {

  describe('Schema validation', () => {

    describe('validate valid booking-create request', () => {

      it('should succeed without error', () => {
        return index.validate('maas-backend:bookings-create-request', dummyValidBooking);
      });
    });

    describe('validate invalid booking-create request', () => {

      it('should have validation error', () => {
        return index.validate('maas-backend:bookings-create-request', dummyInvalidBooking)
        .then(success => {
          expect('should.not.succeed').to.be.null;
        })
        .catch(error => {
          expect(error).to.be.an('error');
        });
      });
    });
  });
};
