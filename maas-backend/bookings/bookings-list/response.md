# response Schema

```
http://maasglobal.com/maas-backend/bookings/bookings-list/response.json
```

Response schema for bookings-list

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                         |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/bookings/bookings-list/response.json](response.json) |

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [bookings](#bookings) | booking  | **Required** | No       | response (this schema) |
| [debug](#debug)       | `object` | Optional     | No       | response (this schema) |

## bookings

`bookings`

- is **required**
- type: booking
- at least `0` items in the array
- defined in this schema

### bookings Type

Array type: booking

All items must be of the type:

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

