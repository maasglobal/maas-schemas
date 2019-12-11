# MODE_BICYCLE Schema

```
http://maasglobal.com/core/modes/MODE_BICYCLE.json
```

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/modes/MODE_BICYCLE.json](MODE_BICYCLE.json) |

## Schema Hierarchy

- MODE_BICYCLE `http://maasglobal.com/core/modes/MODE_BICYCLE.json`
  - [bike-station](../components/bike-station.md) `http://maasglobal.com/core/components/bike-station.json`

# MODE_BICYCLE Properties

| Property                            | Type         | Required   | Nullable | Defined by                                 |
| ----------------------------------- | ------------ | ---------- | -------- | ------------------------------------------ |
| [bike](#bike)                       | `object`     | Optional   | No       | MODE_BICYCLE (this schema)                 |
| [pickupStation](#pickupstation)     | bike-station | Optional   | No       | MODE_BICYCLE (this schema)                 |
| [pickupStationId](#pickupstationid) | `string`     | Optional   | No       | MODE_BICYCLE (this schema)                 |
| [returnStation](#returnstation)     | bike-station | Optional   | No       | MODE_BICYCLE (this schema)                 |
| [returnStationId](#returnstationid) | `string`     | Optional   | No       | MODE_BICYCLE (this schema)                 |
| `*`                                 | any          | Additional | Yes      | this schema _allows_ additional properties |

## bike

`bike`

- is optional
- type: `object`
- defined in this schema

### bike Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |
| `type`   | string | Optional     |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### type

`type`

- is optional
- type: `string`

##### type Type

`string`

## pickupStation

`pickupStation`

- is optional
- type: bike-station
- defined in this schema

### pickupStation Type

- [bike-station](../components/bike-station.md) – `http://maasglobal.com/core/components/bike-station.json`

## pickupStationId

`pickupStationId`

- is optional
- type: `string`
- defined in this schema

### pickupStationId Type

`string`

## returnStation

`returnStation`

- is optional
- type: bike-station
- defined in this schema

### returnStation Type

- [bike-station](../components/bike-station.md) – `http://maasglobal.com/core/components/bike-station.json`

## returnStationId

`returnStationId`

- is optional
- type: `string`
- defined in this schema

### returnStationId Type

`string`
