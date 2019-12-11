# configurator Schema

```
http://maasglobal.com/core/components/configurator.json
```

Configurator schema to customize a booking option

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------ |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [core/components/configurator.json](configurator.json) |

# configurator Definitions

| Property                    | Type      | Group                                                                         |
| --------------------------- | --------- | ----------------------------------------------------------------------------- |
| [choices](#choices)         | choice    | `http://maasglobal.com/core/components/configurator.json#/definitions/config` |
| [cost](#cost)               | cost      | `http://maasglobal.com/core/components/configurator.json#/definitions/choice` |
| [default](#default)         | `boolean` | `http://maasglobal.com/core/components/configurator.json#/definitions/choice` |
| [description](#description) | `string`  | `http://maasglobal.com/core/components/configurator.json#/definitions/text`   |
| [fares](#fares)             | fare      | `http://maasglobal.com/core/components/configurator.json#/definitions/choice` |
| [id](#id)                   | `string`  | `http://maasglobal.com/core/components/configurator.json#/definitions/choice` |
| [input](#input)             | `string`  | `http://maasglobal.com/core/components/configurator.json#/definitions/text`   |
| [meta](#meta)               | `object`  | `http://maasglobal.com/core/components/configurator.json#/definitions/choice` |
| [name](#name)               | `string`  | `http://maasglobal.com/core/components/configurator.json#/definitions/text`   |
| [terms](#terms)             | terms     | `http://maasglobal.com/core/components/configurator.json#/definitions/choice` |
| [type](#type)               | `enum`    | `http://maasglobal.com/core/components/configurator.json#/definitions/text`   |

## choices

Set of choices for one customization

`choices`

- is **required**
- type: choice
- defined in this schema

### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

## cost

`cost`

- is optional
- type: cost
- defined in this schema

### cost Type

- [cost](cost.md) – `http://maasglobal.com/core/components/cost.json`

## default

`default`

- is **required**
- type: `boolean`
- defined in this schema

### default Type

`boolean`

## description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## fares

`fares`

- is optional
- type: fare
- defined in this schema

### fares Type

Array type: fare

All items must be of the type:

- [fare](fare.md) – `http://maasglobal.com/core/components/fare.json`

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## input

`input`

- is optional
- type: `string`
- defined in this schema

### input Type

`string`

- maximum length: 8192 characters

## meta

`meta`

- is optional
- type: `object`
- defined in this schema

### meta Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

- maximum length: 255 characters

## terms

`terms`

- is optional
- type: terms
- defined in this schema

### terms Type

- [terms](terms.md) – `http://maasglobal.com/core/components/terms.json`

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value  | Description |
| ------ | ----------- |
| `text` |             |

# configurator Properties

| Property                                        | Type     | Required | Nullable | Defined by                 |
| ----------------------------------------------- | -------- | -------- | -------- | -------------------------- |
| [freeReturn](#freereturn)                       | `object` | Optional | No       | configurator (this schema) |
| [inboundSingle](#inboundsingle)                 | `object` | Optional | No       | configurator (this schema) |
| [openReturn](#openreturn)                       | `object` | Optional | No       | configurator (this schema) |
| [outboundSingle](#outboundsingle)               | `object` | Optional | No       | configurator (this schema) |
| [seatDirection](#seatdirection)                 | `object` | Optional | No       | configurator (this schema) |
| [seatFeatures](#seatfeatures)                   | `object` | Optional | No       | configurator (this schema) |
| [seatPosition](#seatposition)                   | `object` | Optional | No       | configurator (this schema) |
| [seatType](#seattype)                           | `object` | Optional | No       | configurator (this schema) |
| [ticketCollectionPoint](#ticketcollectionpoint) | `object` | Optional | No       | configurator (this schema) |

## freeReturn

Going as a pair with open return, providing options for clients to choose return journey for it's open return tickets

`freeReturn`

- is optional
- type: `object`
- defined in this schema

### freeReturn Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#freereturn-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## inboundSingle

Single ticket for return journey, go as a pair with outboundSingle

`inboundSingle`

- is optional
- type: `object`
- defined in this schema

### inboundSingle Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#inboundsingle-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## openReturn

Open return ticket can be used for both outward and return journeys

`openReturn`

- is optional
- type: `object`
- defined in this schema

### openReturn Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#openreturn-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## outboundSingle

Single ticket for outwardJourney

`outboundSingle`

- is optional
- type: `object`
- defined in this schema

### outboundSingle Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#outboundsingle-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## seatDirection

A customization to the booking option

`seatDirection`

- is optional
- type: `object`
- defined in this schema

### seatDirection Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#seatdirection-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## seatFeatures

A customization to the booking option

`seatFeatures`

- is optional
- type: `object`
- defined in this schema

### seatFeatures Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#seatfeatures-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## seatPosition

A customization to the booking option

`seatPosition`

- is optional
- type: `object`
- defined in this schema

### seatPosition Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#seatposition-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## seatType

A customization to the booking option

`seatType`

- is optional
- type: `object`
- defined in this schema

### seatType Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `choices`     | array  | **Required** |
| `description` | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### choices

Set of choices for one customization

`choices`

- is **required**
- type: choice

##### choices Type

Array type: choice

All items must be of the type:

- [choice](configurator.md) – `#/definitions/choice`

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

Describe the possible combination of choices user can make

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#seattype-known-values).

##### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `oneOf`        |             |
| `someOf`       |             |
| `allOf`        |             |
| `oneOrNoneOf`  |             |
| `someOrNoneOf` |             |

## ticketCollectionPoint

Generic text field to pass information from user

`ticketCollectionPoint`

- is optional
- type: `object`
- defined in this schema

### ticketCollectionPoint Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `description` | string | Optional     |
| `input`       | string | Optional     |
| `name`        | string | **Required** |
| `type`        |        | **Required** |

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### input

`input`

- is optional
- type: `string`

##### input Type

`string`

- maximum length: 8192 characters

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- maximum length: 255 characters

#### type

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#ticketcollectionpoint-known-values).

##### type Known Values

| Value  | Description |
| ------ | ----------- |
| `text` |             |
