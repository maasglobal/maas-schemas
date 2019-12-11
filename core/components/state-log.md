# state-log Schema

```
http://maasglobal.com/core/components/state-log.json
```

Set of booking state transitions

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/components/state-log.json](state-log.json) |

# state-log Definitions

| Property                | Type         | Group                                                                                      |
| ----------------------- | ------------ | ------------------------------------------------------------------------------------------ |
| [invalid](#invalid)     | `boolean`    | `http://maasglobal.com/core/components/state-log.json#/definitions/bookingStateTransition` |
| [newState](#newstate)   | bookingState | `http://maasglobal.com/core/components/state-log.json#/definitions/bookingStateTransition` |
| [oldState](#oldstate)   | bookingState | `http://maasglobal.com/core/components/state-log.json#/definitions/bookingStateTransition` |
| [reason](#reason)       | `object`     | `http://maasglobal.com/core/components/state-log.json#/definitions/bookingStateTransition` |
| [timestamp](#timestamp) | complex      | `http://maasglobal.com/core/components/state-log.json#/definitions/bookingStateTransition` |

## invalid

`invalid`

- is optional
- type: `boolean`
- defined in this schema

### invalid Type

`boolean`

## newState

`newState`

- is **required**
- type: bookingState
- defined in this schema

### newState Type

- [bookingState](state.md) – `http://maasglobal.com/core/components/state.json#/definitions/bookingState`

## oldState

`oldState`

- is **required**
- type: bookingState
- defined in this schema

### oldState Type

- [bookingState](state.md) – `http://maasglobal.com/core/components/state.json#/definitions/bookingState`

## reason

`reason`

- is optional
- type: `object`
- defined in this schema

### reason Type

`object` with following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `errorCode` | number | Optional |
| `text`      | string | Optional |

#### errorCode

`errorCode`

- is optional
- type: `number`

##### errorCode Type

`number`

#### text

`text`

- is optional
- type: `string`

##### text Type

`string`

## timestamp

`timestamp`

- is **required**
- type: complex
- defined in this schema

### timestamp Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### Option 2

- [obsoleteTime](state-log.md) – `#/definitions/obsoleteTime`
