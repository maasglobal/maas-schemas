# stop Schema

```
http://maasglobal.com/core/stop.json
```

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/stop.json](stop.json) |

## Schema Hierarchy

- stop `http://maasglobal.com/core/stop.json`
  - [place](components/place.md) `http://maasglobal.com/core/components/place.json`

# stop Properties

| Property                        | Type       | Required   | Nullable | Defined by                                 |
| ------------------------------- | ---------- | ---------- | -------- | ------------------------------------------ |
| [address](#address)             | `string`   | Optional   | No       | [place](components/place.md#address)       |
| [facilities](#facilities)       | `string[]` | Optional   | No       | [place](components/place.md#facilities)    |
| [lat](#lat)                     | `number`   | Optional   | No       | [place](components/place.md#lat)           |
| [localeAddress](#localeaddress) | `string`   | Optional   | No       | [place](components/place.md#localeaddress) |
| [lon](#lon)                     | `number`   | Optional   | No       | [place](components/place.md#lon)           |
| [name](#name)                   | `string`   | Optional   | No       | [place](components/place.md#name)          |
| [openingHours](#openinghours)   | `object`   | Optional   | No       | [place](components/place.md#openinghours)  |
| [startTime](#starttime)         | time       | Optional   | No       | stop (this schema)                         |
| [stationId](#stationid)         | `string`   | Optional   | No       | [place](components/place.md#stationid)     |
| [stopCode](#stopcode)           | `string`   | Optional   | No       | [place](components/place.md#stopcode)      |
| [stopId](#stopid)               | `string`   | Optional   | No       | [place](components/place.md#stopid)        |
| [zone](#zone)                   | complex    | Optional   | No       | [place](components/place.md#zone)          |
| `*`                             | any        | Additional | Yes      | this schema _allows_ additional properties |

## address

Encoded address components. Check the regexr examples. Check https://regexr.com/4ofcq. In streetNumber, there are 2
dashes - they have 2 different unicodes, do not remove

`address`

- is optional
- type: `string`
- defined in [place](components/place.md#address)

### address Type

`string`

### address Examples

```json
"state:Tōkyō-to|district:Kanda Nishikichō 3-chōme|streetNumber:4-パレステュディオ御茶ノ水駿河台参番館|zipCode:101-0054|city:Chiyoda-City|country:Japan"
```

```json
"streetName:Tarkk'ampujänkätu|city:Helsinki|country:Finland|state:Uusimaa|streetNumber:1|zipCode:00100|district:Tapiola"
```

```json
"streetName:Hämeentie Töölöntori Lähettilääntie Tarkk'ampujänkätu"
```

```json
"streetName:Brädgårdsgatan"
```

```json
"streetName:Żółkiewskiego"
```

```json
"streetName:Øster Allé"
```

```json
"streetName:شارع حمدان بن محمد"
```

```json
"streetName:Karl-Marx-Straße"
```

```json
"streetName:Küçük Ayasofya|city:İstanbul|district:Fatih"
```

```json
"streetName:11 Avenue d’Ostende"
```

```json
"streetName:Küçük Ayasofya, Küçük Ayasofya Cami Sk."
```

```json
"streetName:Kasumi'gaseki"
```

```json
"streetName:St Martin's Lane"
```

```json
"country:Åland"
```

```json
"country:Puerto Rico"
```

```json
"country:français"
```

```json
"country:skandinavisk"
```

```json
"streetNumber:1-1"
```

```json
"streetNumber:1/2-d2"
```

## facilities

`facilities`

- is optional
- type: `string[]`
- defined in [place](components/place.md#facilities)

### facilities Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 80 characters

## lat

No-numeric precision version of MaaS core latitude

`lat`

- is optional
- type: `number`
- defined in [place](components/place.md#lat)

### lat Type

`number`

- minimum value: `-90`
- maximum value: `90`

## localeAddress

Country specific formatted address

`localeAddress`

- is optional
- type: `string`
- defined in [place](components/place.md#localeaddress)

### localeAddress Type

`string`

## lon

No-numeric precision version of MaaS core longitude

`lon`

- is optional
- type: `number`
- defined in [place](components/place.md#lon)

### lon Type

`number`

- minimum value: `-180`
- maximum value: `180`

## name

Place name (given in autocomplete)

`name`

- is optional
- type: `string`
- defined in [place](components/place.md#name)

### name Type

`string`

- minimum length: 1 characters

## openingHours

Opening hour of the station, object format is left for TSP to decide

`openingHours`

- is optional
- type: `object`
- defined in [place](components/place.md#openinghours)

### openingHours Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## startTime

`startTime`

- is optional
- type: time
- defined in this schema

### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## stationId

`stationId`

- is optional
- type: `string`
- defined in [place](components/place.md#stationid)

### stationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## stopCode

`stopCode`

- is optional
- type: `string`
- defined in [place](components/place.md#stopcode)

### stopCode Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## stopId

`stopId`

- is optional
- type: `string`
- defined in [place](components/place.md#stopid)

### stopId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## zone

Geofencing zone defined by provider that the station is within

`zone`

- is optional
- type: complex
- defined in [place](components/place.md#zone)

### zone Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`number`

#### Option 2

`string`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

#### Requirement 2

`object` with following properties:

| Property        | Type   | Required |
| --------------- | ------ | -------- |
| `address`       | string | Optional |
| `facilities`    | array  | Optional |
| `lat`           | number | Optional |
| `localeAddress` | string | Optional |
| `lon`           | number | Optional |
| `name`          | string | Optional |
| `openingHours`  | object | Optional |
| `startTime`     |        | Optional |
| `stationId`     | string | Optional |
| `stopCode`      | string | Optional |
| `stopId`        | string | Optional |
| `zone`          | anyOf  | Optional |

#### address

Encoded address components. Check the regexr examples. Check https://regexr.com/4ofcq. In streetNumber, there are 2
dashes - they have 2 different unicodes, do not remove

`address`

- is optional
- type: `string`

##### address Type

`string`

##### address Examples

```json
state:Tōkyō-to|district:Kanda Nishikichō 3-chōme|streetNumber:4-パレステュディオ御茶ノ水駿河台参番館|zipCode:101-0054|city:Chiyoda-City|country:Japan
```

```json
streetName:Tarkk'ampujänkätu|city:Helsinki|country:Finland|state:Uusimaa|streetNumber:1|zipCode:00100|district:Tapiola
```

```json
streetName:Hämeentie Töölöntori Lähettilääntie Tarkk'ampujänkätu
```

```json
streetName:Brädgårdsgatan
```

```json
streetName:Żółkiewskiego
```

```json
streetName:Øster Allé
```

```json
streetName:شارع حمدان بن محمد
```

```json
streetName:Karl-Marx-Straße
```

```json
streetName:Küçük Ayasofya|city:İstanbul|district:Fatih
```

```json
streetName:11 Avenue d’Ostende
```

```json
streetName:Küçük Ayasofya, Küçük Ayasofya Cami Sk.
```

```json
streetName:Kasumi'gaseki
```

```json
streetName:St Martin's Lane
```

```json
country:Åland
```

```json
country:Puerto Rico
```

```json
country:français
```

```json
country:skandinavisk
```

```json
streetNumber:1-1
```

```json
streetNumber:1/2-d2
```

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

Place name (given in autocomplete)

`name`

- is optional
- type: `string`

##### name Type

`string`

- minimum length: 1 characters

#### openingHours

Opening hour of the station, object format is left for TSP to decide

`openingHours`

- is optional
- type: `object`

##### openingHours Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### startTime

`startTime`

- is optional
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

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

Geofencing zone defined by provider that the station is within

`zone`

- is optional
- type: complex

##### zone Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`number`

#### Option 2

`string`
