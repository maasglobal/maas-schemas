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

  describe('booking schema', () => {
    const schema = require('../schemas/core/booking.json');

    describe('main schema', () => {
      it('should accept valid examples', () => {
        schema.examples.map(example => expect(utils.validate(schema, example)).to.exist);
      });
    });
  });

  describe('common schema', () => {
    const schema = require('../schemas/core/components/common.json');
    const { phone, email, customerReference, looseCustomerReference } = utils.definitions(schema);
    describe('phone schema', () => {
      it('should accept valid examples', () => {
        phone.examples.map(example => expect(utils.validate(phone, example)).to.exist);
      });
    });
    describe('email schema', () => {
      it('should accept valid examples', () => {
        email.examples.map(example => expect(utils.validate(email, example)).to.exist);
      });
    });
    describe('customerReference schema', () => {
      it('should accept valid examples', () => {
        customerReference.examples.map(example => expect(utils.validate(customerReference, example)).to.exist);
      });
    });
    describe('looseCustomerReference schema', () => {
      it('should accept valid examples', () => {
        looseCustomerReference.examples.map(
          example => expect(utils.validate(looseCustomerReference, example)).to.exist
        );
      });
    });
  });

  describe('units schema', () => {
    const schema = require('../schemas/core/components/units.json');
    const { uuid, obsoleteIdentityId, identityId } = utils.definitions(schema);
    describe('uuid schema', () => {
      it('should accept valid examples', () => {
        uuid.examples.map(example => expect(utils.validate(uuid, example)).to.exist);
      });
    });
    describe('obsoleteIdentityId schema', () => {
      it('should accept valid examples', () => {
        obsoleteIdentityId.examples.map(example => expect(utils.validate(obsoleteIdentityId, example)).to.exist);
      });
    });
    describe('identityId schema', () => {
      it('should accept valid examples', () => {
        identityId.examples.map(example => expect(utils.validate(identityId, example)).to.exist);
      });
    });
  });

  describe('customer schema', () => {
    const schema = require('../schemas/core/customer.json');

    describe('main schema', () => {
      it('should succeed without error', () => {
        expect(utils.validate(schema, customer)).to.exist;
      });

      it('should accept valid examples', () => {
        schema.examples.map(example => expect(utils.validate(schema, example)).to.exist);
      });
    });
  });

  describe('environments', () => {
    const schema = require('../schemas/environments/environments.json');
    const { environment, devEnvironment } = utils.definitions(schema);
    describe('environment schema', () => {
      it('should accept valid examples', () => {
        environment.examples.map(example => expect(utils.validate(environment, example)).to.exist);
      });
    });
    describe('dev environment schema', () => {
      it('should accept valid examples', () => {
        devEnvironment.examples.map(example => expect(utils.validate(devEnvironment, example)).to.exist);
      });
      it('should NOT accept all environment examples', () => {
        expect(() => environment.examples.forEach(example => utils.validate(devEnvironment, example))).to.throw();
      });
    });
    describe('main schema', () => {
      it('should accept valid examples', () => {
        schema.examples.forEach(example => expect(utils.validate(schema, example)).to.exist);
      });
    });
  });
});
