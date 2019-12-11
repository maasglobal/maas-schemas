# place Schema

```
http://maasglobal.com/core/components/place.json
```

A place, as a location-name pair with name and address

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                               |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/components/place.json](place.json) |

## Schema Hierarchy

- place `http://maasglobal.com/core/components/place.json`
  - [units-geo](units-geo.md) `http://maasglobal.com/core/components/units-geo.json`

# place Properties

| Property                        | Type             | Required     | Nullable | Defined by                                 |
| ------------------------------- | ---------------- | ------------ | -------- | ------------------------------------------ |
| [address](#address)             | componentAddress | Optional     | No       | place (this schema)                        |
| [facilities](#facilities)       | `string[]`       | Optional     | No       | place (this schema)                        |
| [lat](#lat)                     | `number`         | **Required** | No       | [units-geo](units-geo.md#lat)              |
| [localeAddress](#localeaddress) | `string`         | Optional     | No       | place (this schema)                        |
| [lon](#lon)                     | `number`         | **Required** | No       | [units-geo](units-geo.md#lon)              |
| [name](#name)                   | placeName        | Optional     | No       | place (this schema)                        |
| [openingHours](#openinghours)   | openingHours     | Optional     | No       | place (this schema)                        |
| [stationId](#stationid)         | `string`         | Optional     | No       | place (this schema)                        |
| [stopCode](#stopcode)           | `string`         | Optional     | No       | place (this schema)                        |
| [stopId](#stopid)               | `string`         | Optional     | No       | place (this schema)                        |
| [zone](#zone)                   | zone             | Optional     | No       | place (this schema)                        |
| `*`                             | any              | Additional   | Yes      | this schema _allows_ additional properties |

## address

`address`

- is optional
- type: componentAddress
- defined in this schema

### address Type

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

## facilities

`facilities`

- is optional
- type: `string[]`
- defined in this schema

### facilities Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 80 characters

## lat

No-numeric precision version of MaaS core latitude

`lat`

- is **required**
- type: `number`
- defined in [units-geo](units-geo.md#lat)

### lat Type

`number`

- minimum value: `-90`
- maximum value: `90`

## localeAddress

Country specific formatted address

`localeAddress`

- is optional
- type: `string`
- defined in this schema

### localeAddress Type

`string`

## lon

No-numeric precision version of MaaS core longitude

`lon`

- is **required**
- type: `number`
- defined in [units-geo](units-geo.md#lon)

### lon Type

`number`

- minimum value: `-180`
- maximum value: `180`

## name

`name`

- is optional
- type: placeName
- defined in this schema

### name Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

## openingHours

`openingHours`

- is optional
- type: openingHours
- defined in this schema

### openingHours Type

- [openingHours](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/openingHours`

## stationId

`stationId`

- is optional
- type: `string`
- defined in this schema

### stationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## stopCode

`stopCode`

- is optional
- type: `string`
- defined in this schema

### stopCode Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## stopId

`stopId`

- is optional
- type: `string`
- defined in this schema

### stopId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## zone

`zone`

- is optional
- type: zone
- defined in this schema

### zone Type

- [zone](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/zone`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [relaxedLocation](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/relaxedLocation`

#### Requirement 2

`object` with following properties:

| Property        | Type   | Required |
| --------------- | ------ | -------- |
| `address`       |        | Optional |
| `facilities`    | array  | Optional |
| `lat`           | number | Optional |
| `localeAddress` | string | Optional |
| `lon`           | number | Optional |
| `name`          |        | Optional |
| `openingHours`  |        | Optional |
| `stationId`     | string | Optional |
| `stopCode`      | string | Optional |
| `stopId`        | string | Optional |
| `zone`          |        | Optional |

#### address

`address`

- is optional
- type: componentAddress

##### address Type

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

#### facilities

`facilities`

- is optional
- type: `string[]`

##### facilities Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 80 characters

#### lat

No-numeric precision version of MaaS core latitude

`lat`

- is optional
- type: `number`

##### lat Type

`number`

- minimum value: `-90`
- maximum value: `90`

#### localeAddress

Country specific formatted address

`localeAddress`

- is optional
- type: `string`

##### localeAddress Type

`string`

#### lon

No-numeric precision version of MaaS core longitude

`lon`

- is optional
- type: `number`

##### lon Type

`number`

- minimum value: `-180`
- maximum value: `180`

#### name

`name`

- is optional
- type: placeName

##### name Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

#### openingHours

`openingHours`

- is optional
- type: openingHours

##### openingHours Type

- [openingHours](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/openingHours`

#### stationId

`stationId`

- is optional
- type: `string`

##### stationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### stopCode

`stopCode`

- is optional
- type: `string`

##### stopCode Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### stopId

`stopId`

- is optional
- type: `string`

##### stopId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### zone

`zone`

- is optional
- type: zone

##### zone Type

- [zone](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/zone`
