# request Schema

```
http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json
```

Request schema for bookings-agency-options

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                 |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [maas-backend/bookings/bookings-agency-options/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Definitions

| Property                                | Type                | Group                                                                                                   |
| --------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| [agencyId](#agencyid)                   | agencyId            | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [bookingIdToExtend](#bookingidtoextend) | uuid                | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [endTime](#endtime)                     | time                | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [from](#from)                           | shortLocationString | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [fromAddress](#fromaddress)             | componentAddress    | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [fromName](#fromname)                   | placeName           | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [fromRadius](#fromradius)               | distance            | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [mode](#mode)                           | travel-mode         | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [startTime](#starttime)                 | time                | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [to](#to)                               | shortLocationString | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [toAddress](#toaddress)                 | componentAddress    | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [toName](#toname)                       | placeName           | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |
| [toRadius](#toradius)                   | distance            | `http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json#/definitions/payload` |

## agencyId

`agencyId`

- is optional
- type: agencyId
- defined in this schema

### agencyId Type

- [agencyId](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

## bookingIdToExtend

bookingId to fetch possible extension options for

`bookingIdToExtend`

- is optional
- type: uuid
- defined in this schema

### bookingIdToExtend Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## endTime

`endTime`

- is optional
- type: time
- defined in this schema

### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## from

`from`

- is optional
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

The human understandable name for 'from'

`fromName`

- is optional
- type: placeName
- defined in this schema

### fromName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

## fromRadius

`fromRadius`

- is optional
- type: distance
- defined in this schema

### fromRadius Type

- [distance](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/distance`

## mode

`mode`

- is optional
- type: travel-mode
- defined in this schema

### mode Type

- [travel-mode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

## startTime

`startTime`

- is optional
- type: time
- defined in this schema

### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## to

`to`

- is optional
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

The human understandable name for 'to'

`toName`

- is optional
- type: placeName
- defined in this schema

### toName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

## toRadius

`toRadius`

- is optional
- type: distance
- defined in this schema

### toRadius Type

- [distance](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/distance`

# request Properties

| Property                  | Type     | Required     | Nullable | Defined by            |
| ------------------------- | -------- | ------------ | -------- | --------------------- |
| [headers](#headers)       | `object` | **Required** | No       | request (this schema) |
| [identityId](#identityid) | complex  | **Required** | No       | request (this schema) |
| [payload](#payload)       | `object` | **Required** | No       | request (this schema) |

## headers

`headers`

- is **required**
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

| Property            | Type | Required |
| ------------------- | ---- | -------- |
| `agencyId`          |      | Optional |
| `bookingIdToExtend` |      | Optional |
| `endTime`           |      | Optional |
| `from`              |      | Optional |
| `fromAddress`       |      | Optional |
| `fromName`          |      | Optional |
| `fromRadius`        |      | Optional |
| `mode`              |      | Optional |
| `startTime`         |      | Optional |
| `to`                |      | Optional |
| `toAddress`         |      | Optional |
| `toName`            |      | Optional |
| `toRadius`          |      | Optional |

#### agencyId

`agencyId`

- is optional
- type: agencyId

##### agencyId Type

- [agencyId](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

#### bookingIdToExtend

bookingId to fetch possible extension options for

`bookingIdToExtend`

- is optional
- type: uuid

##### bookingIdToExtend Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

#### endTime

`endTime`

- is optional
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### from

`from`

- is optional
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

The human understandable name for 'from'

`fromName`

- is optional
- type: placeName

##### fromName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

#### fromRadius

`fromRadius`

- is optional
- type: distance

##### fromRadius Type

- [distance](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/distance`

#### mode

`mode`

- is optional
- type: travel-mode

##### mode Type

- [travel-mode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

#### startTime

`startTime`

- is optional
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### to

`to`

- is optional
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

The human understandable name for 'to'

`toName`

- is optional
- type: placeName

##### toName Type

- [placeName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/placeName`

#### toRadius

`toRadius`

- is optional
- type: distance

##### toRadius Type

- [distance](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/distance`
