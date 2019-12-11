# request Schema

```
http://maasglobal.com/tsp/bookings-read-by-id/request.json
```

Request schema for getting a specific booking with a TSP ID from a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/booking-read-by-id/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/bookings-read-by-id/request.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`

# request Properties

| Property        | Type     | Required     | Nullable | Defined by            |
| --------------- | -------- | ------------ | -------- | --------------------- |
| [query](#query) | `object` | Optional     | No       | request (this schema) |
| [tspId](#tspid) | `string` | **Required** | No       | request (this schema) |

## query

Debug info

`query`

- is optional
- type: `object`
- defined in this schema

### query Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## tspId

`tspId`

- is **required**
- type: `string`
- defined in this schema

### tspId Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters
