import * as Balances_ from '../balances';

describe('balances', () => {
  it('should export BalanceName utils', () => {
    expect(Balances_.BalanceName_).toBeDefined;
  });
});
