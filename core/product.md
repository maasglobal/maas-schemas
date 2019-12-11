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

# product Properties

| Property                            | Type      | Required     | Nullable | Defined by                                 |
| ----------------------------------- | --------- | ------------ | -------- | ------------------------------------------ |
| [agencyId](#agencyid)               | `string`  | Optional     | No       | product (this schema)                      |
| [allowFinishTrip](#allowfinishtrip) | `boolean` | Optional     | No       | product (this schema)                      |
| [description](#description)         | `string`  | Optional     | No       | product (this schema)                      |
| [icon](#icon)                       | `string`  | Optional     | No       | product (this schema)                      |
| [id](#id)                           | `string`  | **Required** | No       | product (this schema)                      |
| [name](#name)                       | `string`  | **Required** | No       | product (this schema)                      |
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
