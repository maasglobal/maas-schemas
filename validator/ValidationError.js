'use strict';

class ValidationError extends Error {

  constructor(message) {
    super(`Validation error: ${message}`);
  }

  /**
   * Factory to instantiate a ValidationError from AJV validation error array
   *
   * @param {array} errors The AJV validation errors
   * @return {ValidationError} the new error
   */
  static fromValidatorErrors(errors) {
    const messages = errors.map(error => {
      return `'${error.dataPath}' ${error.message}, got '${JSON.stringify(error.data)}'`;
    });

    if (messages.length > 1) {
      return new ValidationError(`Multiple errors: \n${messages.join('\n')}`);
    }

    return new ValidationError(messages.join(''));
  }

  /**
   * Factory to instantiate ValidationERrorr from a raw value
   *
   * @param path the data path of the parameter (use . to denote paths, e.g. .payload)
   * @param value the value to use
   * @param message the description of the validation error
   * @return ValidationError with the given parameters
   */
  static fromValue(path, value, message) {
    const msg = `'${path}' ${message}, got '${JSON.stringify(value)}'`;

    return new ValidationError(msg);
  }
}

module.exports = ValidationError;
