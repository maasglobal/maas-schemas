# Shared MaaS Global Type Definitions

This repository contains source code for MaaS Global admin user interface Maui.
Maui is mainly used by customer care for resolving problems of Whim customer.

## Index

The code is divided into several independent npm packages.

* [maas-schemas](maas-schemas) contains language independent JSON Schema type definitions
* [maas-schemas-ts](maas-schemas-ts) contains corresponding TypeScript types and validators

## Devops

The following commands should work in all packages where applicable.

```
yarn                              # install dependencies
yarn ci                           # perform a local CI test run
```
