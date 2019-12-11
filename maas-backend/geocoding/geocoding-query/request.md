# request Schema

```
http://maasglobal.com/maas-backend/geocoding/geocoding-query/request.json
```

MaaS geocoding query request schema.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/geocoding/geocoding-query/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/geocoding/geocoding-query/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Properties

| Property                  | Type     | Required     | Nullable | Defined by            |
| ------------------------- | -------- | ------------ | -------- | --------------------- |
| [headers](#headers)       | `object` | Optional     | No       | request (this schema) |
| [identityId](#identityid) | complex  | Optional     | No       | request (this schema) |
| [payload](#payload)       | `object` | **Required** | No       | request (this schema) |

## headers

`headers`

- is optional
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property            | Type | Required |
| ------------------- | ---- | -------- |
| `Accept`            |      | Optional |
| `X-Whim-User-Agent` |      | Optional |

#### Accept

`Accept`

- is optional
- type: acceptHeader

##### Accept Type

- [acceptHeader](api-common.md) – `#/definitions/acceptHeader`

#### X-Whim-User-Agent

`X-Whim-User-Agent`

- is optional
- type: userAgentHeader

##### X-Whim-User-Agent Type

- [userAgentHeader](api-common.md) – `#/definitions/userAgentHeader`

## identityId

`identityId`

- is optional
- type: complex
- defined in this schema

### identityId Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`string`

All instances must conform to this regular expression

```regex
^[aepus]{2}-[\w]{4}-\d:[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$
```

- test example:
  [eu-west-1:4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5Baepus%5D%7B2%7D-%5B%5Cw%5D%7B4%7D-%5Cd%3A%5Ba-f%5Cd%5D%7B8%7D(-%5Ba-f%5Cd%5D%7B4%7D)%7B3%7D-%5Ba-f%5Cd%5D%7B12%7D%24&text=eu-west-1%3A4828507e-683f-41bf-9d87-689808fbf958>)

#### Option 2

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### identityId Examples

```json
"eu-west-1:4828507e-683f-41bf-9d87-689808fbf958"
```

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## payload

`payload`

- is **required**
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property   | Type    | Required     | Default   |
| ---------- | ------- | ------------ | --------- |
| `count`    | integer | Optional     | `5`       |
| `distance` | number  | Optional     |           |
| `lat`      | number  | **Required** |           |
| `locale`   | string  | Optional     | `"fi-FI"` |
| `lon`      | number  | **Required** |           |
| `name`     | string  | **Required** |           |

#### count

`count`

- is optional
- type: `integer`
- default: `5`

##### count Type

`integer`

- minimum value: `1`
- maximum value: `100`

#### distance

Distance in meters

`distance`

- is optional
- type: distance

##### distance Type

`number`

- minimum value: `0`
- maximum value: `40075000`
- must be a multiple of `1`

#### lat

No-numeric precision version of MaaS core latitude

`lat`

- is **required**
- type: relaxedLatitude

##### lat Type

`number`

- minimum value: `-90`
- maximum value: `90`

#### locale

`locale`

- is optional
- type: locale
- default: `"fi-FI"`

##### locale Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%5Ba-z%5D%7B2%2C3%7D(%3F%3A-%5Ba-zA-Z%5D%7B4%7D)%3F(%3F%3A-%5BA-Z%5D%7B2%2C3%7D)%3F%24>)):

```regex
^[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?$
```

#### lon

No-numeric precision version of MaaS core longitude

`lon`

- is **required**
- type: relaxedLongitude

##### lon Type

`number`

- minimum value: `-180`
- maximum value: `180`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- minimum length: 2 characters
- maximum length: 128 characters
