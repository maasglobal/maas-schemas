# MaaS Global Json Schema Validator

Performs schema validation with Ajv.

```typescript
import * as mjsv from 'maasglobal-json-schema-validator';
import registry from 'maas-schemas/registry';

const validator = mjsv.validator([registry]);

const phone = validator.validate(
  'https://schemas.maas.global/core/components/common.json#/definitions/phone',
  '+358401234567',
);
```

## Devops

```
npm install -g yarn               # install yarn
yarn                              # install dependencies
yarn lint                         # run linters
yarn typecheck                    # run static type checks
yarn test                         # run tests
yarn prettify                     # auto format code base
yarn ci                           # perform a local CI test run
yarn build                        # create a production build
yarn clean                        # remove build artefacts
yarn readme-ts                    # extract readme code examples
yarn deploy-npm                   # deploy npm package
yarn deploy-alpha                 # deploy prelease npm package
```
