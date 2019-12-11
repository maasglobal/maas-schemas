# response Schema

```
http://maasglobal.com/tsp/customer-auth-validate/response.json
```

Response schema for completing customer authorization for TSP

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/customer-auth-validate/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/tsp/customer-auth-validate/response.json`
  - [common](../../core/components/common.md) `http://maasglobal.com/core/components/common.json`
  - [units](../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [error](../../core/error.md) `http://maasglobal.com/core/error.json`

# response Properties

| Property                | Type      | Required | Nullable | Defined by             |
| ----------------------- | --------- | -------- | -------- | ---------------------- |
| [authToken](#authtoken) | `string`  | Optional | No       | response (this schema) |
| [error](#error)         | error     | Optional | No       | response (this schema) |
| [nonce](#nonce)         | `string`  | Optional | No       | response (this schema) |
| [validTo](#validto)     | `integer` | Optional | No       | response (this schema) |

## authToken

Encoded Query Params

`authToken`

- is optional
- type: `string`
- defined in this schema

### authToken Type

`string`

- minimum length: 1 characters
- maximum length: 8192 characters

## error

`error`

- is optional
- type: error
- defined in this schema

### error Type

- [error](../../core/error.md) – `http://maasglobal.com/core/error.json`

## nonce

Encoded Query Params

`nonce`

- is optional
- type: `string`
- defined in this schema

### nonce Type

`string`

- minimum length: 1 characters
- maximum length: 8192 characters

## validTo

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`validTo`

- is optional
- type: `integer`
- defined in this schema

### validTo Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

**Any** following _options_ needs to be fulfilled.

#### Option 1

#### Option 2
