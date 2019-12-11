# request Schema

```
http://maasglobal.com/maas-backend/tsp-auth/validate/request.json
```

Request schema for tsp-auth validate. Leaving as much flexibility as possible to be resilient for different TSPs

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/tsp-auth/validate/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/tsp-auth/validate/request.json`
  - [common](../../../core/components/common.md) `http://maasglobal.com/core/components/common.json`

# request Properties

| Property                    | Type     | Required | Nullable | Defined by            |
| --------------------------- | -------- | -------- | -------- | --------------------- |
| [agencyId](#agencyid)       | `string` | Optional | No       | request (this schema) |
| [encodedData](#encodeddata) | `string` | Optional | No       | request (this schema) |
| [error](#error)             | `string` | Optional | No       | request (this schema) |
| [headers](#headers)         | `object` | Optional | No       | request (this schema) |
| [token](#token)             | `string` | Optional | No       | request (this schema) |

## agencyId

`agencyId`

- is optional
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## encodedData

Encoded Query Params

`encodedData`

- is optional
- type: `string`
- defined in this schema

### encodedData Type

`string`

- minimum length: 1 characters
- maximum length: 8192 characters

## error

Error key

`error`

- is optional
- type: `string`
- defined in this schema

### error Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## headers

`headers`

- is optional
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## token

Encoded Query Params

`token`

- is optional
- type: `string`
- defined in this schema

### token Type

`string`

- minimum length: 1 characters
- maximum length: 8192 characters
