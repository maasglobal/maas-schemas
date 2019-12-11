# request Schema

```
http://maasglobal.com/tsp/journey-planner/request.json
```

Request schema for getting journey options from a TSP adapter.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/journey-planner/request.json](request.json) |

# request Properties

| Property                  | Type     | Required   | Nullable | Defined by                                 |
| ------------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [payload](#payload)       | `object` | Optional   | No       | request (this schema)                      |
| `^(optionalParameters).+` | multiple | Pattern    | No       | request (this schema)                      |
| `*`                       | any      | Additional | Yes      | this schema _allows_ additional properties |

## payload

`payload`

- is optional
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property         | Type    | Required |
| ---------------- | ------- | -------- |
| `arriveBy`       | integer | Optional |
| `arriveByReturn` | integer | Optional |
| `from`           | string  | Optional |
| `fromAddress`    | string  | Optional |
| `fromName`       | string  | Optional |
| `fromStationId`  | string  | Optional |
| `leaveAt`        | integer | Optional |
| `leaveAtReturn`  | integer | Optional |
| `mode`           | string  | Optional |
| `to`             | string  | Optional |
| `toAddress`      | string  | Optional |
| `toName`         | string  | Optional |
| `toStationId`    | string  | Optional |

#### arriveBy

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`arriveBy`

- is optional
- type: time

##### arriveBy Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### arriveByReturn

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`arriveByReturn`

- is optional
- type: time

##### arriveByReturn Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### from

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`from`

- is optional
- type: shortLocationString

##### from Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

#### fromAddress

Componentized from address

`fromAddress`

- is optional
- type: componentAddress

##### fromAddress Type

`string`

##### fromAddress Examples

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

#### fromName

Place name (given in autocomplete)

`fromName`

- is optional
- type: placeName

##### fromName Type

`string`

- minimum length: 1 characters

#### fromStationId

`fromStationId`

- is optional
- type: id

##### fromStationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### leaveAt

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`leaveAt`

- is optional
- type: time

##### leaveAt Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### leaveAtReturn

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`leaveAtReturn`

- is optional
- type: time

##### leaveAtReturn Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### mode

`mode`

- is optional
- type: `string`

##### mode Type

`string`

#### to

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`to`

- is optional
- type: shortLocationString

##### to Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

#### toAddress

Componentized to address

`toAddress`

- is optional
- type: componentAddress

##### toAddress Type

`string`

##### toAddress Examples

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

#### toName

Place name (given in autocomplete)

`toName`

- is optional
- type: placeName

##### toName Type

`string`

- minimum length: 1 characters

#### toStationId

`toStationId`

- is optional
- type: id

##### toStationId Type

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
