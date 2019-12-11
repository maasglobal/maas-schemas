# fare Schema

```
http://maasglobal.com/core/components/fare.json
```

A fare/price as billed to the user in WMPs or in tokens

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [core/components/fare.json](fare.json) |

# fare Properties

| Property                              | Type      | Required     | Nullable | Defined by         |
| ------------------------------------- | --------- | ------------ | -------- | ------------------ |
| [amount](#amount)                     | `integer` | **Required** | Yes      | fare (this schema) |
| [currency](#currency)                 | `enum`    | **Required** | No       | fare (this schema) |
| [originalAmount](#originalamount)     | `integer` | Optional     | Yes      | fare (this schema) |
| [productionAmount](#productionamount) | `integer` | Optional     | Yes      | fare (this schema) |
| [tokenId](#tokenid)                   | `string`  | Optional     | No       | fare (this schema) |
| [type](#type)                         | `enum`    | Optional     | No       | fare (this schema) |

## amount

`amount`

- is **required**
- type: `integer`
- defined in this schema

### amount Type

`integer`, nullable

- minimum value: `0`

## currency

`currency`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#currency-known-values).

### currency Known Values

| Value   | Description |
| ------- | ----------- |
| `WMP`   |             |
| `TOKEN` |             |

## originalAmount

`originalAmount`

- is optional
- type: `integer`
- defined in this schema

### originalAmount Type

`integer`, nullable

- minimum value: `0`

## productionAmount

`productionAmount`

- is optional
- type: `integer`
- defined in this schema

### productionAmount Type

`integer`, nullable

- minimum value: `0`

## tokenId

`tokenId`

- is optional
- type: `string`
- defined in this schema

### tokenId Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%5Ba-z%5D%2B(-%5Ba-z%5D%2B)*-%5Ba-z0-9_%5D%2B%24>)):

```regex
^[a-z]+(-[a-z]+)*-[a-z0-9_]+$
```

## type

`type`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value    | Description |
| -------- | ----------- |
| `charge` |             |
| `refund` |             |
