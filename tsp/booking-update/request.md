# request Schema

```
http://maasglobal.com/tsp/bookings-update/request.json
```

Request schema for update a state of a specific booking with a TSP ID from a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/booking-update/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/bookings-update/request.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`
  - [configurator](../../core/components/configurator.md) `http://maasglobal.com/core/components/configurator.json`
  - [booking-meta](../../core/booking-meta.md) `http://maasglobal.com/core/booking-meta.json`
  - [customerSelection](../../core/components/customerSelection.md)
    `http://maasglobal.com/core/components/customerSelection.json`

# request Properties

| Property                                | Type              | Required     | Nullable | Defined by                                 |
| --------------------------------------- | ----------------- | ------------ | -------- | ------------------------------------------ |
| [configurator](#configurator)           | configurator      | Optional     | No       | request (this schema)                      |
| [customerSelection](#customerselection) | customerSelection | Optional     | No       | request (this schema)                      |
| [meta](#meta)                           | booking-meta      | Optional     | No       | request (this schema)                      |
| [state](#state)                         | `enum`            | Optional     | No       | request (this schema)                      |
| [terms](#terms)                         | terms             | Optional     | No       | request (this schema)                      |
| [tspId](#tspid)                         | `string`          | **Required** | No       | request (this schema)                      |
| `*`                                     | any               | Additional   | Yes      | this schema _allows_ additional properties |

## configurator

`configurator`

- is optional
- type: configurator
- defined in this schema

### configurator Type

- [configurator](../../core/components/configurator.md) – `http://maasglobal.com/core/components/configurator.json`

## customerSelection

`customerSelection`

- is optional
- type: customerSelection
- defined in this schema

### customerSelection Type

- [customerSelection](../../core/components/customerSelection.md) –
  `http://maasglobal.com/core/components/customerSelection.json`

## meta

`meta`

- is optional
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](../../core/booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

## state

`state`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#state-known-values).

### state Known Values

| Value       | Description |
| ----------- | ----------- |
| `RESERVED`  |             |
| `ACTIVATED` |             |
| `ON_HOLD`   |             |
| `EXPIRED`   |             |

## terms

`terms`

- is optional
- type: terms
- defined in this schema

### terms Type

- [terms](booking.md) – `http://maasglobal.com/core/components/terms.json`

## tspId

`tspId`

- is **required**
- type: `string`
- defined in this schema

### tspId Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters
