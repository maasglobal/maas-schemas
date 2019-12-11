# request Schema

```
http://maasglobal.com/maas-backend/routes/routes-query/request.json
```

Request schema for routes query

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/routes/routes-query/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/routes/routes-query/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Definitions

| Property                                | Type                | Group                                                                                      |
| --------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| [arriveBy](#arriveby)                   | time                | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [arriveByReturn](#arrivebyreturn)       | time                | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [bookingIdToExtend](#bookingidtoextend) | uuid                | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [from](#from)                           | shortLocationString | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [fromAddress](#fromaddress)             | componentAddress    | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [fromName](#fromname)                   | placeName           | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [fromStationId](#fromstationid)         | id                  | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [leaveAt](#leaveat)                     | time                | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [leaveAtReturn](#leaveatreturn)         | time                | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [modes](#modes)                         | `enum`              | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [options](#options)                     | `object`            | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [to](#to)                               | shortLocationString | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [toAddress](#toaddress)                 | componentAddress    | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [toName](#toname)                       | placeName           | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [toStationId](#tostationid)             | id                  | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |
| [transitMode](#transitmode)             | `enum`              | `http://maasglobal.com/maas-backend/routes/routes-query/request.json#/definitions/payload` |

## arriveBy

`arriveBy`

- is optional
- type: time
- defined in this schema

### arriveBy Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## arriveByReturn

`arriveByReturn`

- is optional
- type: time
- defined in this schema

### arriveByReturn Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## bookingIdToExtend

bookingId to fetch possible extension options for

`bookingIdToExtend`

- is optional
- type: uuid
- defined in this schema

### bookingIdToExtend Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## from

`from`

- is **required**
- type: shortLocationString
- defined in this schema

### from Type

- [shortLocationString](units-geo.md) –
  `http://maasglobal.com/core/components/units-geo.json#/definitions/shortLocationString`

## fromAddress

Componentized from address

`fromAddress`

- is optional
- type: componentAddress
- defined in this schema

### fromAddress Type

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

## fromName

`fromName`

- is optional
- type: placeName
- defined in this schema

### fromName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

## fromStationId

`fromStationId`

- is optional
- type: id
- defined in this schema

### fromStationId Type

- [id](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/id`

## leaveAt

`leaveAt`

- is optional
- type: time
- defined in this schema

### leaveAt Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## leaveAtReturn

`leaveAtReturn`

- is optional
- type: time
- defined in this schema

### leaveAtReturn Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## modes

`modes`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#modes-known-values).

### modes Known Values

| Value            | Description |
| ---------------- | ----------- |
| `PUBLIC_TRANSIT` |             |
| `TAXI`           |             |
| `CAR`            |             |
| `WALK`           |             |
| `BICYCLE`        |             |
| `BICYCLE_RENT`   |             |

## options

`options`

- is optional
- type: `object`
- defined in this schema

### options Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## to

`to`

- is **required**
- type: shortLocationString
- defined in this schema

### to Type

- [shortLocationString](units-geo.md) –
  `http://maasglobal.com/core/components/units-geo.json#/definitions/shortLocationString`

## toAddress

Componentized to address

`toAddress`

- is optional
- type: componentAddress
- defined in this schema

### toAddress Type

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

## toName

`toName`

- is optional
- type: placeName
- defined in this schema

### toName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

## toStationId

`toStationId`

- is optional
- type: id
- defined in this schema

### toStationId Type

- [id](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/id`

## transitMode

`transitMode`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#transitmode-known-values).

### transitMode Known Values

| Value    | Description |
| -------- | ----------- |
| `TRAIN`  |             |
| `BUS`    |             |
| `SUBWAY` |             |
| `TRAM`   |             |
| `RAIL`   |             |

# request Properties

| Property                  | Type     | Required     | Nullable | Defined by                                 |
| ------------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [headers](#headers)       | `object` | Optional     | No       | request (this schema)                      |
| [identityId](#identityid) | complex  | **Required** | No       | request (this schema)                      |
| [payload](#payload)       | `object` | **Required** | No       | request (this schema)                      |
| `*`                       | any      | Additional   | Yes      | this schema _allows_ additional properties |

## headers

`headers`

- is optional
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property            | Type | Required |
| ------------------- | ---- | -------- |
| `Accept`            |      | Optional |
| `X-Whim-User-Agent` |      | Optional |

#### Accept

`Accept`

- is optional
- type: acceptHeader

##### Accept Type

- [acceptHeader](api-common.md) – `#/definitions/acceptHeader`

#### X-Whim-User-Agent

`X-Whim-User-Agent`

- is optional
- type: userAgentHeader

##### X-Whim-User-Agent Type

- [userAgentHeader](api-common.md) – `#/definitions/userAgentHeader`

## identityId

`identityId`

- is **required**
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

## payload

`payload`

- is **required**
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property            | Type   | Required     |
| ------------------- | ------ | ------------ |
| `arriveBy`          |        | Optional     |
| `arriveByReturn`    |        | Optional     |
| `bookingIdToExtend` |        | Optional     |
| `from`              |        | **Required** |
| `fromAddress`       |        | Optional     |
| `fromName`          |        | Optional     |
| `fromStationId`     |        | Optional     |
| `leaveAt`           |        | Optional     |
| `leaveAtReturn`     |        | Optional     |
| `modes`             | string | Optional     |
| `options`           | object | Optional     |
| `to`                |        | **Required** |
| `toAddress`         |        | Optional     |
| `toName`            |        | Optional     |
| `toStationId`       |        | Optional     |
| `transitMode`       | string | Optional     |

#### arriveBy

`arriveBy`

- is optional
- type: time

##### arriveBy Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### arriveByReturn

`arriveByReturn`

- is optional
- type: time

##### arriveByReturn Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### bookingIdToExtend

bookingId to fetch possible extension options for

`bookingIdToExtend`

- is optional
- type: uuid

##### bookingIdToExtend Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

#### from

`from`

- is **required**
- type: shortLocationString

##### from Type

- [shortLocationString](units-geo.md) –
  `http://maasglobal.com/core/components/units-geo.json#/definitions/shortLocationString`

#### fromAddress

Componentized from address

`fromAddress`

- is optional
- type: componentAddress

##### fromAddress Type

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

#### fromName

`fromName`

- is optional
- type: placeName

##### fromName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

#### fromStationId

`fromStationId`

- is optional
- type: id

##### fromStationId Type

- [id](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/id`

#### leaveAt

`leaveAt`

- is optional
- type: time

##### leaveAt Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### leaveAtReturn

`leaveAtReturn`

- is optional
- type: time

##### leaveAtReturn Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### modes

`modes`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#payload-known-values).

##### modes Known Values

| Value            | Description |
| ---------------- | ----------- |
| `PUBLIC_TRANSIT` |             |
| `TAXI`           |             |
| `CAR`            |             |
| `WALK`           |             |
| `BICYCLE`        |             |
| `BICYCLE_RENT`   |             |

#### options

`options`

- is optional
- type: `object`

##### options Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### to

`to`

- is **required**
- type: shortLocationString

##### to Type

- [shortLocationString](units-geo.md) –
  `http://maasglobal.com/core/components/units-geo.json#/definitions/shortLocationString`

#### toAddress

Componentized to address

`toAddress`

- is optional
- type: componentAddress

##### toAddress Type

- [componentAddress](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/componentAddress`

#### toName

`toName`

- is optional
- type: placeName

##### toName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

#### toStationId

`toStationId`

- is optional
- type: id

##### toStationId Type

- [id](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/id`

#### transitMode

`transitMode`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#payload-known-values).

##### transitMode Known Values

| Value    | Description |
| -------- | ----------- |
| `TRAIN`  |             |
| `BUS`    |             |
| `SUBWAY` |             |
| `TRAM`   |             |
| `RAIL`   |             |
