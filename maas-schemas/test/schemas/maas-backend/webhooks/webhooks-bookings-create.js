'use strict';

const schema = require('../../../../schemas/maas-backend/webhooks/webhooks-bookings-create/request.json');
const { generateTestCases } = require('../../../test-lib');

describe('webhooks-bookings-create', () => {
  generateTestCases(schema, true, [
    {
      payload: {
        identityId: 'c4bf3ad0-4e6d-11ea-b64c-a3d04ec90b87',
        locale: 'fi',
        option: {
          cost: {
            amount: 0,
            currency: 'EUR',
          },
          leg: {
            startTime: 1582045562000,
            endTime: 1582045922000,
            from: {
              lat: 60.17806592826971,
              lon: 24.958452215046275,
              name: 'Merihaka',
            },
            to: {
              lat: 60.17806592826971,
              lon: 24.958452215046275,
              name: 'Merihaka',
            },
            mode: 'BICYCLE',
          },
          meta: {
            MODE_BICYCLE: { pickupStationId: '000' },
          },
          terms: {
            validity: {
              startTime: 1582045562000,
              endTime: 1582045922000,
            },
            cancellation: {
              isCancellable: true,
              cost: {
                amount: 0,
                currency: 'EUR',
              },
              expiration: 1582028997000,
            },
            faresRates: [
              {
                amount: 0,
                currency: 'EUR',
                timeInterval: 1800,
                startAt: 0,
              },
            ],
          },
          tspProduct: { id: 'Bike' },
        },
      },
    },
  ]);
});
