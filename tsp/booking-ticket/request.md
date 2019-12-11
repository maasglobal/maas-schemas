# request Schema

```
http://maasglobal.com/tsp/bookings-ticket/request.json
```

Request schema for retrieving a ticket from booking through a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/booking-ticket/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/bookings-ticket/request.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`

# request Properties

| Property          | Type     | Required     | Nullable | Defined by                                 |
| ----------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [ticket](#ticket) | complex  | **Required** | No       | request (this schema)                      |
| [token](#token)   | `object` | **Required** | No       | request (this schema)                      |
| [tspId](#tspid)   | `string` | **Required** | No       | request (this schema)                      |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties |

## ticket

Ticket path.

`ticket`

- is **required**
- type: complex
- defined in this schema

### ticket Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5Ba-z%5D%5C.%5Bsvg%7Chtml%7Cpdf%5D)):

```regex
[a-z]\.[svg|html|pdf]
```

#### Option 2

Array type:

All items must be of the type: `string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5Ba-z%5D%5C.%5Bsvg%7Chtml%7Cpdf%5D)):

```regex
[a-z]\.[svg|html|pdf]
```

## token

The validity token (such as booking ID, travel ticket etc.) that MaaS clients will display to validate the trip when
starting the leg.

`token`

- is **required**
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
