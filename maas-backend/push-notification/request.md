# request Schema

```
http://maasglobal.com/maas-backend/push-notification/request.json
```

MaaS push notification request schema.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/push-notification/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/push-notification/request.json`
  - [units](../../core/components/units.md) `http://maasglobal.com/core/components/units.json`

# request Properties

| Property                  | Type      | Required     | Nullable | Defined by            |
| ------------------------- | --------- | ------------ | -------- | --------------------- |
| [badge](#badge)           | `integer` | **Required** | No       | request (this schema) |
| [data](#data)             | complex   | Optional     | No       | request (this schema) |
| [identityId](#identityid) | complex   | **Required** | No       | request (this schema) |
| [message](#message)       | `string`  | Optional     | No       | request (this schema) |
| [severity](#severity)     | `enum`    | **Required** | No       | request (this schema) |
| [sound](#sound)           | `string`  | Optional     | No       | request (this schema) |
| [title](#title)           | `string`  | Optional     | No       | request (this schema) |
| [type](#type)             | `enum`    | **Required** | No       | request (this schema) |

## badge

`badge`

- is **required**
- type: `integer`
- defined in this schema

### badge Type

`integer`

- minimum value: `0`
- maximum value: `9999`

## data

`data`

- is optional
- type: complex
- defined in this schema

### data Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`object` with following properties:

| Property     | Type  | Required     |
| ------------ | ----- | ------------ |
| `ids`        | array | **Required** |
| `objectType` |       | **Required** |

#### ids

`ids`

- is **required**
- type: uuid\* between `1` and `99` items in the array

##### ids Type

Array type: uuid

All items must be of the type:

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

#### objectType

`objectType`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#-known-values).

##### objectType Known Values

| Value       | Description |
| ----------- | ----------- |
| `Itinerary` |             |
| `Booking`   |             |

#### Condition 2

#### Condition 3

`object` with following properties:

| Property     | Type  | Required     |
| ------------ | ----- | ------------ |
| `ids`        | array | **Required** |
| `objectType` |       | **Required** |

#### ids

`ids`

- is **required**
- type: identityId\* between `1` and `1` items in the array

##### ids Type

Array type: identityId

All items must be of the type:

- [identityId](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

#### objectType

`objectType`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#-known-values).

##### objectType Known Values

| Value          | Description |
| -------------- | ----------- |
| `Profile`      |             |
| `Subscription` |             |

## identityId

`identityId`

- is **required**
- type: complex
- defined in this schema

### identityId Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`string`

All instances must conform to this regular expression

```regex
^[aepus]{2}-[\w]{4}-\d:[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$
```

- test example:
  [eu-west-1:4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5Baepus%5D%7B2%7D-%5B%5Cw%5D%7B4%7D-%5Cd%3A%5Ba-f%5Cd%5D%7B8%7D(-%5Ba-f%5Cd%5D%7B4%7D)%7B3%7D-%5Ba-f%5Cd%5D%7B12%7D%24&text=eu-west-1%3A4828507e-683f-41bf-9d87-689808fbf958>)

#### Option 2

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### identityId Examples

```json
"eu-west-1:4828507e-683f-41bf-9d87-689808fbf958"
```

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## message

`message`

- is optional
- type: `string`
- defined in this schema

### message Type

`string`

- minimum length: 2 characters
- maximum length: 256 characters

## severity

`severity`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#severity-known-values).

### severity Known Values

| Value         | Description |
| ------------- | ----------- |
| `Alert`       |             |
| `Warning`     |             |
| `Information` |             |

## sound

`sound`

- is optional
- type: `string`
- defined in this schema

### sound Type

`string`

- minimum length: 2 characters
- maximum length: 256 characters

## title

`title`

- is optional
- type: `string`
- defined in this schema

### title Type

`string`

- minimum length: 1 characters
- maximum length: 50 characters

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value                | Description |
| -------------------- | ----------- |
| `ObjectChange`       |             |
| `TripActivate`       |             |
| `InfoMessage`        |             |
| `ZendeskReply`       |             |
| `VerificationUpdate` |             |
