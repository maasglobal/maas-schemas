# product Schema

```
http://maasglobal.com/core/product.json
```

Product in core which encapsulates at least an id, name and a tspProductId

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/product.json](product.json) |

## Schema Hierarchy

- product `http://maasglobal.com/core/product.json`
  - [common](components/common.md) `http://maasglobal.com/core/components/common.json`

# product Definitions

| Property                            | Type     | Group                                                                |
| ----------------------------------- | -------- | -------------------------------------------------------------------- |
| [minimumExtra](#minimumextra)       | fare     | `http://maasglobal.com/core/product.json#/definitions/preAuthBuffer` |
| [percentageExtra](#percentageextra) | `number` | `http://maasglobal.com/core/product.json#/definitions/preAuthBuffer` |

## minimumExtra

Minimum amount, expressed as a fare, that will be added as a safety margin to the estimated fare

`minimumExtra`

- is optional
- type: fare
- defined in this schema

### minimumExtra Type

- [fare](fare.md) – `http://maasglobal.com/core/components/fare.json`

## percentageExtra

Percentage of the fare which is added as a safety margin when pre-authorizing; e.g. if 20% is added as a safety margin,
this value would be 0.2

`percentageExtra`

- is optional
- type: `number`
- defined in this schema

### percentageExtra Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

# product Properties

| Property                            | Type      | Required     | Nullable | Defined by                                 |
| ----------------------------------- | --------- | ------------ | -------- | ------------------------------------------ |
| [agencyId](#agencyid)               | `string`  | Optional     | No       | product (this schema)                      |
| [allowFinishTrip](#allowfinishtrip) | `boolean` | Optional     | No       | product (this schema)                      |
| [description](#description)         | `string`  | Optional     | No       | product (this schema)                      |
| [icon](#icon)                       | `string`  | Optional     | No       | product (this schema)                      |
| [id](#id)                           | `string`  | **Required** | No       | product (this schema)                      |
| [name](#name)                       | `string`  | **Required** | No       | product (this schema)                      |
| [preAuthBuffer](#preauthbuffer)     | `object`  | Optional     | No       | product (this schema)                      |
| [priority](#priority)               | `integer` | Optional     | No       | product (this schema)                      |
| [tspProductId](#tspproductid)       | `string`  | **Required** | No       | product (this schema)                      |
| `*`                                 | any       | Additional   | Yes      | this schema _allows_ additional properties |

## agencyId

`agencyId`

- is optional
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## allowFinishTrip

`allowFinishTrip`

- is optional
- type: `boolean`
- defined in this schema

### allowFinishTrip Type

`boolean`

## description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## icon

`icon`

- is optional
- type: `string`
- defined in this schema

### icon Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## preAuthBuffer

`preAuthBuffer`

- is optional
- type: `object`
- defined in this schema

### preAuthBuffer Type

`object` with following properties:

| Property          | Type   | Required |
| ----------------- | ------ | -------- |
| `minimumExtra`    |        | Optional |
| `percentageExtra` | number | Optional |

#### minimumExtra

Minimum amount, expressed as a fare, that will be added as a safety margin to the estimated fare

`minimumExtra`

- is optional
- type: fare

##### minimumExtra Type

- [fare](fare.md) – `http://maasglobal.com/core/components/fare.json`

#### percentageExtra

Percentage of the fare which is added as a safety margin when pre-authorizing; e.g. if 20% is added as a safety margin,
this value would be 0.2

`percentageExtra`

- is optional
- type: `number`

##### percentageExtra Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

## priority

`priority`

- is optional
- type: `integer`
- defined in this schema

### priority Type

`integer`

- minimum value: `0`

## tspProductId

`tspProductId`

- is **required**
- type: `string`
- defined in this schema

### tspProductId Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters
