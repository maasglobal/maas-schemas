import { Default as BookingCreateRequest } from '../lib/tsp/booking-create/request';
import { Default as BookingCreateResponse } from '../lib/tsp/booking-create/response';

import { decode } from 'io-ts-promise';
import { readFileSync } from 'fs';

describe('Check booking create payloads', () => {
  describe('taxi', () => {
    it('booking-create-request.json', () => {
      return decode(
        BookingCreateRequest,
        JSON.parse(
          readFileSync('./test/booking-create-request.json', { encoding: 'utf-8' }),
        ),
      );
    });

    it('booking-create-response.json', () => {
      return decode(
        BookingCreateResponse,
        JSON.parse(
          readFileSync('./test/booking-create-response.json', { encoding: 'utf-8' }),
        ),
      );
    });
  });
});
