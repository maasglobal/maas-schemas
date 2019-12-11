# response Schema

```
http://maasglobal.com/maas-backend/customers/verification/status/response.json
```

MaaS customer verification status

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/verification/status/response.json](response.json) |

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [customer](#customer) | `object` | **Required** | No       | response (this schema) |

## customer

`customer`

- is **required**
- type: `object`
- defined in this schema

### customer Type

`object` with following properties:

| Property       | Type  | Required     |
| -------------- | ----- | ------------ |
| `verification` | array | **Required** |

#### verification

`verification`

- is **required**
- type: verification\* at least `0` items in the array

##### verification Type

Array type: verification

All items must be of the type: `object` with following properties:

| Property     | Type   | Required     |
| ------------ | ------ | ------------ |
| `agencyId`   |        | Optional     |
| `created`    |        | Optional     |
| `details`    | object | **Required** |
| `id`         | string | **Required** |
| `identityId` |        | **Required** |
| `modified`   |        | Optional     |
| `stateLog`   | array  | **Required** |
| `status`     | string | **Required** |
| `type`       | string | **Required** |
| `validFrom`  | string | Optional     |
| `validTo`    | string | Optional     |

#### agencyId

`agencyId`

- is optional
- type: agencyId

##### agencyId Type

- [agencyId](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

#### created

`created`

- is optional
- type: time

##### created Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### details

`details`

- is **required**
- type: `object`

##### details Type

`object` with following properties:

| Property       | Type   | Required     |
| -------------- | ------ | ------------ |
| `sessionToken` | string | **Required** |
| `url`          | string | **Required** |

#### sessionToken

`sessionToken`

- is **required**
- type: `string`

##### sessionToken Type

`string`

#### url

`url`

- is **required**
- type: `string`

##### url Type

`string`

#### id

Unique ID

`id`

- is **required**
- type: `string`

##### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

#### identityId

`identityId`

- is **required**
- type: identityId

##### identityId Type

- [identityId](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

#### modified

`modified`

- is optional
- type: time

##### modified Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### stateLog

`stateLog`

- is **required**
- type: `object[]`\* at least `1` items in the array

##### stateLog Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `status`    | string | **Required** |
| `timestamp` |        | **Required** |

#### status

`status`

- is **required**
- type: `string`

##### status Type

`string`

#### timestamp

`timestamp`

- is **required**
- type: time

##### timestamp Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### status

`status`

- is **required**
- type: `string`

##### status Type

`string`

#### type

`type`

- is **required**
- type: `string`

##### type Type

`string`

#### validFrom

`validFrom`

- is optional
- type: `string`

##### validFrom Type

`string`

#### validTo

`validTo`

- is optional
- type: `string`

##### validTo Type

`string`
