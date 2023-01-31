import * as Units_ from '../units';

describe('units', () => {
  it('should export Currency utils', () => {
    expect(Units_.Currency_).toBeDefined;
  });
  it('should export Uuid utils', () => {
    expect(Units_.Uuid_).toBeDefined;
  });
  it('should export Authority utils', () => {
    expect(Units_.Authority_).toBeDefined;
  });
  it('should export Hostname utils', () => {
    expect(Units_.Hostname_).toBeDefined;
  });
  it('should export Port utils', () => {
    expect(Units_.Port_).toBeDefined;
  });
});
