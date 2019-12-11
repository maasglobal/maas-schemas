# booking-meta Schema

```
http://maasglobal.com/core/booking-meta.json
```

TSP/mode-specific additional information. The TSP adapter should set MODE\_{mode} with defined data, otherwise 'meta'
can be used freely.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/booking-meta.json](booking-meta.json) |

## Schema Hierarchy

- booking-meta `http://maasglobal.com/core/booking-meta.json`
  - [MODE_WALK](modes/MODE_WALK.md) `http://maasglobal.com/core/modes/MODE_WALK.json`
  - [MODE_BICYCLE](modes/MODE_BICYCLE.md) `http://maasglobal.com/core/modes/MODE_BICYCLE.json`
  - [MODE_CAR](modes/MODE_CAR.md) `http://maasglobal.com/core/modes/MODE_CAR.json`
  - [MODE_TRAM](modes/MODE_TRAM.md) `http://maasglobal.com/core/modes/MODE_TRAM.json`
  - [MODE_SUBWAY](modes/MODE_SUBWAY.md) `http://maasglobal.com/core/modes/MODE_SUBWAY.json`
  - [MODE_RAIL](modes/MODE_RAIL.md) `http://maasglobal.com/core/modes/MODE_RAIL.json`
  - [MODE_BUS](modes/MODE_BUS.md) `http://maasglobal.com/core/modes/MODE_BUS.json`
  - [MODE_FERRY](modes/MODE_FERRY.md) `http://maasglobal.com/core/modes/MODE_FERRY.json`
  - [MODE_CABLE_CAR](modes/MODE_CABLE_CAR.md) `http://maasglobal.com/core/modes/MODE_CABLE_CAR.json`
  - [MODE_GONDOLA](modes/MODE_GONDOLA.md) `http://maasglobal.com/core/modes/MODE_GONDOLA.json`
  - [MODE_FUNICULAR](modes/MODE_FUNICULAR.md) `http://maasglobal.com/core/modes/MODE_FUNICULAR.json`
  - [MODE_SHARED_BICYCLE](modes/MODE_SHARED_BICYCLE.md) `http://maasglobal.com/core/modes/MODE_SHARED_BICYCLE.json`
  - [MODE_SHARED_CAR](modes/MODE_SHARED_CAR.md) `http://maasglobal.com/core/modes/MODE_SHARED_CAR.json`
  - [MODE_TRANSIT](modes/MODE_TRANSIT.md) `http://maasglobal.com/core/modes/MODE_TRANSIT.json`
  - [MODE_TRAIN](modes/MODE_TRAIN.md) `http://maasglobal.com/core/modes/MODE_TRAIN.json`
  - [MODE_TRAINISH](modes/MODE_TRAINISH.md) `http://maasglobal.com/core/modes/MODE_TRAINISH.json`
  - [MODE_BUSISH](modes/MODE_BUSISH.md) `http://maasglobal.com/core/modes/MODE_BUSISH.json`
  - [MODE_TAXI](modes/MODE_TAXI.md) `http://maasglobal.com/core/modes/MODE_TAXI.json`
  - [MODE_SCOOTER](modes/MODE_SCOOTER.md) `http://maasglobal.com/core/modes/MODE_SCOOTER.json`

# booking-meta Properties

| Property                                    | Type                | Required   | Nullable | Defined by                                 |
| ------------------------------------------- | ------------------- | ---------- | -------- | ------------------------------------------ |
| [MODE_BICYCLE](#mode_bicycle)               | MODE_BICYCLE        | Optional   | No       | booking-meta (this schema)                 |
| [MODE_BUS](#mode_bus)                       | MODE_BUS            | Optional   | No       | booking-meta (this schema)                 |
| [MODE_BUSISH](#mode_busish)                 | MODE_BUSISH         | Optional   | No       | booking-meta (this schema)                 |
| [MODE_CABLE_CAR](#mode_cable_car)           | MODE_CABLE_CAR      | Optional   | No       | booking-meta (this schema)                 |
| [MODE_CAR](#mode_car)                       | MODE_CAR            | Optional   | No       | booking-meta (this schema)                 |
| [MODE_FERRY](#mode_ferry)                   | MODE_FERRY          | Optional   | No       | booking-meta (this schema)                 |
| [MODE_FUNICULAR](#mode_funicular)           | MODE_FUNICULAR      | Optional   | No       | booking-meta (this schema)                 |
| [MODE_GONDOLA](#mode_gondola)               | MODE_GONDOLA        | Optional   | No       | booking-meta (this schema)                 |
| [MODE_RAIL](#mode_rail)                     | MODE_RAIL           | Optional   | No       | booking-meta (this schema)                 |
| [MODE_SCOOTER](#mode_scooter)               | MODE_SCOOTER        | Optional   | No       | booking-meta (this schema)                 |
| [MODE_SHARED_BICYCLE](#mode_shared_bicycle) | MODE_SHARED_BICYCLE | Optional   | No       | booking-meta (this schema)                 |
| [MODE_SHARED_CAR](#mode_shared_car)         | MODE_SHARED_CAR     | Optional   | No       | booking-meta (this schema)                 |
| [MODE_SUBWAY](#mode_subway)                 | MODE_SUBWAY         | Optional   | No       | booking-meta (this schema)                 |
| [MODE_TAXI](#mode_taxi)                     | MODE_TAXI           | Optional   | No       | booking-meta (this schema)                 |
| [MODE_TRAIN](#mode_train)                   | MODE_TRAIN          | Optional   | No       | booking-meta (this schema)                 |
| [MODE_TRAINISH](#mode_trainish)             | MODE_TRAINISH       | Optional   | No       | booking-meta (this schema)                 |
| [MODE_TRAM](#mode_tram)                     | MODE_TRAM           | Optional   | No       | booking-meta (this schema)                 |
| [MODE_TRANSIT](#mode_transit)               | MODE_TRANSIT        | Optional   | No       | booking-meta (this schema)                 |
| [MODE_WALK](#mode_walk)                     | MODE_WALK           | Optional   | No       | booking-meta (this schema)                 |
| `*`                                         | any                 | Additional | Yes      | this schema _allows_ additional properties |

## MODE_BICYCLE

`MODE_BICYCLE`

- is optional
- type: MODE_BICYCLE
- defined in this schema

### MODE_BICYCLE Type

- [MODE_BICYCLE](modes/MODE_BICYCLE.md) – `http://maasglobal.com/core/modes/MODE_BICYCLE.json`

## MODE_BUS

`MODE_BUS`

- is optional
- type: MODE_BUS
- defined in this schema

### MODE_BUS Type

- [MODE_BUS](modes/MODE_BUS.md) – `http://maasglobal.com/core/modes/MODE_BUS.json`

## MODE_BUSISH

`MODE_BUSISH`

- is optional
- type: MODE_BUSISH
- defined in this schema

### MODE_BUSISH Type

- [MODE_BUSISH](modes/MODE_BUSISH.md) – `http://maasglobal.com/core/modes/MODE_BUSISH.json`

## MODE_CABLE_CAR

`MODE_CABLE_CAR`

- is optional
- type: MODE_CABLE_CAR
- defined in this schema

### MODE_CABLE_CAR Type

- [MODE_CABLE_CAR](modes/MODE_CABLE_CAR.md) – `http://maasglobal.com/core/modes/MODE_CABLE_CAR.json`

## MODE_CAR

`MODE_CAR`

- is optional
- type: MODE_CAR
- defined in this schema

### MODE_CAR Type

- [MODE_CAR](modes/MODE_CAR.md) – `http://maasglobal.com/core/modes/MODE_CAR.json`

## MODE_FERRY

`MODE_FERRY`

- is optional
- type: MODE_FERRY
- defined in this schema

### MODE_FERRY Type

- [MODE_FERRY](modes/MODE_FERRY.md) – `http://maasglobal.com/core/modes/MODE_FERRY.json`

## MODE_FUNICULAR

`MODE_FUNICULAR`

- is optional
- type: MODE_FUNICULAR
- defined in this schema

### MODE_FUNICULAR Type

- [MODE_FUNICULAR](modes/MODE_FUNICULAR.md) – `http://maasglobal.com/core/modes/MODE_FUNICULAR.json`

## MODE_GONDOLA

`MODE_GONDOLA`

- is optional
- type: MODE_GONDOLA
- defined in this schema

### MODE_GONDOLA Type

- [MODE_GONDOLA](modes/MODE_GONDOLA.md) – `http://maasglobal.com/core/modes/MODE_GONDOLA.json`

## MODE_RAIL

`MODE_RAIL`

- is optional
- type: MODE_RAIL
- defined in this schema

### MODE_RAIL Type

- [MODE_RAIL](modes/MODE_RAIL.md) – `http://maasglobal.com/core/modes/MODE_RAIL.json`

## MODE_SCOOTER

`MODE_SCOOTER`

- is optional
- type: MODE_SCOOTER
- defined in this schema

### MODE_SCOOTER Type

- [MODE_SCOOTER](modes/MODE_SCOOTER.md) – `http://maasglobal.com/core/modes/MODE_SCOOTER.json`

## MODE_SHARED_BICYCLE

`MODE_SHARED_BICYCLE`

- is optional
- type: MODE_SHARED_BICYCLE
- defined in this schema

### MODE_SHARED_BICYCLE Type

- [MODE_SHARED_BICYCLE](modes/MODE_SHARED_BICYCLE.md) – `http://maasglobal.com/core/modes/MODE_SHARED_BICYCLE.json`

## MODE_SHARED_CAR

`MODE_SHARED_CAR`

- is optional
- type: MODE_SHARED_CAR
- defined in this schema

### MODE_SHARED_CAR Type

- [MODE_SHARED_CAR](modes/MODE_SHARED_CAR.md) – `http://maasglobal.com/core/modes/MODE_SHARED_CAR.json`

## MODE_SUBWAY

`MODE_SUBWAY`

- is optional
- type: MODE_SUBWAY
- defined in this schema

### MODE_SUBWAY Type

- [MODE_SUBWAY](modes/MODE_SUBWAY.md) – `http://maasglobal.com/core/modes/MODE_SUBWAY.json`

## MODE_TAXI

`MODE_TAXI`

- is optional
- type: MODE_TAXI
- defined in this schema

### MODE_TAXI Type

- [MODE_TAXI](modes/MODE_TAXI.md) – `http://maasglobal.com/core/modes/MODE_TAXI.json`

## MODE_TRAIN

`MODE_TRAIN`

- is optional
- type: MODE_TRAIN
- defined in this schema

### MODE_TRAIN Type

- [MODE_TRAIN](modes/MODE_TRAIN.md) – `http://maasglobal.com/core/modes/MODE_TRAIN.json`

## MODE_TRAINISH

`MODE_TRAINISH`

- is optional
- type: MODE_TRAINISH
- defined in this schema

### MODE_TRAINISH Type

- [MODE_TRAINISH](modes/MODE_TRAINISH.md) – `http://maasglobal.com/core/modes/MODE_TRAINISH.json`

## MODE_TRAM

`MODE_TRAM`

- is optional
- type: MODE_TRAM
- defined in this schema

### MODE_TRAM Type

- [MODE_TRAM](modes/MODE_TRAM.md) – `http://maasglobal.com/core/modes/MODE_TRAM.json`

## MODE_TRANSIT

`MODE_TRANSIT`

- is optional
- type: MODE_TRANSIT
- defined in this schema

### MODE_TRANSIT Type

- [MODE_TRANSIT](modes/MODE_TRANSIT.md) – `http://maasglobal.com/core/modes/MODE_TRANSIT.json`

## MODE_WALK

`MODE_WALK`

- is optional
- type: MODE_WALK
- defined in this schema

### MODE_WALK Type

- [MODE_WALK](modes/MODE_WALK.md) – `http://maasglobal.com/core/modes/MODE_WALK.json`
