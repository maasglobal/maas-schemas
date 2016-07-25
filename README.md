# MaaS-schemas submodule

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

### Test

Run `npm test` to test with jsonhint and mocha + chai

> Schema deref test

> Validation function test ( with bookings-create schemas )

### Writing schemas

```
# Install the dependencies
$ npm install

# Watch for changes and run tests & validation automatically
$ npm run watch
```

### Notes

Atom plugin `atom-json-schema` have a good support for JSON schemas
https://github.com/OmniSharp/atom-json-schema
