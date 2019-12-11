# response Schema

```
http://maasglobal.com/maas-backend/bookings/v2/bookings-create/response.json
```

Response schema for bookings-create v2

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/bookings/v2/bookings-create/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/bookings/v2/bookings-create/response.json`
  - [booking](../../../../core/booking.md) `http://maasglobal.com/core/booking.json`

# response Properties

| Property                                | Type     | Required     | Nullable | Defined by             |
| --------------------------------------- | -------- | ------------ | -------- | ---------------------- |
| [booking](#booking)                     | booking  | **Required** | No       | response (this schema) |
| [debug](#debug)                         | `object` | Optional     | No       | response (this schema) |
| [paymentParameters](#paymentparameters) | `object` | Optional     | No       | response (this schema) |

## booking

`booking`

- is **required**
- type: booking
- defined in this schema

### booking Type

- [booking](../../../../core/booking.md) – `http://maasglobal.com/core/booking.json`

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## paymentParameters

Payment parameters for asynchronous payment methods

`paymentParameters`

- is optional
- type: `object`
- defined in this schema

### paymentParameters Type

`object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `avainpay` | anyOf  | Optional |
| `stripe`   | object | Optional |

#### avainpay

`avainpay`

- is optional
- type: avainpayPaymentParameters

##### avainpay Type

- [avainpayPaymentParameters](payment-parameters.md) –
  `http://maasglobal.com/core/components/payment-parameters.json#/definitions/avainpayPaymentParameters`

#### stripe

`stripe`

- is optional
- type: stripePaymentParameters

##### stripe Type

`object` with following properties:

| Property       | Type   | Required |
| -------------- | ------ | -------- |
| `bookingId`    |        | Optional |
| `clientSecret` | string | Optional |

#### bookingId

`bookingId`

- is optional
- type: uuid

##### bookingId Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

#### clientSecret

`clientSecret`

- is optional
- type: `string`

##### clientSecret Type

`string`

- minimum length: 1 characters
- maximum length: 1024 characters
