# MaaS-schemas submodule
[![Build Status](https://travis-ci.com/maasglobal/maas-schemas.svg?token=EzGctxgsjK7P9ky3oz1p&branch=master)](https://travis-ci.com/maasglobal/maas-schemas)

### API

```javascript
/**
 *	Validate an object using schema retrieved from input path
 *	@param {String} path - path to the requested schema relative to root
 *	@param {Object} object - input testing subject
 */
function validate(path, object)
```

```javascript
/**
 * Deref json schema
 * @param {object} schema
 */
function derefSchema(schema)
```

```javascript
/**
 * Get JSON schema located with input path
 * @param {String} path - path to the requested schema relative to root
 */
function resolveSchemaFromPath(path)
```

### Example usage

```javascript
'use strict';
const expect = require('chai').expect;
const path = require('path');
const schemaUtils = require(path.resolve('./schemas/index.js'));

describe('Schema validation example', () => {
  const schemaId = 'maas-backend:bookings-create-request';
  const jsonObj = {
    options: [{
      leg: {},
      invalid: true,
    }],
  };

  // This will fail with an "Invalid JSON schema" error
  it('should return a valid object', done => {
    return schemaUtils.validate(schemaId, jsonObj)
      .then(validationResult => {
        // validationResult === null if the schema was valid
        expect(validationResult).to.be.null;
        done();
      })
      .catch(done);
  });
});

```

### Writing schemas

```
1) Install the dependencies
      $ npm install

2) Watch for changes and run tests & validation automatically
      $ npm run watch

3) Map the schema Id accordingly to mapping.js

4-n) Add the id to README.md for documentation
```

### Test

Run `npm test` to test with jsonhint and mocha + chai

> Schema deref test

> Validation function test ( with bookings-create schemas )

### Contains

```
1) Core schemas

- Common schema for reusing purposes

2) Maas-backend schemas

- Request schemas

- Response schemas

3) Tsp adapter schemas

- Demanded from MaaS core repo

- Formatted response to core repo

```

### Supported schema IDs list
> Description are inside `mapping.js`, Find in there using the ID

```javascript
/**
 *
 * Usage: Template check are done using regex
 *
 * Format: ${className}:${schemaId}
 * E.g: core:agency-option -> (core > agency-option)
 * E.g: maas-backend:autocomplete-query-request -> (maas-backend > autocomplete-query-request)
 */
```

##### Core

```
core:agency-option
core:aws-units
core:booking
core:customer
core:error
core:geolocation
core:iot-thing-shadow
core:itinerary
core:maas-package
core:plan
core:profile
core:transport-service-provider
core:units
```

##### Maas-backend

```
maas-backend:autocomplete-query-request/response
maas-backend:bookings-agency-options-request/response
maas-backend:bookings-create-request/response
maas-backend:bookings-list-request/response
maas-backend:bookings-retrieve-request/response
maas-backend:bookings-update-request/response
maas-backend:geocoding-query-request/response
maas-backend:geocoding-reverse-request/response
maas-backend:itinerary-create-request/response
maas-backend:itinerary-retrieve-request/response
maas-backend:itinerary-update-request/response
maas-backend:monitor-query-request/response
maas-backend:profile-active-plan-put-request/response
maas-backend:profile-active-route-request/response
maas-backend:profile-create-request/response
maas-backend:profile-devices-request/response
maas-backend:profile-edit-request/response
maas-backend:profile-favoriteLocations-add-request/response
maas-backend:profile-favoriteLocations-delete-request/response
maas-backend:profile-info-request/response
maas-backend:profile-payment-get-request/response
maas-backend:profile-payment-put-request/response
maas-backend:profile-webhook-request/response
maas-backend:digitransit-routes-request/response
maas-backend:google-autocomplete-request/response
maas-backend:google-geocoding-request/response
maas-backend:google-geocoding-reverse-request/response
maas-backend:here-geocoding-request/response
maas-backend:here-autocomplete-request/response
maas-backend:here-locations-request/response
maas-backend:here-routes-request/response
maas-backend:hsl-simulator-request/response
maas-backend:hsl-simulator-navigate-user-routes-request/response
maas-backend:matka-routes-request/response
maas-backend:tripgo-routes-request/response
maas-backend:tripgo-regions-request/response
maas-backend:twilio-send-sms-request/response
maas-backend:push-notification-apple-request/response
maas-backend:routes-query-request/response
maas-backend:tracking-active-itinerary-get-request/response
maas-backend:tracking-active-itinerary-set-request/response
maas-backend:tracking-active-leg-get-request/response
maas-backend:tracking-active-leg-set-request/response
maas-backend:tracking-active-itinerary-cancel-request/response
maas-backend:tracking-update-user-location-request/response
```

##### TSP adapter

```
tsp:booking-cancel-request/response
tsp:booking-create-request/response
tsp:booking-options-list-request/response
tsp:booking-read-by-id-request/response
tsp:booking-option
tsp:booking
tsp:request-customer
```
