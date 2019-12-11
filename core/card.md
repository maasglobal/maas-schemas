# card Schema

```
http://maasglobal.com/core/card.json
```

MaaS region schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/card.json](card.json) |

## Schema Hierarchy

- card `http://maasglobal.com/core/card.json`
  - [address](components/address.md) `http://maasglobal.com/core/components/address.json`

# card Properties

| Property                          | Type     | Required | Nullable | Defined by         |
| --------------------------------- | -------- | -------- | -------- | ------------------ |
| [billingCity](#billingcity)       | `string` | Optional | No       | card (this schema) |
| [billingCountry](#billingcountry) | `string` | Optional | No       | card (this schema) |
| [billingZip](#billingzip)         | `string` | Optional | No       | card (this schema) |
| [expiryMonth](#expirymonth)       | `number` | Optional | No       | card (this schema) |
| [expiryYear](#expiryyear)         | `number` | Optional | No       | card (this schema) |
| [fundingType](#fundingtype)       | `enum`   | Optional | No       | card (this schema) |
| [issuer](#issuer)                 | `string` | Optional | No       | card (this schema) |
| [maskedNumber](#maskednumber)     | `string` | Optional | No       | card (this schema) |

## billingCity

Alphabetic city name

`billingCity`

- is optional
- type: `string`
- defined in this schema

### billingCity Type

`string`

- minimum length: 1 characters

## billingCountry

ISO 3166-1 alpha-2 country code, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

`billingCountry`

- is optional
- type: `string`
- defined in this schema

### billingCountry Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%2C2%7D%24)):

```regex
^[A-Z]{2,2}$
```

## billingZip

Numeric zip code, see https://en.wikipedia.org/wiki/Postal_code

`billingZip`

- is optional
- type: `string`
- defined in this schema

### billingZip Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## expiryMonth

`expiryMonth`

- is optional
- type: `number`
- defined in this schema

### expiryMonth Type

`number`

- minimum value: `1`
- maximum value: `12`

## expiryYear

`expiryYear`

- is optional
- type: `number`
- defined in this schema

### expiryYear Type

`number`

- minimum value: `2000`

## fundingType

`fundingType`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#fundingtype-known-values).

### fundingType Known Values

| Value            | Description |
| ---------------- | ----------- |
| `credit`         |             |
| `debit`          |             |
| `prepaid`        |             |
| `not_known`      |             |
| `not_applicable` |             |

## issuer

`issuer`

- is optional
- type: `string`
- defined in this schema

### issuer Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

## maskedNumber

`maskedNumber`

- is optional
- type: `string`
- defined in this schema

### maskedNumber Type

`string`

- minimum length: 4 characters
- maximum length: 255 characters
