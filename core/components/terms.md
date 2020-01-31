# terms Schema

```
http://maasglobal.com/core/components/terms.json
```

MaaS booking terms and condition for its business engine

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                               |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/components/terms.json](terms.json) |

# terms Definitions

| Property                              | Type      | Group                                                                        |
| ------------------------------------- | --------- | ---------------------------------------------------------------------------- |
| [amendable](#amendable)               | `boolean` | `http://maasglobal.com/core/components/terms.json#/definitions/amendment`    |
| [amount](#amount)                     | `number`  | `http://maasglobal.com/core/components/terms.json#/definitions/surcharge`    |
| [cancellable](#cancellable)           | `boolean` | `http://maasglobal.com/core/components/terms.json#/definitions/cancellation` |
| [coach](#coach)                       | multiple  | `http://maasglobal.com/core/components/terms.json#/definitions/seat`         |
| [cost](#cost)                         | cost      | `http://maasglobal.com/core/components/terms.json#/definitions/amendment`    |
| [currency](#currency)                 | currency  | `http://maasglobal.com/core/components/terms.json#/definitions/surcharge`    |
| [fare](#fare)                         | fare      | `http://maasglobal.com/core/components/terms.json#/definitions/amendment`    |
| [isChargedUpfront](#ischargedupfront) | `boolean` | `http://maasglobal.com/core/components/terms.json#/definitions/surcharge`    |
| [maxAmount](#maxamount)               | `number`  | `http://maasglobal.com/core/components/terms.json#/definitions/surcharge`    |
| [minAmount](#minamount)               | `number`  | `http://maasglobal.com/core/components/terms.json#/definitions/surcharge`    |
| [number](#number)                     | multiple  | `http://maasglobal.com/core/components/terms.json#/definitions/seat`         |
| [percentage](#percentage)             | `number`  | `http://maasglobal.com/core/components/terms.json#/definitions/surcharge`    |
| [refunded](#refunded)                 | `boolean` | `http://maasglobal.com/core/components/terms.json#/definitions/cancellation` |
| [route](#route)                       | `string`  | `http://maasglobal.com/core/components/terms.json#/definitions/seat`         |

## amendable

A flag indicating whether this booking can be amended

`amendable`

- is **required**
- type: `boolean`
- defined in this schema

### amendable Type

`boolean`

## amount

The amount in currency

`amount`

- is optional
- type: `number`
- defined in this schema

### amount Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

## cancellable

A flag indicating whether this booking can be cancelled in 'RESERVED' state

`cancellable`

- is **required**
- type: `boolean`
- defined in this schema

### cancellable Type

`boolean`

## coach

`coach`

- is optional
- type: multiple
- defined in this schema

### coach Type

Either one of:

- `string`
- `number`

## cost

`cost`

- is optional
- type: cost
- defined in this schema

### cost Type

- [cost](cost.md) – `http://maasglobal.com/core/components/cost.json`

## currency

`currency`

- is optional
- type: currency
- defined in this schema

### currency Type

- [currency](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/currency`

## fare

`fare`

- is optional
- type: fare
- defined in this schema

### fare Type

- [fare](fare.md) – `http://maasglobal.com/core/components/fare.json`

## isChargedUpfront

Whether this is charged upfront or during reconciliation phase

`isChargedUpfront`

- is optional
- type: `boolean`
- defined in this schema

### isChargedUpfront Type

`boolean`

## maxAmount

The maximum amount in currency

`maxAmount`

- is optional
- type: `number`
- defined in this schema

### maxAmount Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

## minAmount

The minimum amount in currency

`minAmount`

- is optional
- type: `number`
- defined in this schema

### minAmount Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

## number

`number`

- is optional
- type: multiple
- defined in this schema

### number Type

Either one of:

- `string`
- `number`

## percentage

Surcharge percentage over the original fee

`percentage`

- is optional
- type: `number`
- defined in this schema

### percentage Type

`number`

## refunded

Whether this part of the booking has been refunded

`refunded`

- is **required**
- type: `boolean`
- defined in this schema

### refunded Type

`boolean`

## route

The leg's route number that this seat info belongs

`route`

- is optional
- type: `string`
- defined in this schema

### route Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

# terms Properties

| Property                      | Type       | Required   | Nullable | Defined by                                 |
| ----------------------------- | ---------- | ---------- | -------- | ------------------------------------------ |
| [amendment](#amendment)       | `object`   | Optional   | No       | terms (this schema)                        |
| [cancellation](#cancellation) | `object`   | Optional   | No       | terms (this schema)                        |
| [fareRates](#farerates)       | `object[]` | Optional   | No       | terms (this schema)                        |
| [reconcilable](#reconcilable) | `boolean`  | Optional   | No       | terms (this schema)                        |
| [restrictions](#restrictions) | `object`   | Optional   | No       | terms (this schema)                        |
| [reusable](#reusable)         | `boolean`  | Optional   | No       | terms (this schema)                        |
| [seatings](#seatings)         | seat       | Optional   | No       | terms (this schema)                        |
| [surcharges](#surcharges)     | `object`   | Optional   | No       | terms (this schema)                        |
| [type](#type)                 | `string`   | Optional   | No       | terms (this schema)                        |
| [validity](#validity)         | `object`   | Optional   | No       | terms (this schema)                        |
| `*`                           | any        | Additional | Yes      | this schema _allows_ additional properties |

## amendment

`amendment`

- is optional
- type: `object`
- defined in this schema

### amendment Type

`object` with following properties:

| Property  | Type | Required |
| --------- | ---- | -------- |
| `outward` |      | Optional |
| `return`  |      | Optional |

#### outward

`outward`

- is optional
- type: amendment

##### outward Type

- [amendment](terms.md) – `#/definitions/amendment`

#### return

`return`

- is optional
- type: amendment

##### return Type

- [amendment](terms.md) – `#/definitions/amendment`

## cancellation

`cancellation`

- is optional
- type: `object`
- defined in this schema

### cancellation Type

`object` with following properties:

| Property                    | Type   | Required |
| --------------------------- | ------ | -------- |
| `cancellationFormActionUrl` | string | Optional |
| `outward`                   |        | Optional |
| `return`                    |        | Optional |

#### cancellationFormActionUrl

User will fill in this form to cancel their ticket should programmed cancellation does not function. Edge case support

`cancellationFormActionUrl`

- is optional
- type: url

##### cancellationFormActionUrl Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```

#### outward

`outward`

- is optional
- type: cancellation

##### outward Type

- [cancellation](terms.md) – `#/definitions/cancellation`

#### return

`return`

- is optional
- type: cancellation

##### return Type

- [cancellation](terms.md) – `#/definitions/cancellation`

## fareRates

`fareRates`

- is optional
- type: `object[]`
- defined in this schema

### fareRates Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property       | Type   | Required     |
| -------------- | ------ | ------------ |
| `amount`       | number | **Required** |
| `currency`     |        | **Required** |
| `startAt`      | number | Optional     |
| `timeInterval` | number | Optional     |
| `type`         |        | Optional     |

#### amount

`amount`

- is **required**
- type: `number`

##### amount Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

#### currency

`currency`

- is **required**
- type: currency

##### currency Type

- [currency](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/currency`

#### startAt

Amount of seconds after this fare rate should be applied to

`startAt`

- is optional
- type: `number`

##### startAt Type

`number`

- minimum value: `0`
- must be a multiple of `1`

#### timeInterval

Amount of seconds that fare rate is applied to

`timeInterval`

- is optional
- type: `number`

##### timeInterval Type

`number`

- minimum value: `1`
- must be a multiple of `1`

#### type

`type`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#farerates-known-values).

##### type Known Values

| Value                 | Description |
| --------------------- | ----------- |
| `maxRate`             |             |
| `missedReturnPenalty` |             |
| `extra`               |             |

Booking fare rate

## reconcilable

A flag indicating whether this booking will be reconciled once the trip has finished

`reconcilable`

- is optional
- type: `boolean`
- defined in this schema

### reconcilable Type

`boolean`

## restrictions

Booking restrictions

`restrictions`

- is optional
- type: `object`
- defined in this schema

### restrictions Type

`object` with following properties:

| Property               | Type    | Required |
| ---------------------- | ------- | -------- |
| `freeTicket`           | object  | Optional |
| `singleDevice`         | boolean | Optional |
| `skipRestrictionCheck` | boolean | Optional |

#### freeTicket

A JSON schema object which defines restriction rules for free ticket

`freeTicket`

- is optional
- type: `object`

##### freeTicket Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### singleDevice

A flag indicating whether this booking can be viewed in multiple devices at the same time

`singleDevice`

- is optional
- type: `boolean`

##### singleDevice Type

`boolean`

#### skipRestrictionCheck

A flag indicating whether restriction check should be run

`skipRestrictionCheck`

- is optional
- type: `boolean`

##### skipRestrictionCheck Type

`boolean`

## reusable

A flag indicating whether this booking can be reused for another trip within the validity period

`reusable`

- is optional
- type: `boolean`
- defined in this schema

### reusable Type

`boolean`

## seatings

In 1 booking for a journey, it can be valid for many of the journey's leg. Each item of seating is a seat on 1 specific
route

`seatings`

- is optional
- type: seat
- defined in this schema

### seatings Type

Array type: seat

All items must be of the type:

- [seat](terms.md) – `#/definitions/seat`

## surcharges

Surcharges that have been added to the cost/fare of the booking under certain conditions

`surcharges`

- is optional
- type: `object`
- defined in this schema

### surcharges Type

`object` with following properties:

| Property   | Type | Required |
| ---------- | ---- | -------- |
| `midnight` |      | Optional |
| `pickup`   |      | Optional |

#### midnight

Fee for booking during night time

`midnight`

- is optional
- type: surcharge

##### midnight Type

- [surcharge](terms.md) – `#/definitions/surcharge`

#### pickup

Fee for pickup, usually for TAXI bookings

`pickup`

- is optional
- type: surcharge

##### pickup Type

- [surcharge](terms.md) – `#/definitions/surcharge`

## type

A type of ticket/product that this booking is valid for - should be unique within a given region, e.g. 'Single ticket /
Lähiseutu 2'. When reusing the tickets in maas-backend, the 'type' field is checked for equality.

`type`

- is optional
- type: `string`
- defined in this schema

### type Type

`string`

- maximum length: 64 characters

## validity

Booking validity conditions

`validity`

- is optional
- type: `object`
- defined in this schema

### validity Type

`object` with following properties:

| Property          | Type    | Required     |
| ----------------- | ------- | ------------ |
| `endTime`         | integer | **Required** |
| `endTimeReturn`   | integer | Optional     |
| `startTime`       | integer | **Required** |
| `startTimeReturn` | integer | Optional     |

#### endTime

Epoch when the outbound ticket will be invalid

`endTime`

- is **required**
- type: time

##### endTime Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### endTimeReturn

Epoch when the return ticket will be invalid

`endTimeReturn`

- is optional
- type: time

##### endTimeReturn Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### startTime

Epoch when the outbound ticket will be valid

`startTime`

- is **required**
- type: time

##### startTime Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### startTimeReturn

Epoch when the return ticket will be valid

`startTimeReturn`

- is optional
- type: time

##### startTimeReturn Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`
