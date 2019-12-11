# request Schema

```
http://maasglobal.com/tsp/bookings-cancel/request.json
```

Request schema for cancelling a booking through a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/booking-cancel/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/bookings-cancel/request.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`

# request Properties

| Property        | Type     | Required     | Nullable | Defined by            |
| --------------- | -------- | ------------ | -------- | --------------------- |
| [tspId](#tspid) | `string` | **Required** | No       | request (this schema) |

## tspId

`tspId`

- is **required**
- type: `string`
- defined in this schema

### tspId Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters
