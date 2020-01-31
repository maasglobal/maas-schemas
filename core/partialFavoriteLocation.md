# partialFavoriteLocation Schema

```
http://maasglobal.com/core/partialFavoriteLocation.json
```

Customer's favorite location

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/partialFavoriteLocation.json](partialFavoriteLocation.json) |

## Schema Hierarchy

- partialFavoriteLocation `http://maasglobal.com/core/partialFavoriteLocation.json`
  - [units](components/units.md) `http://maasglobal.com/core/components/units.json`
  - [units-geo](components/units-geo.md) `http://maasglobal.com/core/components/units-geo.json`
  - [address](components/address.md) `http://maasglobal.com/core/components/address.json`
  - [common](components/common.md) `http://maasglobal.com/core/components/common.json`
  - [station](components/station.md) `http://maasglobal.com/core/components/station.json`

# partialFavoriteLocation Properties

| Property                      | Type     | Required   | Nullable | Defined by                                 |
| ----------------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [agencyId](#agencyid)         | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [city](#city)                 | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [country](#country)           | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [id](#id)                     | `number` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [identityId](#identityid)     | complex  | Optional   | No       | partialFavoriteLocation (this schema)      |
| [lineId](#lineid)             | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [location](#location)         | `object` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [name](#name)                 | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [stopId](#stopid)             | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [streetName](#streetname)     | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [streetNumber](#streetnumber) | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| [type](#type)                 | `enum`   | Optional   | No       | partialFavoriteLocation (this schema)      |
| [zipCode](#zipcode)           | `string` | Optional   | No       | partialFavoriteLocation (this schema)      |
| `*`                           | any      | Additional | Yes      | this schema _allows_ additional properties |

## agencyId

`agencyId`

- is optional
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## city

Alphabetic city name

`city`

- is optional
- type: `string`
- defined in this schema

### city Type

`string`

- minimum length: 1 characters

## country

Alphabetic country name

`country`

- is optional
- type: `string`
- defined in this schema

### country Type

`string`

- maximum length: 64 characters

## id

`id`

- is optional
- type: `number`
- defined in this schema

### id Type

`number`

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

## lineId

`lineId`

- is optional
- type: `string`
- defined in this schema

### lineId Type

`string`

## location

Geographic latitude-longitude object in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System

`location`

- is optional
- type: `object`
- defined in this schema

### location Type

`object` with following properties:

| Property | Type | Required     |
| -------- | ---- | ------------ |
| `lat`    |      | **Required** |
| `lon`    |      | **Required** |

#### lat

`lat`

- is **required**
- type: latitude

##### lat Type

- [latitude](units-geo.md) – `#/definitions/latitude`

#### lon

`lon`

- is **required**
- type: longitude

##### lon Type

- [longitude](units-geo.md) – `#/definitions/longitude`

## name

`name`

- is optional
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters

## stopId

`stopId`

- is optional
- type: `string`
- defined in this schema

### stopId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## streetName

Place name (given in autocomplete)

`streetName`

- is optional
- type: `string`
- defined in this schema

### streetName Type

`string`

- minimum length: 1 characters

## streetNumber

`streetNumber`

- is optional
- type: `string`
- defined in this schema

### streetNumber Type

`string`

## type

`type`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value     | Description |
| --------- | ----------- |
| `ADDRESS` |             |
| `STOP`    |             |

## zipCode

Numeric zip code, see https://en.wikipedia.org/wiki/Postal_code

`zipCode`

- is optional
- type: `string`
- defined in this schema

### zipCode Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters
