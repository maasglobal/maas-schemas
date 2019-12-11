# bike-station Schema

```
http://maasglobal.com/core/components/bike-station.json
```

MaaS bike station schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/components/bike-station.json](bike-station.json) |

## Schema Hierarchy

- bike-station `http://maasglobal.com/core/components/bike-station.json`
  - [units-geo](units-geo.md) `http://maasglobal.com/core/components/units-geo.json`

# bike-station Properties

| Property              | Type     | Required     | Nullable | Defined by                                 |
| --------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [id](#id)             | `string` | **Required** | No       | bike-station (this schema)                 |
| [location](#location) | `object` | **Required** | No       | bike-station (this schema)                 |
| [name](#name)         | `string` | **Required** | No       | bike-station (this schema)                 |
| [slots](#slots)       | `object` | Optional     | No       | bike-station (this schema)                 |
| `*`                   | any      | Additional   | Yes      | this schema _allows_ additional properties |

## id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

## location

Geographic latitude-longitude object in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System

`location`

- is **required**
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

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

## slots

`slots`

- is optional
- type: `object`
- defined in this schema

### slots Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `bikes`  | number | **Required** |
| `empty`  | number | **Required** |
| `total`  | number | **Required** |

#### bikes

`bikes`

- is **required**
- type: `number`

##### bikes Type

`number`

- minimum value: `0`

#### empty

`empty`

- is **required**
- type: `number`

##### empty Type

`number`

- minimum value: `0`

#### total

`total`

- is **required**
- type: `number`

##### total Type

`number`

- minimum value: `0`
