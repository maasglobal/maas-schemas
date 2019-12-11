# request Schema

```
http://maasglobal.com/tsp/customer-auth-validate/request.json
```

Request schema for completing customer authorization for TSP

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/customer-auth-validate/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/customer-auth-validate/request.json`
  - [common](../../core/components/common.md) `http://maasglobal.com/core/components/common.json`

# request Properties

| Property                    | Type     | Required     | Nullable | Defined by                                 |
| --------------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [encodedData](#encodeddata) | `string` | **Required** | No       | request (this schema)                      |
| [error](#error)             | `string` | Optional     | No       | request (this schema)                      |
| `*`                         | any      | Additional   | Yes      | this schema _allows_ additional properties |

## encodedData

Encoded Query Params

`encodedData`

- is **required**
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
