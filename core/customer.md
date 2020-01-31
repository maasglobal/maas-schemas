# customer Schema

```
http://maasglobal.com/core/customer.json
```

MaaS customer schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/customer.json](customer.json) |

## Schema Hierarchy

- customer `http://maasglobal.com/core/customer.json`
  - [units](components/units.md) `http://maasglobal.com/core/components/units.json`
  - [common](components/common.md) `http://maasglobal.com/core/components/common.json`
  - [address](components/address.md) `http://maasglobal.com/core/components/address.json`
  - [i18n](components/i18n.md) `http://maasglobal.com/core/components/i18n.json`

## customer Example

```json
{
  "identityId": "eu-west-1:4828507e-683f-41bf-9d87-689808fbf958",
  "id": 1234,
  "favoriteLocations": [],
  "phone": "+358407654321",
  "email": "bob.customer@example.com",
  "firstName": "Bob",
  "lastName": "Customer",
  "created": 1553687004207,
  "modified": 1553688004207,
  "paymentMethod": {
    "type": "unknown",
    "valid": false
  },
  "subscriptionInstance": {
    "id": 10,
    "name": "Whim to Go",
    "plan": {
      "id": "fi-whim-payg_v2"
    },
    "addons": {
      "0": "eur-whim-rollover-100_v1",
      "1": "fi-whim-car"
    },
    "region": {
      "id": "fi-helsinki",
      "name": "Helsinki Region",
      "active": true,
      "hidden": false,
      "created": "2019-03-27T14:00:00.12345+00:00",
      "zipCode": "00100",
      "currency": "EUR",
      "location": {
        "lat": 60.1699,
        "lon": 24.9384
      },
      "geometryId": 2,
      "countryCode": "FI",
      "countryDefault": true
    },
    "coupons": [],
    "topUpId": "fi-whim-top-up",
    "wmpGrant": 0,
    "pointCost": 0.01,
    "description": "Pay for each trip as you go"
  },
  "balances": {
    "WMP": {
      "currency": "WMP",
      "amount": 1234,
      "type": "charge"
    },
    "cx-test-token_v2": {
      "currency": "TOKEN",
      "tokenId": "cx-test-token_v2",
      "amount": 1,
      "type": "charge"
    }
  },
  "regionId": "fi-helsinki",
  "region": {
    "id": "fi-helsinki",
    "name": "Helsinki Region",
    "countryCode": "FI",
    "countryDefault": true,
    "zipCode": "00100",
    "location": {
      "lat": 60.1699,
      "lon": 24.9384
    },
    "active": true,
    "hidden": false,
    "geometryId": 2,
    "created": 1553687004207,
    "modified": 0,
    "currency": "EUR"
  }
}
```

# customer Properties

| Property                          | Type     | Required | Nullable | Defined by             |
| --------------------------------- | -------- | -------- | -------- | ---------------------- |
| [address](#address)               | `string` | Optional | No       | customer (this schema) |
| [appInstanceId](#appinstanceid)   | `string` | Optional | No       | customer (this schema) |
| [authToken](#authtoken)           | `string` | Optional | No       | customer (this schema) |
| [balances](#balances)             | `object` | Optional | No       | customer (this schema) |
| [city](#city)                     | `string` | Optional | No       | customer (this schema) |
| [clientId](#clientid)             | `enum`   | Optional | No       | customer (this schema) |
| [country](#country)               | `string` | Optional | No       | customer (this schema) |
| [dob](#dob)                       | complex  | Optional | No       | customer (this schema) |
| [email](#email)                   | `string` | Optional | No       | customer (this schema) |
| [firstName](#firstname)           | `string` | Optional | No       | customer (this schema) |
| [identityId](#identityid)         | complex  | Optional | No       | customer (this schema) |
| [lastName](#lastname)             | `string` | Optional | No       | customer (this schema) |
| [locale](#locale)                 | `string` | Optional | No       | customer (this schema) |
| [opaqueId](#opaqueid)             | `string` | Optional | No       | customer (this schema) |
| [phone](#phone)                   | `string` | Optional | No       | customer (this schema) |
| [ssid](#ssid)                     | complex  | Optional | No       | customer (this schema) |
| [subscriberType](#subscribertype) | `string` | Optional | No       | customer (this schema) |
| [zipCode](#zipcode)               | `string` | Optional | No       | customer (this schema) |

## address

Street address (and optional number), http://www.bitboost.com/ref/international-address-formats.html

`address`

- is optional
- type: `string`
- defined in this schema

### address Type

`string`

- minimum length: 2 characters

## appInstanceId

An id specific to a user device

`appInstanceId`

- is optional
- type: `string`
- defined in this schema

### appInstanceId Type

`string`

- minimum length: 6 characters

## authToken

Authentication Token

`authToken`

- is optional
- type: `string`
- defined in this schema

### authToken Type

`string`

- minimum length: 1 characters
- maximum length: 8192 characters

## balances

`balances`

- is optional
- type: `object`
- defined in this schema

### balances Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `WMP`    | object | **Required** |

#### WMP

`WMP`

- is **required**
- type: `object`

##### WMP Type

`object` with following properties:

| Property   | Type    | Required     |
| ---------- | ------- | ------------ |
| `amount`   | integer | **Required** |
| `currency` |         | **Required** |

#### amount

`amount`

- is **required**
- type: `integer`

##### amount Type

`integer`

- minimum value: `0`

#### currency

`currency`

- is **required**
- type: `const`

The value of this property **must** be equal to:

```json
"WMP"
```

## city

Alphabetic city name

`city`

- is optional
- type: `string`
- defined in this schema

### city Type

`string`

- minimum length: 1 characters

## clientId

An id indicating the source of the client

`clientId`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#clientid-known-values).

### clientId Known Values

| Value    | Description |
| -------- | ----------- |
| `whim`   |             |
| `wechat` |             |

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

## opaqueId

Typically the hash of the identityId

`opaqueId`

- is optional
- type: `string`
- defined in this schema

### opaqueId Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5B0-9abcdefABCDEF%5D%2B%24)):

```regex
^[0-9abcdefABCDEF]+$
```

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
