# MaaS Schemas TypeScript Support

This repostory contains [io-ts](https://github.com/gcanti/io-ts) validators that match the [JSON Schema](https://json-schema.org/) definitions from the [maas-schemas](https://github.com/maasglobal/maas-schemas) package. The validators work with any JavaScript compatible language. However, the main benefit of io-ts validators is their compatibility with TypeScript's static type system.

Beware! The validators defined in this package are a bit looser than the corresponding JSON schema definitions. The definitions in this package may also be incomplete or out of date because of the manual work involved. 

## Quick and Dirty

The fastest way to integrate io-ts validators into an existing code base is to
use the convenience library
[io-ts-promise](https://github.com/aeirola/io-ts-promise).
You can do it as follows.

```javascript
import * as tPromise from 'io-ts-promise';
import Booking from 'maas-schemas-ts/lib/core/booking';

function validate(json: unknown): Promise<Booking> {
  return tPromise.decode(Booking, json);
}
```

## Clean and Functional

If you are comfortable with using [fp-ts](https://github.com/gcanti/fp-ts) you
can just call the decode method of the validator directly and use
[Either](https://gcanti.github.io/fp-ts/modules/Either.ts.html) operations.
This is both synchronous and lets you preserve types of the error information.

```typescript
import { ValidationError } from 'io-ts';
import { Either } from 'fp-ts/lib/Either';
import Booking from 'maas-schemas-ts/lib/core/booking';

function validate(json: unknown): Either<Array<ValidationError>, Booking> {
  return Booking.decode(json);
}
```

## Custom Integration

If you do not use fp-ts and aren't satisfied with the Promise based solution
you can use fp-ts `Either._fold` to terminate the Either type and replace it
with whatever you like as follows.

```typescript
import { ValidationError } from 'io-ts';
import { failure } from 'io-ts/lib/PathReporter'
import { Either } from 'fp-ts/lib/Either';
import * as Either_ from 'fp-ts/lib/Either';
import Booking from 'maas-schemas-ts/lib/core/booking';

interface YourBooking {
  type: 'booking',
  booking: Booking,
}
interface YourError {
  type: 'error',
  error: Array<string>
}
type YourType = YourBooking|YourError

function validate(json: unknown): YourType {
  return Either_.fold(
    (errors: Array<ValidationError>): YourType => ({
      type: 'error',
      error: failure(errors),
    }),
    (booking: Booking): YourType => ({
      type: 'booking',
      booking,
    }),
  )(Booking.decode(json));
}
```
