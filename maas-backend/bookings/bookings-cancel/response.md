# response Schema

```
http://maasglobal.com/maas-backend/bookings/bookings-cancel/response.json
```

Response schema for bookings-retrieve

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                           |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/bookings/bookings-cancel/response.json](response.json) |

# response Properties

| Property            | Type     | Required     | Nullable | Defined by             |
| ------------------- | -------- | ------------ | -------- | ---------------------- |
| [booking](#booking) | complex  | **Required** | No       | response (this schema) |
| [debug](#debug)     | `object` | Optional     | No       | response (this schema) |

## booking

`booking`

- is **required**
- type: complex
- defined in this schema

### booking Type

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [booking](booking.md) – `http://maasglobal.com/core/booking.json`

#### Requirement 2

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `state`  | string | Optional |

#### state

`state`

- is optional
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#-known-values).

##### state Known Values

| Value                   | Description |
| ----------------------- | ----------- |
| `CANCELLED`             |             |
| `CANCELLED_WITH_ERRORS` |             |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |

