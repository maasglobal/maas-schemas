# request Schema

```
http://maasglobal.com/tsp/bookings-receipt/request.json
```

Request schema for getting a receipt for a specific booking

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/booking-receipt/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/bookings-receipt/request.json`
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
