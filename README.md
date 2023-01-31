# Shared MaaS Global Type Definitions

This repository contains MaaS Global shared type definitions.

## Index

The code is divided into several independent npm packages.

* [maas-schemas](maas-schemas) contains schemas, type definitions, and related utilities
* [maasglobal-json-schema-validator](maasglobal-json-schema-validator) contains our ajv validator configuration
* [maasglobal-schema-generator-ajv](maasglobal-schema-generator-ajv) contains build utils for ensuring ajv compatibility
* [maasglobal-schema-generator-io-ts](maasglobal-schema-generator-io-ts) contains build utils for generating io-ts codecs
* [maasglobal-schema-package](maasglobal-schema-package) contains general definitions for our schema package format

## Devops

The following commands should work in all packages where applicable.

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
