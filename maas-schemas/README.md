# MaaS-schemas submodule

[![Build Status](https://travis-ci.com/maasglobal/maas-schemas.svg?token=EzGctxgsjK7P9ky3oz1p&branch=master)](https://travis-ci.com/maasglobal/maas-schemas)

This repository contains the JSON schemas used by MaaS.

## Features

- Ajv compatible JSON Schemas
- io-ts codecs for TypeScript

## JavaScript API

The schemas can be used together with [Ajv](https://github.com/ajv-validator/ajv) as follows.

Validate an object by first resolving the corresponding schema by schemaId
NOTE: It is recommended to use schema \$id instead of raw schema object

```javascript
import * as mjsv from 'maasglobal-json-schema-validator';
import registry from 'maas-schemas/lib/ajv/registry';

const validator = mjsv.validator([registry]);

const phone = validator.validate(
  'https://schemas.maas.global/core/components/common.json#/definitions/phone',
  '+358401234567',
);
```

## TypeScript API

The repostory also contains [io-ts](https://github.com/gcanti/io-ts) codecs that match the [JSON Schema](https://json-schema.org/) definitions. The TypeScript validators should work with any JavaScript compatible code but have the added benefit of producing an output type that match the schema as closely as possible.

### Runtime Input Validation

In this basic use example we show how to use the codecs together with the [io-ts-validator](https://github.com/maasglobal/io-ts-validator). The four alternative `decode` calls are alternative ways suiting different control flow and error handling models. The validator also contains matching `encode` calls for converting a decoded booking back to raw json.

```javascript
import { validator } from 'io-ts-validator';
import Booking from 'maas-schemas/lib/io-ts/core/booking';

validator(Booking).decodeSync(json);     // returns Booking, throws on errors
validator(Booking).decodePromise(json);  // returns Promise<Booking>, rejects on errors
validator(Booking).decodeEither(json);   // returns Either<Array<string>, Booking>
validator(Booking).decodeAsync(json, (errors, booking) => { ... });  // returns void
```

### JavaScript Type Signatures

In previous chapter we showed how to use the package for basic runtime input validation. However, the io-ts codecs defined in this package are also compatibile with static type systems. You can use [JSDoc](https://jsdoc.app/) comments to add type signatures to your existing JavaScript code. This makes it possible for an IDE to validate the types in realtime as you are typing code in your code editor.

```javascript
const { validator } = require('io-ts-validator');
const { IdentityId } = require('maas-schemas/lib/io-ts/core/components/units');
/** @typedef {import('maas-schemas/lib/io-ts/core/components/units').IdentityId} IdentityId */

/** Ignores an identity id
 *
 * @param {IdentityId} id
 * @returns {void}
 */
function ignore(id) {
  // Nothing to do
}

const raw = '916715ef-2e04-47e0-b1a5-feece4861c66';
const valid = validator(IdentityId).decodeSync(raw);

ignore(raw); // type error: string !== IdentityId
ignore(valid); // no error
```

### TypeScript Type Signatures

If you end up using static types a lot, you may wish to use the [TypeScript](https://www.typescriptlang.org/) compiler for post processing of your JavaScript code. The TypeScript compiler can check your static type signatures at compile time and also lets you create special `.ts` files with embedded type signatures. For an example of embeded type signatures, see the example below.

```typescript
import { validator } from 'io-ts-validator';
import { IdentityId } from 'maas-schemas/lib/io-ts/core/components/units';

function ignore(id: IdentityId): void {
  // Nothing to do
}

const raw = '916715ef-2e04-47e0-b1a5-feece4861c66';
const valid = validator(IdentityId).decodeSync(raw);

ignore(raw); // type error: string !== IdentityId
ignore(valid); // no error
```

## Development

### Automatic Conversion

Parts of the maas-schemas package are generated automatically.
CI won't accept any changes to maas-schemas unless you run the converter.
You can run the converter as follows.

```bash
yarn              # install dependencies
yarn convert-all  # run the converter
```

### Documentation

Markdown and HTML documentation can be generated from JSON Schemas. To generate documentation from JSON Schemas, execute:

```bash
yarn build
yarn docs
```

After that, documentation will be available in Markdown format in docs/ folder
and in HTML format in docs/html folder.
