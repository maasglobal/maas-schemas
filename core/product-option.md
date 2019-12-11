# product-option Schema

```
http://maasglobal.com/core/product-option.json
```

Product option for an itinerary, is either an existing booking pointer or a new booking instruction

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/product-option.json](product-option.json) |

# product-option Definitions

| Property                      | Type         | Group                                                                          |
| ----------------------------- | ------------ | ------------------------------------------------------------------------------ |
| [bookingId](#bookingid)       | uuid         | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |
| [configurator](#configurator) | configurator | `http://maasglobal.com/core/product-option.json#/definitions/withConfigurator` |
| [cost](#cost)                 | cost         | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |
| [customer](#customer)         | customer     | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |
| [fares](#fares)               | fare         | `http://maasglobal.com/core/product-option.json#/definitions/withFares`        |
| [identityId](#identityid)     | identityId   | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |
| [meta](#meta)                 | booking-meta | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |
| [product](#product)           | product      | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |
| [ref](#ref)                   | `integer`    | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |
| [terms](#terms)               | terms        | `http://maasglobal.com/core/product-option.json#/definitions/withCost`         |

## bookingId

`bookingId`

- is optional
- type: uuid
- defined in this schema

### bookingId Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## configurator

`configurator`

- is **required**
- type: configurator
- defined in this schema

### configurator Type

- [configurator](configurator.md) – `http://maasglobal.com/core/components/configurator.json`

## cost

`cost`

- is **required**
- type: cost
- defined in this schema

### cost Type

- [cost](cost.md) – `http://maasglobal.com/core/components/cost.json`

## customer

`customer`

- is optional
- type: customer
- defined in this schema

### customer Type

- [customer](booking-option.md) – `http://maasglobal.com/core/booking-option.json#/definitions/customer`

## fares

`fares`

- is **required**
- type: fare
- defined in this schema

### fares Type

Array type: fare

All items must be of the type:

- [fare](fare.md) – `http://maasglobal.com/core/components/fare.json`

## identityId

`identityId`

- is optional
- type: identityId
- defined in this schema

### identityId Type

- [identityId](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

## meta

`meta`

- is **required**
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

## product

`product`

- is optional
- type: product
- defined in this schema

### product Type

- [product](product.md) – `http://maasglobal.com/core/product.json`

## ref

`ref`

- is **required**
- type: `integer`
- defined in this schema

### ref Type

`integer`

- minimum value: `0`

## terms

`terms`

- is **required**
- type: terms
- defined in this schema

### terms Type

- [terms](terms.md) – `http://maasglobal.com/core/components/terms.json`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [withConfigurator](product-option.md) – `#/definitions/withConfigurator`

#### Condition 2

- [withFares](product-option.md) – `#/definitions/withFares`

#### Condition 3

- [withCost](product-option.md) – `#/definitions/withCost`
