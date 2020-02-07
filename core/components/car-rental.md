# car-rental Schema

```
http://maasglobal.com/core/components/car-rental.json
```

Base schema for MODE_CAR\* metas

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                         |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/components/car-rental.json](car-rental.json) |

## Schema Hierarchy

- car-rental `http://maasglobal.com/core/components/car-rental.json`
  - [units](units.md) `http://maasglobal.com/core/components/units.json`
  - [common](common.md) `http://maasglobal.com/core/components/common.json`

# car-rental Properties

| Property                                      | Type     | Required     | Nullable | Defined by               |
| --------------------------------------------- | -------- | ------------ | -------- | ------------------------ |
| [car](#car)                                   | `object` | Optional     | No       | car-rental (this schema) |
| [description](#description)                   | `string` | **Required** | No       | car-rental (this schema) |
| [id](#id)                                     | `string` | Optional     | No       | car-rental (this schema) |
| [image](#image)                               | `string` | **Required** | No       | car-rental (this schema) |
| [name](#name)                                 | `string` | **Required** | No       | car-rental (this schema) |
| [pickupInfo](#pickupinfo)                     | `string` | Optional     | No       | car-rental (this schema) |
| [returnInfo](#returninfo)                     | `string` | Optional     | No       | car-rental (this schema) |
| [startEndGeoRegionUrl](#startendgeoregionurl) | `string` | Optional     | No       | car-rental (this schema) |
| [terms](#terms)                               | complex  | Optional     | No       | car-rental (this schema) |

## car

`car`

- is optional
- type: `object`
- defined in this schema

### car Type

`object` with following properties:

| Property            | Type    | Required     |
| ------------------- | ------- | ------------ |
| `classification`    |         | **Required** |
| `damage`            | string  | Optional     |
| `doors`             | array   | Optional     |
| `fuel`              |         | Optional     |
| `fuelLevel`         | number  | Optional     |
| `location`          | object  | Optional     |
| `luggage`           | array   | Optional     |
| `passengers`        | integer | Optional     |
| `registrationPlate` | string  | Optional     |
| `transmission`      |         | Optional     |

#### classification

`classification`

- is **required**
- type: complex

##### classification Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [ACRISS](ACRISS.md) – `http://maasglobal.com/core/components/ACRISS.json`

#### Condition 2

#### damage

Any reported damages to the car (if available)

`damage`

- is optional
- type: `string`

##### damage Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

#### doors

The number of doors this car model may have - an array of min & max

`doors`

- is optional
- type: `integer[]`\* between `2` and `2` items in the array

##### doors Type

Array type: `integer[]`

All items must be of the type: `integer`

- minimum value: `0`
- maximum value: `10`

#### fuel

`fuel`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#car-known-values).

##### fuel Known Values

| Value       | Description |
| ----------- | ----------- |
| `diesel`    |             |
| `electric`  |             |
| `ethanol`   |             |
| `gasoline`  |             |
| `hybrid`    |             |
| `hydrogen`  |             |
| `lpg`       |             |
| `multifuel` |             |
| `null`      |             |

#### fuelLevel

The percentage of fuel the car has at the moment

`fuelLevel`

- is optional
- type: `number`

##### fuelLevel Type

`number`

#### location

Current geo location

`location`

- is optional
- type: location

##### location Type

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

#### luggage

The number of luggage this vehicle will be able to transport - an array of [big, small] luggage

`luggage`

- is optional
- type: `integer[]`\* between `2` and `2` items in the array

##### luggage Type

Array type: `integer[]`

All items must be of the type: `integer`

- minimum value: `0`
- maximum value: `200`

#### passengers

The number of passengers this vehicle will be able to transport

`passengers`

- is optional
- type: `integer`

##### passengers Type

`integer`

- minimum value: `0`
- maximum value: `200`

#### registrationPlate

Registration plate (e.g. if we know the actual car already)

`registrationPlate`

- is optional
- type: `string`

##### registrationPlate Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5BA-Z%5C-0-9%5D)):

```regex
[A-Z\-0-9]
```

#### transmission

`transmission`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#car-known-values).

##### transmission Known Values

| Value       | Description |
| ----------- | ----------- |
| `manual`    |             |
| `automatic` |             |
| `null`      |             |

## description

`description`

- is **required**
- type: `string`
- defined in this schema

### description Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## id

`id`

- is optional
- type: `string`
- defined in this schema

### id Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## image

Uniform resource locator, see https://en.wikipedia.org/wiki/Uniform_Resource_Locator and
https://mathiasbynens.be/demo/url-regex

`image`

- is **required**
- type: `string`
- defined in this schema

### image Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## pickupInfo

Pickup instructions in HTML format

`pickupInfo`

- is optional
- type: `string`
- defined in this schema

### pickupInfo Type

`string`

## returnInfo

Return Instructions in HTML format

`returnInfo`

- is optional
- type: `string`
- defined in this schema

### returnInfo Type

`string`

## startEndGeoRegionUrl

Region in which car can be rented and returned. Url to GeoJSON file

`startEndGeoRegionUrl`

- is optional
- type: `string`
- defined in this schema

### startEndGeoRegionUrl Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```

## terms

`terms`

- is optional
- type: complex
- defined in this schema

### terms Type

Unknown type ``.

```json
{
  "simpletype": "complex"
}
```
