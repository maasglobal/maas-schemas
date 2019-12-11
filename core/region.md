# region Schema

```
http://maasglobal.com/core/region.json
```

MaaS region schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/region.json](region.json) |

## Schema Hierarchy

- region `http://maasglobal.com/core/region.json`
  - [address](components/address.md) `http://maasglobal.com/core/components/address.json`

# region Properties

| Property                      | Type     | Required     | Nullable | Defined by                                 |
| ----------------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [availability](#availability) | `object` | Optional     | No       | region (this schema)                       |
| [countryCode](#countrycode)   | `string` | **Required** | No       | region (this schema)                       |
| [id](#id)                     | `string` | **Required** | No       | region (this schema)                       |
| [name](#name)                 | `string` | Optional     | No       | region (this schema)                       |
| [zipCode](#zipcode)           | `string` | **Required** | No       | region (this schema)                       |
| `*`                           | any      | Additional   | Yes      | this schema _allows_ additional properties |

## availability

`availability`

- is optional
- type: `object`
- defined in this schema

### availability Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## countryCode

ISO 3166-1 alpha-2 country code, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

`countryCode`

- is **required**
- type: `string`
- defined in this schema

### countryCode Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%2C2%7D%24)):

```regex
^[A-Z]{2,2}$
```

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

## name

`name`

- is optional
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## zipCode

Numeric zip code, see https://en.wikipedia.org/wiki/Postal_code

`zipCode`

- is **required**
- type: `string`
- defined in this schema

### zipCode Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters
