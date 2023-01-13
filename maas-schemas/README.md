# MaaS-schemas submodule

[![Build Status](https://travis-ci.com/maasglobal/maas-schemas.svg?token=EzGctxgsjK7P9ky3oz1p&branch=master)](https://travis-ci.com/maasglobal/maas-schemas)

This repository contains the JSON schemas used by MaaS.

## Features

- Newest JSON schemas spec + AJV
- Out of the box validator

## Documentation

To generate documentation from JSON Schemas, execute:

```bash
yarn build
yarn docs
```

After that, documentation will be available in Markdown format in docs/ folder
and in HTML format in docs/html folder.

## JavaScript API

Validate an object by first resolving the corresponding schema by schemaId
NOTE: It is recommended to use schema $id instead of raw schema object

```javascript
import * as mjsv from 'maasglobal-json-schema-validator';
import registry from 'maas-schemas/registry';

const validator = mjsv.validator([registry]);

const phone = validator.validate(
  'https://schemas.maas.global/core/components/common.json#/definitions/phone',
  '+358401234567',
);
```
