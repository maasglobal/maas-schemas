# response Schema

```
http://maasglobal.com/tsp/stations-retrieve/response.json
```

MaaS stations query response schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                           |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/stations-retrieve/response.json](response.json) |

# response Properties

| Property            | Type     | Required   | Nullable | Defined by                                 |
| ------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [station](#station) | `object` | Optional   | No       | response (this schema)                     |
| `*`                 | any      | Additional | Yes      | this schema _allows_ additional properties |

## station

Detailed station schema, coming as stations-retrieve response

`station`

- is optional
- type: `object`
- defined in this schema

### station Type

`object` with following properties:

| Property       | Type   | Required     |
| -------------- | ------ | ------------ |
| `address`      |        | Optional     |
| `agencyId`     |        | **Required** |
| `city`         |        | Optional     |
| `code`         | string | Optional     |
| `country`      |        | Optional     |
| `facilities`   | array  | Optional     |
| `id`           | string | **Required** |
| `location`     |        | **Required** |
| `name`         | string | Optional     |
| `openingHours` | object | Optional     |
| `platformCode` | anyOf  | Optional     |
| `services`     | array  | Optional     |
| `timetables`   | array  | Optional     |
| `zone`         | anyOf  | Optional     |

#### address

`address`

- is optional
- type: address

##### address Type

- [address](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/address`

#### agencyId

`agencyId`

- is **required**
- type: agencyId

##### agencyId Type

- [agencyId](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/agencyId`

#### city

`city`

- is optional
- type: city

##### city Type

- [city](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/city`

#### code

`code`

- is optional
- type: code

##### code Type

`string`

#### country

`country`

- is optional
- type: country

##### country Type

- [country](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/country`

#### facilities

Station facilities, including services and features

`facilities`

- is optional
- type: facilities

##### facilities Type

Array type: facilities

All items must be of the type: `string`

#### id

`id`

- is **required**
- type: id

##### id Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### location

`location`

- is **required**
- type: location

##### location Type

- [location](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/location`

#### name

`name`

- is optional
- type: name

##### name Type

`string`

#### openingHours

Opening hour of the station, object format is left for TSP to decide

`openingHours`

- is optional
- type: openingHours

##### openingHours Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### platformCode

Platform number

`platformCode`

- is optional
- type: platformCode

##### platformCode Type

- [platformCode](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/platformCode`

#### services

What agency and mode of transport will occupy this station

`services`

- is optional
- type: services

##### services Type

Array type: services

All items must be of the type:

- [travel-mode](../../core/components/travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

#### timetables

Timetable for passing by / originating transports

`timetables`

- is optional
- type: timetables

##### timetables Type

Array type: timetables

All items must be of the type: `object` with following properties:

| Property     | Type    | Required |
| ------------ | ------- | -------- |
| `id`         | string  | Optional |
| `isRealtime` | boolean | Optional |
| `longName`   | string  | Optional |
| `mode`       |         | Optional |
| `name`       | string  | Optional |
| `realtime`   |         | Optional |
| `schedule`   |         | Optional |

#### id

`id`

- is optional
- type: `string`

##### id Type

`string`

#### isRealtime

A flag indicating whether this transport mode is realtime or not

`isRealtime`

- is optional
- type: `boolean`

##### isRealtime Type

`boolean`

#### longName

`longName`

- is optional
- type: `string`

##### longName Type

`string`

#### mode

`mode`

- is optional
- type: travel-mode

##### mode Type

- [travel-mode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

#### realtime

`realtime`

- is optional
- type: time

##### realtime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### schedule

`schedule`

- is optional
- type: time

##### schedule Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### zone

Geofencing zone defined by provider that the station is within

`zone`

- is optional
- type: zone

##### zone Type

- [zone](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/zone`
