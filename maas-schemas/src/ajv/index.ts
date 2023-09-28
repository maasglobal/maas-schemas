import * as mjsv from 'maasglobal-json-schema-validator';

export { ValidationError } from 'maasglobal-json-schema-validator';

let validator: mjsv.Validator | undefined;

export function init(): mjsv.Validator {
  validator = mjsv.validator([require('./registry')]);

  return validator;
}

export function cached(): mjsv.Validator {
  if (typeof validator !== 'undefined') {
    return validator;
  }
  return init();
}

export function validate(schema: mjsv.Schema | mjsv.SchemaURI, obj: unknown): unknown {
  const instance = cached();
  return instance.validate(schema, obj);
}
