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
| [reason](#reason)       | reason       | `http://maasglobal.com/core/components/state-log.json#/definitions/bookingStateTransition` |
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
- type: reason
- defined in this schema

### reason Type

- [reason](errors.md) – `http://maasglobal.com/core/components/errors.json#/definitions/reason`

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
