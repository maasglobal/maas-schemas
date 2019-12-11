# response Schema

```
http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json
```

Response schema for bookings-agency-products

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [maas-backend/bookings/bookings-agency-products/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json`
  - [common](../../../core/components/common.md) `http://maasglobal.com/core/components/common.json`

# response Definitions

| Property                      | Type     | Group                                                                                                     |
| ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| [description](#description)   | `string` | `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json#/definitions/product` |
| [fares](#fares)               | fare     | `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json#/definitions/product` |
| [icon](#icon)                 | url      | `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json#/definitions/product` |
| [id](#id)                     | `string` | `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json#/definitions/product` |
| [meta](#meta)                 | `object` | `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json#/definitions/product` |
| [name](#name)                 | `string` | `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json#/definitions/product` |
| [tspProductId](#tspproductid) | `string` | `http://maasglobal.com/maas-backend/bookings/bookings-agency-products/response.json#/definitions/product` |

## description

`description`

- is **required**
- type: `string`
- defined in this schema

### description Type

`string`

- minimum length: 2 characters
- maximum length: 2000 characters

## fares

`fares`

- is **required**
- type: fare
- defined in this schema

### fares Type

Array type: fare

All items must be of the type:

- [fare](fare.md) – `http://maasglobal.com/core/components/fare.json`

## icon

`icon`

- is **required**
- type: url
- defined in this schema

### icon Type

- [url](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/url`

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

- maximum length: 255 characters

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

## tspProductId

`tspProductId`

- is **required**
- type: `string`
- defined in this schema

### tspProductId Type

`string`

- maximum length: 255 characters

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [agencyId](#agencyid) | `string` | **Required** | No       | response (this schema) |
| [products](#products) | product  | **Required** | No       | response (this schema) |

## agencyId

`agencyId`

- is **required**
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## products

`products`

- is **required**
- type: product
- defined in this schema

### products Type

Array type: product

All items must be of the type:

- [product](response.md) – `#/definitions/product`
