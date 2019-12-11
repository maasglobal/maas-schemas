# authorization Schema

```
http://maasglobal.com/core/components/authorization.json
```

MaaS information about an authorization required to use a particular TSP

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                               |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/components/authorization.json](authorization.json) |

## Schema Hierarchy

- authorization `http://maasglobal.com/core/components/authorization.json`
  - [common](common.md) `http://maasglobal.com/core/components/common.json`
  - [units](units.md) `http://maasglobal.com/core/components/units.json`

# authorization Properties

| Property              | Type      | Required     | Nullable | Defined by                  |
| --------------------- | --------- | ------------ | -------- | --------------------------- |
| [agencyId](#agencyid) | `string`  | **Required** | No       | authorization (this schema) |
| [created](#created)   | `integer` | **Required** | No       | authorization (this schema) |
| [modified](#modified) | `integer` | Optional     | No       | authorization (this schema) |
| [state](#state)       | `enum`    | **Required** | No       | authorization (this schema) |
| [validTo](#validto)   | `integer` | **Required** | No       | authorization (this schema) |

## agencyId

`agencyId`

- is **required**
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## created

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`created`

- is **required**
- type: `integer`
- defined in this schema

### created Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## modified

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`modified`

- is optional
- type: `integer`
- defined in this schema

### modified Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## state

The state of an authorization

`state`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#state-known-values).

### state Known Values

| Value     | Description |
| --------- | ----------- |
| `VALID`   |             |
| `INVALID` |             |

## validTo

Epoch when the authorization will be invalid

`validTo`

- is **required**
- type: `integer`
- defined in this schema

### validTo Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`
