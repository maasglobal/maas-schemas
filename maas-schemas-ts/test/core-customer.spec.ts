import * as ruins from 'ruins-ts';
import { Customer, examplesCustomer } from '../src/core/customer';

describe('Check examples', () => {
  describe('customer', () => {
    it('should decode examples', () => {
      ruins.fromEither(Customer.decode(examplesCustomer));
    });
  });
});
