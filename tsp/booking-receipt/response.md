# response Schema

```
http://maasglobal.com/tsp/bookings-receipt/response.json
```

Response schema for getting a receipt for specific booking

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                         |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/booking-receipt/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/tsp/bookings-receipt/response.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`

# response Properties

| Property            | Type     | Required     | Nullable | Defined by             |
| ------------------- | -------- | ------------ | -------- | ---------------------- |
| [cost](#cost)       | cost     | **Required** | No       | response (this schema) |
| [receipt](#receipt) | `object` | Optional     | No       | response (this schema) |
| [tspId](#tspid)     | `string` | **Required** | No       | response (this schema) |

## cost

`cost`

- is **required**
- type: cost
- defined in this schema

### cost Type

- [cost](booking.md) – `http://maasglobal.com/core/components/cost.json`

## receipt

Receipt as received from TSP, could be stored for future reference.

`receipt`

- is optional
- type: `object`
- defined in this schema

### receipt Type

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
