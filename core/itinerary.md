# itinerary Schema

```
http://maasglobal.com/core/itinerary.json
```

OpenTripPlanner itinerary, augmented with leg bookings per leg

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                            |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [core/itinerary.json](itinerary.json) |

## Schema Hierarchy

- itinerary `http://maasglobal.com/core/itinerary.json`
  - [units](components/units.md) `http://maasglobal.com/core/components/units.json`
  - [common](components/common.md) `http://maasglobal.com/core/components/common.json`
  - [state](components/state.md) `http://maasglobal.com/core/components/state.json`

# itinerary Properties

| Property                          | Type           | Required     | Nullable | Defined by              |
| --------------------------------- | -------------- | ------------ | -------- | ----------------------- |
| [bookings](#bookings)             | booking        | Optional     | No       | itinerary (this schema) |
| [co2](#co2)                       | `number`       | Optional     | No       | itinerary (this schema) |
| [endTime](#endtime)               | `integer`      | **Required** | No       | itinerary (this schema) |
| [fares](#fares)                   | fare           | Optional     | No       | itinerary (this schema) |
| [id](#id)                         | id             | Optional     | No       | itinerary (this schema) |
| [identityId](#identityid)         | complex        | Optional     | No       | itinerary (this schema) |
| [isOvertaken](#isovertaken)       | `boolean`      | Optional     | No       | itinerary (this schema) |
| [legs](#legs)                     | leg            | **Required** | No       | itinerary (this schema) |
| [productOptions](#productoptions) | product-option | Optional     | No       | itinerary (this schema) |
| [signature](#signature)           | `string`       | Optional     | No       | itinerary (this schema) |
| [sourcePlanId](#sourceplanid)     | `string`       | Optional     | No       | itinerary (this schema) |
| [startTime](#starttime)           | `integer`      | **Required** | No       | itinerary (this schema) |
| [state](#state)                   | `enum`         | Optional     | No       | itinerary (this schema) |
| [type](#type)                     | `enum`         | Optional     | No       | itinerary (this schema) |

## bookings

`bookings`

- is optional
- type: booking
- defined in this schema

### bookings Type

Array type: booking

All items must be of the type:

- [booking](booking.md) – `http://maasglobal.com/core/booking.json`

## co2

Grams of CO2 as a byproduct by the trip

`co2`

- is optional
- type: `number`
- defined in this schema

### co2 Type

`number`

- minimum value: `0`

## endTime

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`endTime`

- is **required**
- type: `integer`
- defined in this schema

### endTime Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## fares

`fares`

- is optional
- type: fare
- defined in this schema

### fares Type

Array type: fare

All items must be of the type:

- [fare](components/fare.md) – `http://maasglobal.com/core/components/fare.json`

## id

`id`

- is optional
- type: id
- defined in this schema

### id Type

- [id](itinerary.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## identityId

`identityId`

- is optional
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

## isOvertaken

`isOvertaken`

- is optional
- type: `boolean`
- defined in this schema

### isOvertaken Type

`boolean`

## legs

`legs`

- is **required**
- type: leg
- at least `0` items in the array
- defined in this schema

### legs Type

Array type: leg

All items must be of the type:

- [leg](leg.md) – `http://maasglobal.com/core/leg.json`

## productOptions

`productOptions`

- is optional
- type: product-option
- at least `0` items in the array
- defined in this schema

### productOptions Type

Array type: product-option

All items must be of the type:

- [product-option](product-option.md) – `http://maasglobal.com/core/product-option.json`

## signature

Signature of a signed object

`signature`

- is optional
- type: `string`
- defined in this schema

### signature Type

`string`

- minimum length: 1 characters
- maximum length: 1024 characters

## sourcePlanId

Universally unique identifier, see https://en.wikipedia.org/wiki/Universally_unique_identifier

`sourcePlanId`

- is optional
- type: `string`
- defined in this schema

### sourcePlanId Type

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### sourcePlanId Example

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## startTime

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`startTime`

- is **required**
- type: `integer`
- defined in this schema

### startTime Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## state

The life-cycle state of an itinerary

`state`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#state-known-values).

### state Known Values

| Value                   | Description |
| ----------------------- | ----------- |
| `START`                 |             |
| `PLANNED`               |             |
| `PAID`                  |             |
| `ACTIVATED`             |             |
| `CANCELLED`             |             |
| `CANCELLED_WITH_ERRORS` |             |
| `FINISHED`              |             |

## type

`type`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value     | Description |
| --------- | ----------- |
| `outward` |             |
| `return`  |             |
