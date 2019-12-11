# response Schema

```
http://maasglobal.com/maas-backend/profile/profile-devices-put/response.json
```

Response schema for profile-devices-put

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [maas-backend/profile/profile-devices-put/response.json](response.json) |

# response Definitions

| Property                              | Type     | Group                                                                                              |
| ------------------------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| [deviceIdentifier](#deviceidentifier) | uuid     | `http://maasglobal.com/maas-backend/profile/profile-devices-put/response.json#/definitions/device` |
| [devicePushToken](#devicepushtoken)   | `string` | `http://maasglobal.com/maas-backend/profile/profile-devices-put/response.json#/definitions/device` |
| [deviceType](#devicetype)             | `enum`   | `http://maasglobal.com/maas-backend/profile/profile-devices-put/response.json#/definitions/device` |

## deviceIdentifier

`deviceIdentifier`

- is **required**
- type: uuid
- defined in this schema

### deviceIdentifier Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## devicePushToken

Push token - 32 chars in iOS, up to 255 in Android

`devicePushToken`

- is **required**
- type: `string`
- defined in this schema

### devicePushToken Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E.%7B32%2C255%7D%24)):

```regex
^.{32,255}$
```

## deviceType

`deviceType`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#devicetype-known-values).

### deviceType Known Values

| Value     | Description |
| --------- | ----------- |
| `iOS`     |             |
| `Android` |             |

# response Properties

| Property          | Type     | Required     | Nullable | Defined by             |
| ----------------- | -------- | ------------ | -------- | ---------------------- |
| [debug](#debug)   | `object` | Optional     | No       | response (this schema) |
| [device](#device) | `object` | **Required** | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## device

`device`

- is **required**
- type: `object`
- defined in this schema

### device Type

`object` with following properties:

| Property           | Type   | Required     |
| ------------------ | ------ | ------------ |
| `deviceIdentifier` |        | **Required** |
| `devicePushToken`  | string | **Required** |
| `deviceType`       | string | **Required** |

#### deviceIdentifier

`deviceIdentifier`

- is **required**
- type: uuid

##### deviceIdentifier Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

#### devicePushToken

Push token - 32 chars in iOS, up to 255 in Android

`devicePushToken`

- is **required**
- type: `string`

##### devicePushToken Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E.%7B32%2C255%7D%24)):

```regex
^.{32,255}$
```

#### deviceType

`deviceType`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#device-known-values).

##### deviceType Known Values

| Value     | Description |
| --------- | ----------- |
| `iOS`     |             |
| `Android` |             |
