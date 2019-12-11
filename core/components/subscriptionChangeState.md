# subscriptionChangeState Schema

```
http://maasglobal.com/core/components/subscriptionChangeState.json
```

MaaS state schemas

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/components/subscriptionChangeState.json](subscriptionChangeState.json) |

## Schema Hierarchy

- subscriptionChangeState `http://maasglobal.com/core/components/subscriptionChangeState.json`
  - [units](units.md) `http://maasglobal.com/core/components/units.json`

# subscriptionChangeState Properties

| Property                  | Type      | Required     | Nullable | Defined by                                 |
| ------------------------- | --------- | ------------ | -------- | ------------------------------------------ |
| [created](#created)       | `integer` | Optional     | No       | subscriptionChangeState (this schema)      |
| [failureKey](#failurekey) | `enum`    | Optional     | No       | subscriptionChangeState (this schema)      |
| [id](#id)                 | `string`  | **Required** | No       | subscriptionChangeState (this schema)      |
| [state](#state)           | `enum`    | **Required** | No       | subscriptionChangeState (this schema)      |
| `*`                       | any       | Additional   | Yes      | this schema _allows_ additional properties |

## created

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`created`

- is optional
- type: `integer`
- defined in this schema

### created Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## failureKey

Failure key enum, identifying reason for the failure

`failureKey`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#failurekey-known-values).

### failureKey Known Values

| Value             | Description |
| ----------------- | ----------- |
| `UNKNOWN_ERROR`   |             |
| `NOT_ELIGIBLE`    |             |
| `EXISTING_TICKET` |             |

## id

Subscription change state id

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### id Example

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## state

State enum

`state`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#state-known-values).

### state Known Values

| Value         | Description |
| ------------- | ----------- |
| `IN_PROGRESS` |             |
| `COMPLETED`   |             |
| `FAILED`      |             |
