# iot-thing-shadow Schema

```
http://maasglobal.com/core/iot-thing-shadow.json
```

Schema for MaaS thing shadow

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/iot-thing-shadow.json](iot-thing-shadow.json) |

# iot-thing-shadow Properties

| Property              | Type     | Required   | Nullable | Defined by                                 |
| --------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [desired](#desired)   | `object` | Optional   | No       | iot-thing-shadow (this schema)             |
| [reported](#reported) | `object` | Optional   | No       | iot-thing-shadow (this schema)             |
| `*`                   | any      | Additional | Yes      | this schema _allows_ additional properties |

## desired

`desired`

- is optional
- type: `object`
- defined in this schema

### desired Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## reported

`reported`

- is optional
- type: `object`
- defined in this schema

### reported Type

`object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `leg`      | object | Optional |
| `location` | object | Optional |

#### leg

`leg`

- is optional
- type: `object`

##### leg Type

`object` with following properties:

| Property    | Type    | Required |
| ----------- | ------- | -------- |
| `id`        | string  | Optional |
| `state`     | string  | Optional |
| `timestamp` | integer | Optional |

#### id

Universally unique identifier, see https://en.wikipedia.org/wiki/Universally_unique_identifier

`id`

- is optional
- type: uuid

##### id Type

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

##### id Example

```json
4828507e-683f-41bf-9d87-689808fbf958
```

#### state

The life-cycle state of a leg

`state`

- is optional
- type: legState

The value of this property **must** be equal to one of the [known values below](#reported-known-values).

##### state Known Values

| Value | Description |
| ----- | ----------- |


#### timestamp

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`timestamp`

- is optional
- type: time

##### timestamp Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### location

`location`

- is optional
- type: `object`

##### location Type

`object` with following properties:

| Property    | Type    | Required |
| ----------- | ------- | -------- |
| `lat`       | number  | Optional |
| `legId`     | string  | Optional |
| `lon`       | number  | Optional |
| `timestamp` | integer | Optional |

#### lat

Geographic latitude (north-south axis) in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System

`lat`

- is optional
- type: latitude

##### lat Type

`number`

- minimum value: `-90`
- maximum value: `90`

#### legId

Universally unique identifier, see https://en.wikipedia.org/wiki/Universally_unique_identifier

`legId`

- is optional
- type: uuid

##### legId Type

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

##### legId Example

```json
4828507e-683f-41bf-9d87-689808fbf958
```

#### lon

Geographic longitude (east-west axis) in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System

`lon`

- is optional
- type: longitude

##### lon Type

`number`

- minimum value: `-180`
- maximum value: `180`

#### timestamp

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`timestamp`

- is optional
- type: time

##### timestamp Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`
