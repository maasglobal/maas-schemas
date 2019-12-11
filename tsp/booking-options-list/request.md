# request Schema

```
http://maasglobal.com/tsp/bookings-options-list/request.json
```

Request schema for getting options from a TSP adapter.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                            |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/booking-options-list/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/bookings-options-list/request.json`
  - [travel-mode](../../core/components/travel-mode.md) `http://maasglobal.com/core/components/travel-mode.json`
  - [units](../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [units-geo](../../core/components/units-geo.md) `http://maasglobal.com/core/components/units-geo.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`
  - [common](../../core/components/common.md) `http://maasglobal.com/core/components/common.json`

# request Properties

| Property                                            | Type        | Required     | Nullable | Defined by                                 |
| --------------------------------------------------- | ----------- | ------------ | -------- | ------------------------------------------ |
| [distance](#distance)                               | `number`    | Optional     | No       | request (this schema)                      |
| [endTime](#endtime)                                 | `integer`   | Optional     | No       | request (this schema)                      |
| [extraOptions](#extraoptions)                       | `string`    | Optional     | No       | request (this schema)                      |
| [from](#from)                                       | `string`    | **Required** | No       | request (this schema)                      |
| [fromAddress](#fromaddress)                         | complex     | Optional     | No       | request (this schema)                      |
| [fromName](#fromname)                               | complex     | Optional     | No       | request (this schema)                      |
| [fromRadius](#fromradius)                           | `number`    | Optional     | No       | request (this schema)                      |
| [mode](#mode)                                       | travel-mode | Optional     | No       | request (this schema)                      |
| [purchasingAppInstanceId](#purchasingappinstanceid) | `string`    | Optional     | No       | request (this schema)                      |
| [startTime](#starttime)                             | `integer`   | **Required** | No       | request (this schema)                      |
| [to](#to)                                           | complex     | Optional     | No       | request (this schema)                      |
| [toAddress](#toaddress)                             | complex     | Optional     | No       | request (this schema)                      |
| [toName](#toname)                                   | complex     | Optional     | No       | request (this schema)                      |
| [toRadius](#toradius)                               | `number`    | Optional     | No       | request (this schema)                      |
| [tspIdToExtend](#tspidtoextend)                     | `string`    | Optional     | No       | request (this schema)                      |
| [tspProductIds](#tspproductids)                     | `string`    | Optional     | No       | request (this schema)                      |
| `^(optionalParameters).+`                           | multiple    | Pattern      | No       | request (this schema)                      |
| `*`                                                 | any         | Additional   | Yes      | this schema _allows_ additional properties |

## distance

Distance in meters

`distance`

- is optional
- type: `number`
- defined in this schema

### distance Type

`number`

- minimum value: `0`
- maximum value: `40075000`
- must be a multiple of `1`

## endTime

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`endTime`

- is optional
- type: `integer`
- defined in this schema

### endTime Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## extraOptions

An arbitrary string passed on a per-TSP basis, e.g. user's subscription period

`extraOptions`

- is optional
- type: `string`
- defined in this schema

### extraOptions Type

`string`

## from

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`from`

- is **required**
- type: `string`
- defined in this schema

### from Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

## fromAddress

`fromAddress`

- is optional
- type: complex
- defined in this schema

### fromAddress Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

#### Option 2

`string`

## fromName

`fromName`

- is optional
- type: complex
- defined in this schema

### fromName Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

#### Option 2

`string`

## fromRadius

'from' location radius in meters

`fromRadius`

- is optional
- type: `number`
- defined in this schema

### fromRadius Type

`number`

- minimum value: `0`
- maximum value: `40075000`
- must be a multiple of `1`

## mode

`mode`

- is optional
- type: travel-mode
- defined in this schema

### mode Type

- [travel-mode](../../core/components/travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

## purchasingAppInstanceId

appInstanceId to use for options and purchase

`purchasingAppInstanceId`

- is optional
- type: `string`
- defined in this schema

### purchasingAppInstanceId Type

`string`

- minimum length: 6 characters

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

## to

`to`

- is optional
- type: complex
- defined in this schema

### to Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [shortLocationString](units-geo.md) –
  `http://maasglobal.com/core/components/units-geo.json#/definitions/shortLocationString`

#### Option 2

`string`

## toAddress

`toAddress`

- is optional
- type: complex
- defined in this schema

### toAddress Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

#### Option 2

`string`

## toName

`toName`

- is optional
- type: complex
- defined in this schema

### toName Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

#### Option 2

`string`

## toRadius

'to' location radius in meters

`toRadius`

- is optional
- type: `number`
- defined in this schema

### toRadius Type

`number`

- minimum value: `0`
- maximum value: `40075000`
- must be a multiple of `1`

## tspIdToExtend

Request for possible booking extension options for tspId

`tspIdToExtend`

- is optional
- type: `string`
- defined in this schema

### tspIdToExtend Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## tspProductIds

Comma-separated list of tspProductIds that the user has access to

`tspProductIds`

- is optional
- type: `string`
- defined in this schema

### tspProductIds Type

`string`

## Pattern: `^(optionalParameters).+`

Applies to all properties that match the regular expression `^(optionalParameters).+`

`^(optionalParameters).+`

- is a property pattern
- type: multiple
- defined in this schema

### Pattern ^(optionalParameters).+ Type

Unknown type `string,number,boolean`.

```json
{
  "type": ["string", "number", "boolean"],
  "simpletype": "multiple"
}
```
