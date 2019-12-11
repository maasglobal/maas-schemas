# request Schema

```
http://maasglobal.com/maas-backend/provider/routes/request.json
```

Request schema for routes providers

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/provider/routes/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/provider/routes/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [units-geo](../../../core/components/units-geo.md) `http://maasglobal.com/core/components/units-geo.json`
  - [address](../../../core/components/address.md) `http://maasglobal.com/core/components/address.json`
  - [station](../../../core/components/station.md) `http://maasglobal.com/core/components/station.json`
  - [travel-mode](../../../core/components/travel-mode.md) `http://maasglobal.com/core/components/travel-mode.json`

# request Properties

| Property                        | Type        | Required     | Nullable | Defined by            |
| ------------------------------- | ----------- | ------------ | -------- | --------------------- |
| [arriveBy](#arriveby)           | `integer`   | Optional     | No       | request (this schema) |
| [from](#from)                   | `array`     | **Required** | No       | request (this schema) |
| [fromAddress](#fromaddress)     | `string`    | Optional     | No       | request (this schema) |
| [fromName](#fromname)           | `string`    | Optional     | No       | request (this schema) |
| [fromStationId](#fromstationid) | `string`    | Optional     | No       | request (this schema) |
| [identityId](#identityid)       | complex     | Optional     | No       | request (this schema) |
| [leaveAt](#leaveat)             | `integer`   | Optional     | No       | request (this schema) |
| [modes](#modes)                 | travel-mode | Optional     | No       | request (this schema) |
| [to](#to)                       | `array`     | **Required** | No       | request (this schema) |
| [toAddress](#toaddress)         | `string`    | Optional     | No       | request (this schema) |
| [toName](#toname)               | `string`    | Optional     | No       | request (this schema) |
| [toStationId](#tostationid)     | `string`    | Optional     | No       | request (this schema) |
| `^(optionalParameters).+`       | multiple    | Pattern      | No       | request (this schema) |

## arriveBy

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`arriveBy`

- is optional
- type: `integer`
- defined in this schema

### arriveBy Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## from

Geographic latitude-longitude number-pair array in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`from`

- is **required**
- type: `array`
- defined in this schema

### from Type

Array type: `array`

All items must be of the type: Unknown type ``.

```json
{
  "description": "Geographic latitude-longitude number-pair array in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System",
  "type": "array",
  "items": [
    {
      "$ref": "#/definitions/latitude",
      "$linkVal": "latitude",
      "$linkPath": "units-geo.md"
    },
    {
      "$ref": "#/definitions/longitude",
      "$linkVal": "longitude",
      "$linkPath": "units-geo.md"
    }
  ],
  "additionalItems": false,
  "$linkVal": "shortLocation",
  "$linkPath": "units-geo.md",
  "isrequired": true,
  "simpletype": "`array`"
}
```

## fromAddress

Encoded address components. Check the regexr examples. Check https://regexr.com/4ofcq. In streetNumber, there are 2
dashes - they have 2 different unicodes, do not remove

`fromAddress`

- is optional
- type: `string`
- defined in this schema

### fromAddress Type

`string`

### fromAddress Examples

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

## fromName

Place name (given in autocomplete)

`fromName`

- is optional
- type: `string`
- defined in this schema

### fromName Type

`string`

- minimum length: 1 characters

## fromStationId

`fromStationId`

- is optional
- type: `string`
- defined in this schema

### fromStationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

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

## leaveAt

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`leaveAt`

- is optional
- type: `integer`
- defined in this schema

### leaveAt Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## modes

`modes`

- is optional
- type: travel-mode
- defined in this schema

### modes Type

- [travel-mode](../../../core/components/travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

## to

Geographic latitude-longitude number-pair array in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`to`

- is **required**
- type: `array`
- defined in this schema

### to Type

Array type: `array`

All items must be of the type: Unknown type ``.

```json
{
  "description": "Geographic latitude-longitude number-pair array in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System",
  "type": "array",
  "items": [
    {
      "$ref": "#/definitions/latitude",
      "$linkVal": "latitude",
      "$linkPath": "units-geo.md"
    },
    {
      "$ref": "#/definitions/longitude",
      "$linkVal": "longitude",
      "$linkPath": "units-geo.md"
    }
  ],
  "additionalItems": false,
  "$linkVal": "shortLocation",
  "$linkPath": "units-geo.md",
  "isrequired": true,
  "simpletype": "`array`"
}
```

## toAddress

Encoded address components. Check the regexr examples. Check https://regexr.com/4ofcq. In streetNumber, there are 2
dashes - they have 2 different unicodes, do not remove

`toAddress`

- is optional
- type: `string`
- defined in this schema

### toAddress Type

`string`

### toAddress Examples

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

## toName

Place name (given in autocomplete)

`toName`

- is optional
- type: `string`
- defined in this schema

### toName Type

`string`

- minimum length: 1 characters

## toStationId

`toStationId`

- is optional
- type: `string`
- defined in this schema

### toStationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

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
