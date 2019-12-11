# request Schema

```
http://maasglobal.com/tsp/customer-auth/request.json
```

Request schema for initiating customer authorization for TSP

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                     |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/customer-auth/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/customer-auth/request.json`
  - [common](../../core/components/common.md) `http://maasglobal.com/core/components/common.json`
  - [units](../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [i18n](../../core/components/i18n.md) `http://maasglobal.com/core/components/i18n.json`

# request Properties

| Property                | Type     | Required     | Nullable | Defined by                                 |
| ----------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [locale](#locale)       | `string` | Optional     | No       | request (this schema)                      |
| [nonce](#nonce)         | `string` | **Required** | No       | request (this schema)                      |
| [returnUrl](#returnurl) | `string` | **Required** | No       | request (this schema)                      |
| `*`                     | any      | Additional   | Yes      | this schema _allows_ additional properties |

## locale

`locale`

- is optional
- type: `string`
- defined in this schema

### locale Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%5Ba-z%5D%7B2%2C3%7D(%3F%3A-%5Ba-zA-Z%5D%7B4%7D)%3F(%3F%3A-%5BA-Z%5D%7B2%2C3%7D)%3F%24>)):

```regex
^[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?$
```

## nonce

Encoded Query Params

`nonce`

- is **required**
- type: `string`
- defined in this schema

### nonce Type

`string`

- minimum length: 1 characters
- maximum length: 8192 characters

## returnUrl

URL where client is returned after authorization flow is completed.

`returnUrl`

- is **required**
- type: `string`
- defined in this schema

### returnUrl Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```
