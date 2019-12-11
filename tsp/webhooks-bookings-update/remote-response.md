# remote-response Schema

```
http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json
```

Remote response schema, e.g. how MaaS-backend responds back to TSP

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [tsp/webhooks-bookings-update/remote-response.json](remote-response.json) |

# remote-response Definitions

| Property              | Type         | Group                                                                                               |
| --------------------- | ------------ | --------------------------------------------------------------------------------------------------- |
| [cost](#cost)         | cost         | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [customer](#customer) | customer     | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [id](#id)             | uuid         | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [leg](#leg)           | leg          | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [meta](#meta)         | booking-meta | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [state](#state)       | `enum`       | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [terms](#terms)       | terms        | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [token](#token)       | token        | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |
| [tspId](#tspid)       | tspId        | `http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json#/definitions/bookingDelta` |

## cost

`cost`

- is optional
- type: cost
- defined in this schema

### cost Type

- [cost](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/cost`

## customer

`customer`

- is optional
- type: customer
- defined in this schema

### customer Type

- [customer](booking-option.md) – `http://maasglobal.com/core/booking-option.json#/definitions/customer`

## id

`id`

- is optional
- type: uuid
- defined in this schema

### id Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## leg

`leg`

- is optional
- type: leg
- defined in this schema

### leg Type

- [leg](booking-option.md) – `http://maasglobal.com/core/booking-option.json#/definitions/leg`

## meta

`meta`

- is optional
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

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

- [terms](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/terms`

## token

`token`

- is optional
- type: token
- defined in this schema

### token Type

- [token](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/token`

## tspId

`tspId`

- is **required**
- type: tspId
- defined in this schema

### tspId Type

- [tspId](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/tspId`

# remote-response Properties

| Property            | Type     | Required | Nullable | Defined by                    |
| ------------------- | -------- | -------- | -------- | ----------------------------- |
| [booking](#booking) | `object` | Optional | No       | remote-response (this schema) |
| [debug](#debug)     | `object` | Optional | No       | remote-response (this schema) |

## booking

`booking`

- is optional
- type: `object`
- defined in this schema

### booking Type

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `cost`     |      | Optional     |
| `customer` |      | Optional     |
| `id`       |      | Optional     |
| `leg`      |      | Optional     |
| `meta`     |      | Optional     |
| `state`    |      | **Required** |
| `terms`    |      | Optional     |
| `token`    |      | Optional     |
| `tspId`    |      | **Required** |

#### cost

`cost`

- is optional
- type: cost

##### cost Type

- [cost](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/cost`

#### customer

`customer`

- is optional
- type: customer

##### customer Type

- [customer](booking-option.md) – `http://maasglobal.com/core/booking-option.json#/definitions/customer`

#### id

`id`

- is optional
- type: uuid

##### id Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

#### leg

`leg`

- is optional
- type: leg

##### leg Type

- [leg](booking-option.md) – `http://maasglobal.com/core/booking-option.json#/definitions/leg`

#### meta

`meta`

- is optional
- type: booking-meta

##### meta Type

- [booking-meta](booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

#### state

`state`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#booking-known-values).

##### state Known Values

| Value       | Description |
| ----------- | ----------- |
| `RESERVED`  |             |
| `CONFIRMED` |             |
| `ACTIVATED` |             |
| `EXPIRED`   |             |
| `CANCELLED` |             |
| `REJECTED`  |             |

#### terms

`terms`

- is optional
- type: terms

##### terms Type

- [terms](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/terms`

#### token

`token`

- is optional
- type: token

##### token Type

- [token](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/token`

#### tspId

`tspId`

- is **required**
- type: tspId

##### tspId Type

- [tspId](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/tspId`

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |

