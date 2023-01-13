import { ValidationError } from './validation-error';

describe('ValidationError', () => {
  it('should be instance of ValidationError', () => {
    const ve = new ValidationError('foo', ['bar'], {})
    expect(ve).toBeInstanceOf(ValidationError);
  });
});
