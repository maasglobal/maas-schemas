# remote-request Schema

```
http://maasglobal.com/tsp/webhooks-bookings-update/remote-request.json
```

Remote request schema, e.g. how TSP should call MaaS-backend

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/webhooks-bookings-update/remote-request.json](remote-request.json) |

## Schema Hierarchy

- remote-request `http://maasglobal.com/tsp/webhooks-bookings-update/remote-request.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`
  - [booking-option](../../core/booking-option.md) `http://maasglobal.com/core/booking-option.json`
  - [booking-meta](../../core/booking-meta.md) `http://maasglobal.com/core/booking-meta.json`

# remote-request Properties

| Property        | Type         | Required     | Nullable | Defined by                   |
| --------------- | ------------ | ------------ | -------- | ---------------------------- |
| [cost](#cost)   | cost         | Optional     | No       | remote-request (this schema) |
| [leg](#leg)     | `object`     | Optional     | No       | remote-request (this schema) |
| [meta](#meta)   | booking-meta | Optional     | No       | remote-request (this schema) |
| [state](#state) | `enum`       | **Required** | No       | remote-request (this schema) |
| [terms](#terms) | terms        | Optional     | No       | remote-request (this schema) |
| [token](#token) | `object`     | Optional     | No       | remote-request (this schema) |
| [tspId](#tspid) | `string`     | **Required** | No       | remote-request (this schema) |

## cost

`cost`

- is optional
- type: cost
- defined in this schema

### cost Type

- [cost](booking.md) – `http://maasglobal.com/core/components/cost.json`

## leg

A leg delta, containing any subset of the valid properties

`leg`

- is optional
- type: `object`
- defined in this schema

### leg Type

`object` with following properties:

| Property         | Type | Required |
| ---------------- | ---- | -------- |
| `departureDelay` |      | Optional |
| `endTime`        |      | Optional |
| `from`           |      | Optional |
| `mode`           |      | Optional |
| `startTime`      |      | Optional |
| `to`             |      | Optional |

#### departureDelay

`departureDelay`

- is optional
- type: duration

##### departureDelay Type

- [duration](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/duration`

#### endTime

`endTime`

- is optional
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### from

`from`

- is optional
- type: place

##### from Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

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
- type: place

##### to Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

## meta

`meta`

- is optional
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](../../core/booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

## state

`state`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#state-known-values).

### state Known Values

| Value       | Description |
| ----------- | ----------- |
| `RESERVED`  |             |
| `CONFIRMED` |             |
| `ACTIVATED` |             |
| `EXPIRED`   |             |
| `CANCELLED` |             |
| `REJECTED`  |             |

## terms

`terms`

- is optional
- type: terms
- defined in this schema

### terms Type

- [terms](booking.md) – `http://maasglobal.com/core/components/terms.json`

## token

The validity token (such as booking ID, travel ticket etc.) that MaaS clients will display to validate the trip when
starting the leg.

`token`

- is optional
- type: `object`
- defined in this schema

### token Type

`object` with following properties:

| Property           | Type   | Required |
| ------------------ | ------ | -------- |
| `data`             | object | Optional |
| `meta`             | object | Optional |
| `validityDuration` | object | Optional |

#### data

Arbitrary ticket data for the client

`data`

- is optional
- type: `object`

##### data Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### meta

Arbitrary metadata the TSP may pass along the ticket to the client (e.g. a booking code, base64 encoded binary)

`meta`

- is optional
- type: `object`

##### meta Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### validityDuration

The rules that MaaS will interpret to schedule, re-validate or cancel the booking.

`validityDuration`

- is optional
- type: `object`

##### validityDuration Type

`object` with following properties:

| Property    | Type | Required |
| ----------- | ---- | -------- |
| `endTime`   |      | Optional |
| `startTime` |      | Optional |

#### endTime

The finishing time the ticket is valid for

`endTime`

- is optional
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### startTime

The starting time from which the ticket is valid

`startTime`

- is optional
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## tspId

`tspId`

- is **required**
- type: `string`
- defined in this schema

### tspId Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters
