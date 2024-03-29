import Ajv, { Options } from 'ajv';
import { NpmPackageName } from 'maasglobal-schema-package/lib/main';

import { ValidationError } from './validation-error';

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

export type RegistryPath<P extends NpmPackageName = NpmPackageName> =
  `${P}/lib/ajv/registry`;
export const registryPath = <P extends NpmPackageName>(packageName: P): RegistryPath<P> =>
  `${packageName}/lib/ajv/registry`;

export function validator(
  registries: Registries,
  optionsOverride: Partial<Options> = {},
): Validator {
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
    ...optionsOverride,
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
