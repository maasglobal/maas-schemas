# profile Schema

```
http://maasglobal.com/core/profile.json
```

MaaS user profiles as returned by our API

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [core/profile.json](profile.json) |

## Schema Hierarchy

- profile `http://maasglobal.com/core/profile.json`
  - [units](components/units.md) `http://maasglobal.com/core/components/units.json`
  - [common](components/common.md) `http://maasglobal.com/core/components/common.json`
  - [address](components/address.md) `http://maasglobal.com/core/components/address.json`
  - [region](region.md) `http://maasglobal.com/core/region.json`

# profile Definitions

| Property                      | Type       | Group                                                                       |
| ----------------------------- | ---------- | --------------------------------------------------------------------------- |
| [active](#active)             | `boolean`  | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [addons](#addons)             | `string[]` | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [availability](#availability) | `integer`  | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [coupons](#coupons)           | `string[]` | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [description](#description)   | `string`   | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [level](#level)               | `integer`  | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [name](#name)                 | `string`   | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [plan](#plan)                 | `object`   | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [pointCost](#pointcost)       | point-cost | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |
| [wmpGrant](#wmpgrant)         | `integer`  | `http://maasglobal.com/core/profile.json#/definitions/subscriptionInstance` |

## active

`active`

- is optional
- type: `boolean`
- defined in this schema

### active Type

`boolean`

## addons

`addons`

- is **required**
- type: `string[]`
- defined in this schema

### addons Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 255 characters

## availability

`availability`

- is optional
- type: `integer`
- defined in this schema

### availability Type

`integer`

- minimum value: `0`

## coupons

`coupons`

- is **required**
- type: `string[]`
- defined in this schema

### coupons Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 255 characters

## description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## level

`level`

- is optional
- type: `integer`
- defined in this schema

### level Type

`integer`

- minimum value: `0`

## name

`name`

- is optional
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## plan

`plan`

- is **required**
- type: `object`
- defined in this schema

### plan Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## pointCost

`pointCost`

- is **required**
- type: point-cost
- defined in this schema

### pointCost Type

- [point-cost](point-cost.md) – `http://maasglobal.com/core/components/point-cost.json`

## wmpGrant

`wmpGrant`

- is optional
- type: `integer`
- defined in this schema

### wmpGrant Type

`integer`

- minimum value: `0`

# profile Properties

| Property                                      | Type      | Required     | Nullable | Defined by            |
| --------------------------------------------- | --------- | ------------ | -------- | --------------------- |
| [balances](#balances)                         | fare      | **Required** | No       | profile (this schema) |
| [city](#city)                                 | `string`  | Optional     | No       | profile (this schema) |
| [country](#country)                           | `string`  | Optional     | No       | profile (this schema) |
| [created](#created)                           | `integer` | Optional     | No       | profile (this schema) |
| [email](#email)                               | `string`  | Optional     | No       | profile (this schema) |
| [favoriteLocations](#favoritelocations)       | place     | **Required** | No       | profile (this schema) |
| [firstName](#firstname)                       | `string`  | Optional     | No       | profile (this schema) |
| [id](#id)                                     | `integer` | Optional     | No       | profile (this schema) |
| [identityId](#identityid)                     | complex   | **Required** | No       | profile (this schema) |
| [lastName](#lastname)                         | `string`  | Optional     | No       | profile (this schema) |
| [modified](#modified)                         | `integer` | Optional     | No       | profile (this schema) |
| [paymentMethod](#paymentmethod)               | `object`  | **Required** | No       | profile (this schema) |
| [phone](#phone)                               | `string`  | **Required** | No       | profile (this schema) |
| [profileImageUrl](#profileimageurl)           | `string`  | Optional     | No       | profile (this schema) |
| [region](#region)                             | region    | Optional     | No       | profile (this schema) |
| [regionId](#regionid)                         | `string`  | Optional     | No       | profile (this schema) |
| [subscription](#subscription)                 | `object`  | Optional     | No       | profile (this schema) |
| [subscriptionInstance](#subscriptioninstance) | `object`  | **Required** | No       | profile (this schema) |
| [zipCode](#zipcode)                           | `string`  | Optional     | No       | profile (this schema) |

## balances

`balances`

- is **required**
- type: fare
- defined in this schema

### balances Type

Array type: fare

All items must be of the type:

- [fare](components/fare.md) – `http://maasglobal.com/core/components/fare.json`

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

## created

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`created`

- is optional
- type: `integer`
- defined in this schema

### created Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## email

Rough validation of a valid e-mail address, see https://davidcel.is/posts/stop-validating-email-addresses-with-regex/

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

## favoriteLocations

`favoriteLocations`

- is **required**
- type: place
- defined in this schema

### favoriteLocations Type

Array type: place

All items must be of the type:

- [place](components/place.md) – `http://maasglobal.com/core/components/place.json`

## firstName

First or last name of a customer (e.g. John)

`firstName`

- is optional
- type: `string`
- defined in this schema

### firstName Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## id

`id`

- is optional
- type: `integer`
- defined in this schema

### id Type

`integer`

- minimum value: `0`

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

## lastName

First or last name of a customer (e.g. John)

`lastName`

- is optional
- type: `string`
- defined in this schema

### lastName Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## modified

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`modified`

- is optional
- type: `integer`
- defined in this schema

### modified Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## paymentMethod

`paymentMethod`

- is **required**
- type: `object`
- defined in this schema

### paymentMethod Type

`object` with following properties:

| Property       | Type    | Required     |
| -------------- | ------- | ------------ |
| `expiry`       | integer | Optional     |
| `issuer`       | string  | Optional     |
| `maskedNumber` | string  | Optional     |
| `type`         | string  | **Required** |
| `valid`        | boolean | **Required** |

#### expiry

When this payment method expires

`expiry`

- is optional
- type: time

##### expiry Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### issuer

The card issuer, e.g. 'Visa'

`issuer`

- is optional
- type: `string`

##### issuer Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### maskedNumber

Typically the credit card number with all but the last four digits obfuscated

`maskedNumber`

- is optional
- type: `string`

##### maskedNumber Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### type

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#paymentmethod-known-values).

##### type Known Values

| Value     | Description |
| --------- | ----------- |
| `unknown` |             |
| `card`    |             |
| `stripe`  |             |

#### valid

Whether the payment method is valid and working

`valid`

- is **required**
- type: `boolean`

##### valid Type

`boolean`

## phone

ITU-T E.164 phone number, see
https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html

`phone`

- is **required**
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

- minimum length: 1 characters
- maximum length: 256 characters

## region

`region`

- is optional
- type: region
- defined in this schema

### region Type

- [region](region.md) – `http://maasglobal.com/core/region.json`

## regionId

`regionId`

- is optional
- type: `string`
- defined in this schema

### regionId Type

`string`

- minimum length: 2 characters
- maximum length: 256 characters

## subscription

TODO Delete this legacy version of subscription (replaced by subscriptionInstance)

`subscription`

- is optional
- type: `object`
- defined in this schema

### subscription Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## subscriptionInstance

`subscriptionInstance`

- is **required**
- type: `object`
- defined in this schema

### subscriptionInstance Type

`object` with following properties:

| Property       | Type    | Required     |
| -------------- | ------- | ------------ |
| `active`       | boolean | Optional     |
| `addons`       | array   | **Required** |
| `availability` | integer | Optional     |
| `coupons`      | array   | **Required** |
| `description`  | string  | Optional     |
| `id`           | integer | Optional     |
| `level`        | integer | Optional     |
| `name`         | string  | Optional     |
| `plan`         | object  | **Required** |
| `pointCost`    |         | **Required** |
| `wmpGrant`     | integer | Optional     |

#### active

`active`

- is optional
- type: `boolean`

##### active Type

`boolean`

#### addons

`addons`

- is **required**
- type: `string[]`

##### addons Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 255 characters

#### availability

`availability`

- is optional
- type: `integer`

##### availability Type

`integer`

- minimum value: `0`

#### coupons

`coupons`

- is **required**
- type: `string[]`

##### coupons Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 255 characters

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### id

`id`

- is optional
- type: `integer`

##### id Type

`integer`

- minimum value: `0`

#### level

`level`

- is optional
- type: `integer`

##### level Type

`integer`

- minimum value: `0`

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

#### plan

`plan`

- is **required**
- type: `object`

##### plan Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

#### pointCost

`pointCost`

- is **required**
- type: point-cost

##### pointCost Type

- [point-cost](point-cost.md) – `http://maasglobal.com/core/components/point-cost.json`

#### wmpGrant

`wmpGrant`

- is optional
- type: `integer`

##### wmpGrant Type

`integer`

- minimum value: `0`

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
