# leg Schema

```
http://maasglobal.com/core/leg.json
```

The base leg object with all fields, to be inherited

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/leg.json](leg.json) |

## Schema Hierarchy

- leg `http://maasglobal.com/core/leg.json`
  - [units](components/units.md) `http://maasglobal.com/core/components/units.json`
  - [common](components/common.md) `http://maasglobal.com/core/components/common.json`

# leg Definitions

| Property                          | Type           | Group                                                          |
| --------------------------------- | -------------- | -------------------------------------------------------------- |
| [agencyId](#agencyid)             | agencyId       | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [arrivalDelay](#arrivaldelay)     | arrivalDelay   | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [departureDelay](#departuredelay) | departureDelay | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [distance](#distance)             | distance       | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [endTime](#endtime)               | time           | `http://maasglobal.com/core/leg.json#/definitions/transferLeg` |
| [from](#from)                     | from           | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [legGeometry](#leggeometry)       | legGeometry    | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [mode](#mode)                     | transferMode   | `http://maasglobal.com/core/leg.json#/definitions/transferLeg` |
| [points](#points)                 | polyline       | `http://maasglobal.com/core/leg.json#/definitions/legGeometry` |
| [productOption](#productoption)   | productOption  | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [route](#route)                   | route          | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [routeLongName](#routelongname)   | routeLongName  | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [routeShortName](#routeshortname) | routeShortName | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [startTime](#starttime)           | time           | `http://maasglobal.com/core/leg.json#/definitions/transferLeg` |
| [state](#state)                   | state          | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [stops](#stops)                   | stops          | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [to](#to)                         | to             | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |
| [tspProduct](#tspproduct)         | tspProduct     | `http://maasglobal.com/core/leg.json#/definitions/legCore`     |

## agencyId

`agencyId`

- is optional
- type: agencyId
- defined in this schema

### agencyId Type

- [agencyId](leg.md) – `#/definitions/agencyId`

## arrivalDelay

`arrivalDelay`

- is optional
- type: arrivalDelay
- defined in this schema

### arrivalDelay Type

- [arrivalDelay](leg.md) – `#/definitions/arrivalDelay`

## departureDelay

`departureDelay`

- is optional
- type: departureDelay
- defined in this schema

### departureDelay Type

- [departureDelay](leg.md) – `#/definitions/departureDelay`

## distance

`distance`

- is optional
- type: distance
- defined in this schema

### distance Type

- [distance](leg.md) – `#/definitions/distance`

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
- type: from
- defined in this schema

### from Type

- [from](leg.md) – `#/definitions/from`

## legGeometry

`legGeometry`

- is **required**
- type: legGeometry
- defined in this schema

### legGeometry Type

- [legGeometry](leg.md) – `#/definitions/legGeometry`

## mode

`mode`

- is **required**
- type: transferMode
- defined in this schema

### mode Type

- [transferMode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json#/definitions/transferMode`

## points

`points`

- is optional
- type: polyline
- defined in this schema

### points Type

- [polyline](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/polyline`

## productOption

`productOption`

- is optional
- type: productOption
- defined in this schema

### productOption Type

- [productOption](leg.md) – `#/definitions/productOption`

## route

`route`

- is optional
- type: route
- defined in this schema

### route Type

- [route](leg.md) – `#/definitions/route`

## routeLongName

`routeLongName`

- is optional
- type: routeLongName
- defined in this schema

### routeLongName Type

- [routeLongName](leg.md) – `#/definitions/routeLongName`

## routeShortName

`routeShortName`

- is optional
- type: routeShortName
- defined in this schema

### routeShortName Type

- [routeShortName](leg.md) – `#/definitions/routeShortName`

## startTime

`startTime`

- is **required**
- type: time
- defined in this schema

### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## state

`state`

- is optional
- type: state
- defined in this schema

### state Type

- [state](leg.md) – `#/definitions/state`

## stops

`stops`

- is optional
- type: stops
- defined in this schema

### stops Type

- [stops](leg.md) – `#/definitions/stops`

## to

`to`

- is **required**
- type: to
- defined in this schema

### to Type

- [to](leg.md) – `#/definitions/to`

## tspProduct

`tspProduct`

- is optional
- type: tspProduct
- defined in this schema

### tspProduct Type

- [tspProduct](leg.md) – `#/definitions/tspProduct`

# leg Properties

| Property                | Type     | Required   | Nullable | Defined by                                 |
| ----------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [id](#id)               | `string` | Optional   | No       | leg (this schema)                          |
| [signature](#signature) | `string` | Optional   | No       | leg (this schema)                          |
| `*`                     | any      | Additional | Yes      | this schema _allows_ additional properties |

## id

Universally unique identifier, see https://en.wikipedia.org/wiki/Universally_unique_identifier

`id`

- is optional
- type: `string`
- defined in this schema

### id Type

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### id Example

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

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

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [legExtensions](leg.md) – `#/definitions/legExtensions`

#### Option 2

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [legCore](leg.md) – `#/definitions/legCore`

#### Option 2

- [waitingLeg](leg.md) – `#/definitions/waitingLeg`

#### Option 3

- [transferLeg](leg.md) – `#/definitions/transferLeg`
