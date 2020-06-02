# request Schema

```
http://maasglobal.com/maas-backend/customers/personal-documents/initiate/request.json
```

Initiate customer KYC process

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/personal-documents/initiate/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/customers/personal-documents/initiate/request.json`
  - [units](../../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [api-common](../../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Properties

| Property                  | Type     | Required     | Nullable | Defined by            |
| ------------------------- | -------- | ------------ | -------- | --------------------- |
| [headers](#headers)       | `object` | **Required** | No       | request (this schema) |
| [identityId](#identityid) | complex  | **Required** | No       | request (this schema) |
| [payload](#payload)       | `object` | **Required** | No       | request (this schema) |

## headers

`headers`

- is **required**
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

- is **required**
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

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `location` | string | **Required** |
| `type`     | string | **Required** |

#### location

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`location`

- is **required**
- type: shortLocationString

##### location Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

#### type

`type`

- is **required**
- type: documentType

##### type Type

`string`
