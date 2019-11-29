# Shared MaaS Global Type Definitions

This repository contains source code for MaaS Global admin user interface Maui.
Maui is mainly used by customer care for resolving problems of Whim customer.

## Index

The code is divided into several independent npm packages.

* [maas-schemas](maas-schemas) contains language independent JSON Schema type definitions
* [maas-schemas-ts](maas-schemas-ts) contains corresponding TypeScript types and validators


## Documentation

Markdown and HTML documentation can be generated from JSON Schemas. Refer to [maas-schemas](maas-schemas)  for more information.

## Automatic Conversion

The maas-schemas-ts package is generated automatically from the maas-schemas package.
Travis won't accept any changes to maas-schemas unless you run the converter.
You can run the converter as follows.

```bash
yarn --cwd maas-schemas-ts              # install dependencies
yarn --cwd maas-schemas-ts convert-all  # run the converter
```

## Devops

The following commands should work in all packages where applicable.

```bash
yarn                              # install dependencies
yarn ci                           # perform a local CI test run
```
