# MODE_TAXI Schema

```
http://maasglobal.com/core/modes/MODE_TAXI.json
```

Schema for MODE_TAXI meta field

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/modes/MODE_TAXI.json](MODE_TAXI.json) |

## Schema Hierarchy

- MODE_TAXI `http://maasglobal.com/core/modes/MODE_TAXI.json`
  - [units-geo](../components/units-geo.md) `http://maasglobal.com/core/components/units-geo.json`
  - [units](../components/units.md) `http://maasglobal.com/core/components/units.json`

# MODE_TAXI Properties

| Property                                          | Type      | Required | Nullable | Defined by              |
| ------------------------------------------------- | --------- | -------- | -------- | ----------------------- |
| [dispatchOrderId](#dispatchorderid)               | `string`  | Optional | No       | MODE_TAXI (this schema) |
| [driver](#driver)                                 | `object`  | Optional | No       | MODE_TAXI (this schema) |
| [eta](#eta)                                       | `integer` | Optional | No       | MODE_TAXI (this schema) |
| [noShowReportedByDriver](#noshowreportedbydriver) | `boolean` | Optional | No       | MODE_TAXI (this schema) |
| [taxiCenter](#taxicenter)                         | `object`  | Optional | No       | MODE_TAXI (this schema) |
| [vehicleDescription](#vehicledescription)         | `string`  | Optional | No       | MODE_TAXI (this schema) |
| [vehicleId](#vehicleid)                           | `string`  | Optional | No       | MODE_TAXI (this schema) |
| [vehicleLocation](#vehiclelocation)               | `object`  | Optional | No       | MODE_TAXI (this schema) |
| [vehicleType](#vehicletype)                       | `string`  | Optional | No       | MODE_TAXI (this schema) |

## dispatchOrderId

`dispatchOrderId`

- is optional
- type: `string`
- defined in this schema

### dispatchOrderId Type

`string`

- minimum length: 1 characters
- maximum length: 128 characters

## driver

Driver information

`driver`

- is optional
- type: `object`
- defined in this schema

### driver Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `image`  | string | Optional |
| `name`   | string | Optional |
| `phone`  | string | Optional |

#### image

Uniform resource locator, see https://en.wikipedia.org/wiki/Uniform_Resource_Locator and
https://mathiasbynens.be/demo/url-regex

`image`

- is optional
- type: url

##### image Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```

#### name

Driver name, e.g. 'Sergey' or 'Jane S.'

`name`

- is optional
- type: `string`

##### name Type

`string`

- minimum length: 1 characters
- maximum length: 128 characters

#### phone

`phone`

- is optional
- type: `string`

##### phone Type

`string`

## eta

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`eta`

- is optional
- type: `integer`
- defined in this schema

### eta Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## noShowReportedByDriver

`noShowReportedByDriver`

- is optional
- type: `boolean`
- defined in this schema

### noShowReportedByDriver Type

`boolean`

## taxiCenter

`taxiCenter`

- is optional
- type: `object`
- defined in this schema

### taxiCenter Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `name`   | string | Optional |
| `phone`  | string | Optional |

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### phone

ITU-T E.164 phone number, see
https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html

`phone`

- is optional
- type: phone

##### phone Type

`string`

All instances must conform to this regular expression

```regex
^\+(?:\d){6,14}\d$
```

- test example:
  [+358401234567](<https://regexr.com/?expression=%5E%5C%2B(%3F%3A%5Cd)%7B6%2C14%7D%5Cd%24&text=%2B358401234567>)

##### phone Example

```json
+358401234567
```

## vehicleDescription

An arbitrary description of the vehicle, e.g. 'Black Jaguar'

`vehicleDescription`

- is optional
- type: `string`
- defined in this schema

### vehicleDescription Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## vehicleId

The taxi id (in the taxi number plate on top of the vehicle)

`vehicleId`

- is optional
- type: `string`
- defined in this schema

### vehicleId Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## vehicleLocation

Geographic latitude-longitude object in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System

`vehicleLocation`

- is optional
- type: `object`
- defined in this schema

### vehicleLocation Type

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

## vehicleType

`vehicleType`

- is optional
- type: `string`
- defined in this schema

### vehicleType Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters
