# provider Schema

```
http://maasglobal.com/maas-backend/products/provider.json
```

MaaS product provider schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                           |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/products/provider.json](provider.json) |

## Schema Hierarchy

- provider `http://maasglobal.com/maas-backend/products/provider.json`
  - [common](../../core/components/common.md) `http://maasglobal.com/core/components/common.json`

# provider Properties

| Property                                              | Type                  | Required     | Nullable | Defined by             |
| ----------------------------------------------------- | --------------------- | ------------ | -------- | ---------------------- |
| [agencyId](#agencyid)                                 | `string`              | **Required** | No       | provider (this schema) |
| [branding](#branding)                                 | `object`              | **Required** | No       | provider (this schema) |
| [extra](#extra)                                       | `object`              | Optional     | No       | provider (this schema) |
| [features](#features)                                 | `object`              | **Required** | No       | provider (this schema) |
| [groupId](#groupid)                                   | `string`              | **Required** | No       | provider (this schema) |
| [hidden](#hidden)                                     | `boolean`             | **Required** | No       | provider (this schema) |
| [name](#name)                                         | `string`              | **Required** | No       | provider (this schema) |
| [optionalParameters](#optionalparameters)             | `object[]`            | **Required** | No       | provider (this schema) |
| [personalDataCreateAllow](#personaldatacreateallow)   | personalDataAllowItem | **Required** | No       | provider (this schema) |
| [personalDataOptionsAllow](#personaldataoptionsallow) | personalDataAllowItem | **Required** | No       | provider (this schema) |

## agencyId

`agencyId`

- is **required**
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## branding

`branding`

- is **required**
- type: `object`
- defined in this schema

### branding Type

`object` with following properties:

| Property         | Type   | Required |
| ---------------- | ------ | -------- |
| `icon`           | string | Optional |
| `logoFullColor`  | string | Optional |
| `logoSolidColor` | string | Optional |
| `primaryColor`   | string | Optional |
| `secondaryColor` | string | Optional |

#### icon

Icon shown in whim wheel, url to 240x240 png

`icon`

- is optional
- type: url

##### icon Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```

#### logoFullColor

Icon that retains the providers brand identity, url to ???x105 png

`logoFullColor`

- is optional
- type: url

##### logoFullColor Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```

#### logoSolidColor

Icon that can be shown against dark or light background, url to ???x105 png

`logoSolidColor`

- is optional
- type: url

##### logoSolidColor Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```

#### primaryColor

Primary brand color, used in backgrounds etc.

`primaryColor`

- is optional
- type: `string`

##### primaryColor Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%23(%3F%3A%5B0-9A-Fa-f%5D%7B3%7D)%7B1%2C2%7D%24>)):

```regex
^#(?:[0-9A-Fa-f]{3}){1,2}$
```

#### secondaryColor

Secondary brand color, used in accent parts of the app.

`secondaryColor`

- is optional
- type: `string`

##### secondaryColor Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%23(%3F%3A%5B0-9A-Fa-f%5D%7B3%7D)%7B1%2C2%7D%24>)):

```regex
^#(?:[0-9A-Fa-f]{3}){1,2}$
```

## extra

`extra`

- is optional
- type: `object`
- defined in this schema

### extra Type

`object` with following properties:

| Property     | Type   | Required |
| ------------ | ------ | -------- |
| `prebooking` | object | Optional |
| `radius`     | object | Optional |

#### prebooking

`prebooking`

- is optional
- type: `object`

##### prebooking Type

`object` with following properties:

| Property                  | Type    | Required     |
| ------------------------- | ------- | ------------ |
| `isSupported`             | boolean | **Required** |
| `maxIntervalUntilBooking` | number  | **Required** |
| `minIntervalUntilBooking` | number  | **Required** |

#### isSupported

Is pre-booking supported

`isSupported`

- is **required**
- type: `boolean`

##### isSupported Type

`boolean`

#### maxIntervalUntilBooking

Maximum amount of milliseconds before the taxi can be prebooked in the future

`maxIntervalUntilBooking`

- is **required**
- type: `number`

##### maxIntervalUntilBooking Type

`number`

#### minIntervalUntilBooking

Minimum amount of milliseconds before the taxi can be prebooked in the future

`minIntervalUntilBooking`

- is **required**
- type: `number`

##### minIntervalUntilBooking Type

`number`

#### radius

`radius`

- is optional
- type: `object`

##### radius Type

`object` with following properties:

| Property            | Type    | Required     |
| ------------------- | ------- | ------------ |
| `description`       | string  | Optional     |
| `fixedFareAmount`   | number  | **Required** |
| `fixedFareCurrency` |         | **Required** |
| `maxRadiusMetres`   | integer | **Required** |

#### description

User facing description of the radius rule

`description`

- is optional
- type: `string`

##### description Type

`string`

#### fixedFareAmount

The amount of the maximum fixed fare

`fixedFareAmount`

- is **required**
- type: `number`

##### fixedFareAmount Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

#### fixedFareCurrency

`fixedFareCurrency`

- is **required**
- type: complex

##### fixedFareCurrency Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [currency](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/currency`

#### Condition 2

`string`

#### maxRadiusMetres

The maximum radius to which the maximum fixed fare applies, in metres

`maxRadiusMetres`

- is **required**
- type: `integer`

##### maxRadiusMetres Type

`integer`

- minimum value: `0`

## features

Boolean properties indicating which features are supported by the provider

`features`

- is **required**
- type: `object`
- defined in this schema

### features Type

`object` with following properties:

| Property           | Type    | Required     |
| ------------------ | ------- | ------------ |
| `stationsList`     | boolean | **Required** |
| `stationsRetrieve` | boolean | **Required** |
| `ticket`           | boolean | **Required** |

#### stationsList

`stationsList`

- is **required**
- type: `boolean`

##### stationsList Type

`boolean`

#### stationsRetrieve

`stationsRetrieve`

- is **required**
- type: `boolean`

##### stationsRetrieve Type

`boolean`

#### ticket

`ticket`

- is **required**
- type: `boolean`

##### ticket Type

`boolean`

## groupId

`groupId`

- is **required**
- type: `string`
- defined in this schema

### groupId Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## hidden

`hidden`

- is **required**
- type: `boolean`
- defined in this schema

### hidden Type

`boolean`

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## optionalParameters

`optionalParameters`

- is **required**
- type: `object[]`
- defined in this schema

### optionalParameters Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property         | Type    | Required     |
| ---------------- | ------- | ------------ |
| `id`             | string  | **Required** |
| `inputs`         | array   | **Required** |
| `name`           | string  | **Required** |
| `type`           |         | Optional     |
| `userSelectable` | boolean | Optional     |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### inputs

`inputs`

- is **required**
- type: `object[]`\* at least `1` items in the array

##### inputs Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property  | Type                  | Required     |
| --------- | --------------------- | ------------ |
| `default` | string,number,boolean | Optional     |
| `id`      | string                | **Required** |
| `name`    | string                | **Required** |
| `type`    |                       | **Required** |

#### default

`default`

- is optional
- type: multiple

##### default Type

Unknown type `string,number,boolean`.

```json
{
  "type": ["string", "number", "boolean"],
  "simpletype": "multiple"
}
```

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

#### type

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#optionalparameters-known-values).

##### type Known Values

| Value     | Description |
| --------- | ----------- |
| `string`  |             |
| `number`  |             |
| `boolean` |             |
| `station` |             |

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

#### type

`type`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#optionalparameters-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

#### userSelectable

`userSelectable`

- is optional
- type: `boolean`

##### userSelectable Type

`boolean`

## personalDataCreateAllow

`personalDataCreateAllow`

- is **required**
- type: personalDataAllowItem
- defined in this schema

### personalDataCreateAllow Type

Array type: personalDataAllowItem

All items must be of the type:

- [personalDataAllowItem](../../core/components/personalDataAllowItem.md) –
  `http://maasglobal.com/core/components/personalDataAllowItem.json`

## personalDataOptionsAllow

`personalDataOptionsAllow`

- is **required**
- type: personalDataAllowItem
- defined in this schema

### personalDataOptionsAllow Type

Array type: personalDataAllowItem

All items must be of the type:

- [personalDataAllowItem](../../core/components/personalDataAllowItem.md) –
  `http://maasglobal.com/core/components/personalDataAllowItem.json`
