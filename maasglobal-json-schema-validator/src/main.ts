import AJV from 'ajv';
import initKeywords from 'ajv-keywords';

import { ValidationError } from './validation-error';

export type SchemaURI = string;
export type Schema = {
  $id: SchemaURI;
};
export type Registry = Record<string, Schema>;
export type Registries = Array<Registry>;

export type ValidateF = (s: Schema | SchemaURI, o: unknown) => unknown;
export type Validator = {
  validate: ValidateF;
};

export function validator(registries: Registries): Validator {
  const ajv: AJV.Ajv = new AJV({
    addUsedSchema: false,
    allErrors: true,
    coerceTypes: true,
    errorDataPath: 'property',
    inlineRefs: false,
    meta: true,
    multipleOfPrecision: 6,
    removeAdditional: true,
    //sanitize: false,
    sourceCode: false,
    useDefaults: true,
    validateSchema: false,
    verbose: true,
    $data: true,
  });
  initKeywords(ajv);

  registries.forEach((registry) => {
    Object.values(registry).forEach((schema) => ajv.addSchema(schema));
  });

  const validate: ValidateF = (schema, object) => {
    const copy = JSON.parse(JSON.stringify(object));

    const schemaUri: SchemaURI = typeof schema === 'string' ? schema : schema.$id;

    const valid = ajv.validate(schemaUri, copy);

    if (!valid) {
      // eslint-disable-next-line fp/no-throw
      throw ValidationError.fromValidatorErrors(ajv.errors, object);
    }

    return copy;
  };

  return { validate };
}
