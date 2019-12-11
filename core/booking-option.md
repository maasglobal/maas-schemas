# booking-option Schema

```
http://maasglobal.com/core/booking-option.json
```

MaaS single TSP adapter option

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/booking-option.json](booking-option.json) |

# booking-option Definitions

| Property                          | Type         | Group                                                                                 |
| --------------------------------- | ------------ | ------------------------------------------------------------------------------------- |
| [agencyId](#agencyid)             | agencyId     | `http://maasglobal.com/core/booking-option.json#/definitions/leg`                     |
| [configurator](#configurator)     | configurator | `http://maasglobal.com/core/booking-option.json#/definitions/contentWithConfigurator` |
| [cost](#cost)                     | cost         | `http://maasglobal.com/core/booking-option.json#/definitions/contentWithCost`         |
| [customer](#customer)             | customer     | `http://maasglobal.com/core/booking-option.json#/definitions/contentWithConfigurator` |
| [departureDelay](#departuredelay) | duration     | `http://maasglobal.com/core/booking-option.json#/definitions/legDelta`                |
| [endTime](#endtime)               | time         | `http://maasglobal.com/core/booking-option.json#/definitions/legDelta`                |
| [from](#from)                     | place        | `http://maasglobal.com/core/booking-option.json#/definitions/legDelta`                |
| [id](#id)                         | `string`     | `http://maasglobal.com/core/booking-option.json#/definitions/tspProduct`              |
| [leg](#leg)                       | leg          | `http://maasglobal.com/core/booking-option.json#/definitions/contentWithConfigurator` |
| [meta](#meta)                     | booking-meta | `http://maasglobal.com/core/booking-option.json#/definitions/contentWithConfigurator` |
| [mode](#mode)                     | travel-mode  | `http://maasglobal.com/core/booking-option.json#/definitions/legDelta`                |
| [startTime](#starttime)           | time         | `http://maasglobal.com/core/booking-option.json#/definitions/legDelta`                |
| [terms](#terms)                   | terms        | `http://maasglobal.com/core/booking-option.json#/definitions/contentWithConfigurator` |
| [to](#to)                         | place        | `http://maasglobal.com/core/booking-option.json#/definitions/legDelta`                |
| [tspProduct](#tspproduct)         | tspProduct   | `http://maasglobal.com/core/booking-option.json#/definitions/contentWithConfigurator` |

## agencyId

`agencyId`

- is optional
- type: agencyId
- defined in this schema

### agencyId Type

- [agencyId](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

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

- [customer](booking-option.md) – `#/definitions/customer`

## departureDelay

`departureDelay`

- is optional
- type: duration
- defined in this schema

### departureDelay Type

- [duration](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/duration`

## endTime

`endTime`

- is **required**
- type: time
- defined in this schema

### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## from

`from`

- is **required**
- type: place
- defined in this schema

### from Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

## id

Unique identifier for the product

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## leg

`leg`

- is **required**
- type: leg
- defined in this schema

### leg Type

- [leg](booking-option.md) – `#/definitions/leg`

## meta

`meta`

- is **required**
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

## mode

`mode`

- is **required**
- type: travel-mode
- defined in this schema

### mode Type

- [travel-mode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

## startTime

`startTime`

- is **required**
- type: time
- defined in this schema

### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## terms

`terms`

- is **required**
- type: terms
- defined in this schema

### terms Type

- [terms](terms.md) – `http://maasglobal.com/core/components/terms.json`

## to

`to`

- is **required**
- type: place
- defined in this schema

### to Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

## tspProduct

`tspProduct`

- is **required**
- type: tspProduct
- defined in this schema

### tspProduct Type

- [tspProduct](booking-option.md) – `#/definitions/tspProduct`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [contentWithCost](booking-option.md) – `#/definitions/contentWithCost`

#### Condition 2

- [contentWithConfigurator](booking-option.md) – `#/definitions/contentWithConfigurator`
