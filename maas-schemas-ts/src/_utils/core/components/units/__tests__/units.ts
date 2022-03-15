import * as Units_ from '../units';

describe('units', () => {
  it('should export Currency utils', () => {
    expect(Units_.Currency_).toBeDefined;
  });
  it('should export Uuid utils', () => {
    expect(Units_.Uuid_).toBeDefined;
  });
});
