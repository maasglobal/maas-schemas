/* eslint-disable fp/no-class, fp/no-this, fp/no-mutation */

import Ajv from 'ajv';

const MAXIMUM_REPORTED_RESPONSE_LENGTH = 80;

function trim(message: string) {
  if (message.length <= MAXIMUM_REPORTED_RESPONSE_LENGTH) {
    return message;
  }

  return `${message.substring(0, MAXIMUM_REPORTED_RESPONSE_LENGTH)}...`;
}

export class ValidationError extends Error {
  object: unknown;
  errors: Array<any>;
  statusCode: number;
  file: string | undefined;
  line: number | undefined;

  /**
   * Constructor that is inteded to be private constructor - use the Factory
   * methods, instead.
   *
   * @param message The error message to show to end users
   * @param errors The validation errors
   * @param object The object that failed to validate
   * @param fileName The JS file causing the error (optional)
   * @param lineNumber The line number in the file (optional)
   */
  constructor(
    message: string,
    errors: Array<any>,
    object: unknown,
    fileName?: string,
    lineNumber?: number,
  ) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.name = this.constructor.name;
    this.object = object;
    this.errors = errors;
    this.statusCode = 400;
    this.file = fileName;
    this.line = lineNumber;
  }
  /**
   * Factory to instantiate a ValidationError from AJV validation error array
   *
   * @param errors the AJV validation errors
   * @param object the object that failed to validate
   * @return the new error
   */
  static fromValidatorErrors(errors: Ajv['errors'], object: unknown): ValidationError {
    const errorArray: Ajv['errors'] = Array.isArray(errors) ? errors : [];
    const messages = errorArray.map((error) => {
      return `'${error.instancePath}' ${trim(error.message ?? String())}, got '${
        error.data == null ? String(error.data) : trim(JSON.stringify(error.data))
      }'`;
    });

    if (messages.length > 1) {
      return new ValidationError(
        `Multiple validation errors: \n${messages.join('\n')}`,
        errorArray,
        object,
      );
    }

    return new ValidationError(messages.join(', '), errorArray, object);
  }

  /**
   * Factory to instantiate ValidationError from a raw value
   *
   * @param dataPath the data path of the parameter (use . to denote paths, e.g. .payload)
   * @param data the value to use
   * @param message the description of the validation error
   * @param object the object that failed to validate
   * @return ValidationError with the given parameters
   */
  static fromValue(
    dataPath: string,
    data: unknown,
    message: string,
    object: unknown,
  ): ValidationError {
    const msg = `Validation error: '${dataPath}' ${trim(message)}, got '${trim(
      JSON.stringify(data),
    )}'`;
    const error = {
      dataPath,
      message,
      data,
    };

    return new ValidationError(msg, [error], object);
  }
}
