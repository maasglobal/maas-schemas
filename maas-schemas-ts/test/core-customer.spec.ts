import * as ruins from 'ruins-ts';
import { examplesDefault as customerExamples } from '../src/core/customer';

describe('Check examples', () => {
  describe('customer', () => {
    it('should decode examples', () => {
      ruins.fromEither(customerExamples);
    });
  });
});
