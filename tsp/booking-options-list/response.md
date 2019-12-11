# response Schema

```
http://maasglobal.com/tsp/bookings-options-list/response.json
```

Response schema for getting options from a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/booking-options-list/response.json](response.json) |

# response Properties

| Property                  | Type           | Required     | Nullable | Defined by             |
| ------------------------- | -------------- | ------------ | -------- | ---------------------- |
| [additional](#additional) | `object`       | Optional     | No       | response (this schema) |
| [options](#options)       | booking-option | **Required** | No       | response (this schema) |

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

- [bike-station](../../core/components/bike-station.md) – `http://maasglobal.com/core/components/bike-station.json`

## options

`options`

- is **required**
- type: booking-option
- defined in this schema

### options Type

Array type: booking-option

All items must be of the type:

- [booking-option](../../core/booking-option.md) – `http://maasglobal.com/core/booking-option.json`
