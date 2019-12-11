# response Schema

```
http://maasglobal.com/maas-backend/bookings/bookings-agency-options/response.json
```

Response schema for bookings-agency-options

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [maas-backend/bookings/bookings-agency-options/response.json](response.json) |

# response Properties

| Property                  | Type     | Required     | Nullable | Defined by             |
| ------------------------- | -------- | ------------ | -------- | ---------------------- |
| [additional](#additional) | `object` | Optional     | No       | response (this schema) |
| [debug](#debug)           | `object` | Optional     | No       | response (this schema) |
| [options](#options)       | option   | **Required** | No       | response (this schema) |

## additional

`additional`

- is optional
- type: `object`
- defined in this schema

### additional Type

`object` with following properties:

| Property       | Type  | Required |
| -------------- | ----- | -------- |
| `bikeStations` | array | Optional |

#### bikeStations

`bikeStations`

- is optional
- type: bike-station

##### bikeStations Type

Array type: bike-station

All items must be of the type:

- [bike-station](../../../core/components/bike-station.md) – `http://maasglobal.com/core/components/bike-station.json`

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## options

`options`

- is **required**
- type: option
- defined in this schema

### options Type

Array type: option

All items must be of the type:

- [option](response.md) – `#/definitions/option`
