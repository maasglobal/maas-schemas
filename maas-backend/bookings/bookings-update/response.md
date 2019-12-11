# response Schema

```
http://maasglobal.com/maas-backend/bookings/bookings-update/response.json
```

Response schema for bookings-update

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                           |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/bookings/bookings-update/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/bookings/bookings-update/response.json`
  - [booking](../../../core/booking.md) `http://maasglobal.com/core/booking.json`

# response Properties

| Property            | Type     | Required     | Nullable | Defined by             |
| ------------------- | -------- | ------------ | -------- | ---------------------- |
| [booking](#booking) | booking  | **Required** | No       | response (this schema) |
| [debug](#debug)     | `object` | Optional     | No       | response (this schema) |

## booking

`booking`

- is **required**
- type: booking
- defined in this schema

### booking Type

- [booking](../../../core/booking.md) – `http://maasglobal.com/core/booking.json`

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |

