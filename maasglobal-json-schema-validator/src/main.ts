import Ajv from 'ajv';

import { ValidationError } from './validation-error';

export type BaseURI = string;
export type NpmPackageName = string;
export type DepInfo = {
  package: NpmPackageName;
};
export type Deps = Record<BaseURI, NpmPackageName>;
export type Manifest = {
  base: BaseURI;
  deps: Deps;
};

export type SchemaURI = string;
export type Schema = {
  $id?: SchemaURI;
};
export type Schemas = Array<Schema>;
export type Registry = { schemas: Schemas };
export type Registries = Array<Registry>;

export type ValidateF = (s: Schema | SchemaURI, o: unknown) => unknown;
export type Validator = {
  validate: ValidateF;
};

export function validator(registries: Registries): Validator {
  const ajv: Ajv = new Ajv({
    strictTypes: true,
    strictTuples: true,
    strictRequired: false,
    strictSchema: true,
    strictNumbers: true,
    allowUnionTypes: true,
    addUsedSchema: false,
    allErrors: true,
    coerceTypes: true,
    inlineRefs: false,
    meta: true,
    multipleOfPrecision: 6,
    removeAdditional: true,
    code: { source: false },
    useDefaults: false,
    validateSchema: false,
    verbose: true,
    $data: true,
  });
  ajv.addKeyword('invalid');

  registries.forEach(({ schemas }) => {
    schemas.forEach((schema) => {
      ajv.addSchema(schema);
    });
  });

  const validate: ValidateF = (schema, object) => {
    const copy = JSON.parse(JSON.stringify(object));

    // Using URI is preferable but not always possible
    const preferred = typeof schema === 'string' ? schema : schema.$id ?? schema;

    const valid = ajv.validate(preferred, copy);

    if (!valid) {
      // eslint-disable-next-line fp/no-throw
      throw ValidationError.fromValidatorErrors(ajv.errors, object);
    }

    return copy;
  };

  return { validate };
}
