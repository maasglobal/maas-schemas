# response Schema

```
http://maasglobal.com/maas-backend/booking-option-create/response.json
```

Response schema for booking-option-create

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [maas-backend/booking-option-create/response.json](response.json) |

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`object` with following properties:

| Property  | Type | Required     |
| --------- | ---- | ------------ |
| `booking` |      | **Required** |

#### booking

`booking`

- is **required**
- type: booking

##### booking Type

- [booking](booking.md) – `http://maasglobal.com/core/booking.json`

#### Condition 2

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `error`  | object | **Required** |

#### error

`error`

- is **required**
- type: `object`

##### error Type

`object` with following properties:

| Property  | Type   | Required |
| --------- | ------ | -------- |
| `message` | string | Optional |

#### message

A human readable error message (preferably in English)

`message`

- is optional
- type: `string`

##### message Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters
