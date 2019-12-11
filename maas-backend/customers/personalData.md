# personalData Schema

```
http://maasglobal.com/maas-backend/customers/personalData.json
```

MaaS customer personal data schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/personalData.json](personalData.json) |

## Schema Hierarchy

- personalData `http://maasglobal.com/maas-backend/customers/personalData.json`
  - [common](../../core/components/common.md) `http://maasglobal.com/core/components/common.json`
  - [address](../../core/components/address.md) `http://maasglobal.com/core/components/address.json`

# personalData Properties

| Property                            | Type     | Required | Nullable | Defined by                 |
| ----------------------------------- | -------- | -------- | -------- | -------------------------- |
| [address](#address)                 | `string` | Optional | No       | personalData (this schema) |
| [city](#city)                       | `string` | Optional | No       | personalData (this schema) |
| [country](#country)                 | `string` | Optional | No       | personalData (this schema) |
| [dob](#dob)                         | complex  | Optional | No       | personalData (this schema) |
| [email](#email)                     | `string` | Optional | No       | personalData (this schema) |
| [firstName](#firstname)             | `string` | Optional | No       | personalData (this schema) |
| [lastName](#lastname)               | `string` | Optional | No       | personalData (this schema) |
| [phone](#phone)                     | `string` | Optional | No       | personalData (this schema) |
| [profileImageUrl](#profileimageurl) | `string` | Optional | No       | personalData (this schema) |
| [ssid](#ssid)                       | complex  | Optional | No       | personalData (this schema) |
| [subscriberType](#subscribertype)   | `string` | Optional | No       | personalData (this schema) |
| [zipCode](#zipcode)                 | `string` | Optional | No       | personalData (this schema) |

## address

Street address (and optional number), http://www.bitboost.com/ref/international-address-formats.html

`address`

- is optional
- type: `string`
- defined in this schema

### address Type

`string`

- minimum length: 2 characters

## city

Alphabetic city name

`city`

- is optional
- type: `string`
- defined in this schema

### city Type

`string`

- minimum length: 1 characters

## country

ISO 3166-1 alpha-2 country code, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

`country`

- is optional
- type: `string`
- defined in this schema

### country Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%2C2%7D%24)):

```regex
^[A-Z]{2,2}$
```

## dob

The customer's date of birth or boolean indicating if the value is already in DB

`dob`

- is optional
- type: complex
- defined in this schema

### dob Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`boolean`

#### Option 2

- [isoDate](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/isoDate`

## email

Rough validation of a valid e-mail address

`email`

- is optional
- type: `string`
- defined in this schema

### email Type

`string`

- maximum length: 64 characters All instances must conform to this regular expression

```regex
^.+@.+\..+$
```

- test example:
  [joe.customer@example.com](https://regexr.com/?expression=%5E.%2B%40.%2B%5C..%2B%24&text=joe.customer%40example.com)

### email Example

```json
"joe.customer@example.com"
```

## firstName

First name of the customer (e.g. John)

`firstName`

- is optional
- type: `string`
- defined in this schema

### firstName Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## lastName

Last name of the customer (e.g. Doe)

`lastName`

- is optional
- type: `string`
- defined in this schema

### lastName Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## phone

ITU-T E.164 phone number

`phone`

- is optional
- type: `string`
- defined in this schema

### phone Type

`string`

All instances must conform to this regular expression

```regex
^\+(?:\d){6,14}\d$
```

- test example:
  [+358401234567](<https://regexr.com/?expression=%5E%5C%2B(%3F%3A%5Cd)%7B6%2C14%7D%5Cd%24&text=%2B358401234567>)

### phone Example

```json
"+358401234567"
```

## profileImageUrl

`profileImageUrl`

- is optional
- type: `string`
- defined in this schema

### profileImageUrl Type

`string`

- minimum length: 10 characters
- maximum length: 1024 characters

## ssid

Social Security ID

`ssid`

- is optional
- type: complex
- defined in this schema

### ssid Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`boolean`

#### Option 2

- [ssid](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/ssid`

## subscriberType

Subscriber Type

`subscriberType`

- is optional
- type: `string`
- defined in this schema

### subscriberType Type

`string`

## zipCode

Numeric zip code, see https://en.wikipedia.org/wiki/Postal_code

`zipCode`

- is optional
- type: `string`
- defined in this schema

### zipCode Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters
