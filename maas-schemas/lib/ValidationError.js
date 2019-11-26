'use strict';

const MAXIMUM_REPORTED_RESPONSE_LENGTH = 80;

function trim(message) {
  if (message.length <= MAXIMUM_REPORTED_RESPONSE_LENGTH) {
    return message;
  }

  return `${message.substr(0, MAXIMUM_REPORTED_RESPONSE_LENGTH)}...`;
}

class ValidationError extends Error {
  /**
   * Constructor that is inteded to be private constructor - use the Factory
   * methods, instead.
   *
   * @param {string} message The error message to show to end users
   * @param {object} object The object that failed to validate
   * @param {array} errors The validation errors
   * @param {string} fileName The JS file causing the error (optional)
   * @param {number} lineNumber The line number in the file (optional)
   */
  constructor(message, errors, object, fileName, lineNumber) {
    super(message, fileName, lineNumber);

    this.object = object;
    this.errors = errors;
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
  /**
   * Factory to instantiate a ValidationError from AJV validation error array
   *
   * @param {array} errors the AJV validation errors
   * @param {object} object the object that failed to validate
   * @return {ValidationError} the new error
   */
  static fromValidatorErrors(errors, object) {
    const messages = errors.map(error => {
      return `'${error.dataPath}' ${trim(error.message)}, got '${
        error.data == null ? String(error.data) : trim(JSON.stringify(error.data))
      }'`;
    });

    if (messages.length > 1) {
      return new ValidationError(`Multiple validation errors: \n${messages.join('\n')}`, errors, object);
    }

    return new ValidationError(messages.join(', '), errors, object);
  }

  /**
   * Factory to instantiate ValidationError from a raw value
   *
   * @param dataPath {string} the data path of the parameter (use . to denote paths, e.g. .payload)
   * @param data {any} the value to use
   * @param message {string} the description of the validation error
   * @param object {object} the object that failed to validate
   * @return ValidationError with the given parameters
   */
  static fromValue(dataPath, data, message, object) {
    const msg = `Validation error: '${dataPath}' ${trim(message)}, got '${trim(JSON.stringify(data))}'`;
    const error = {
      dataPath,
      message,
      data,
    };

    return new ValidationError(msg, [error], object);
  }
}

module.exports = ValidationError;
