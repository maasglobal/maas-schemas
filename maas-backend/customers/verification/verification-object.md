# verification-object Schema

```
http://maasglobal.com/maas-backend/customers/verification/verification-object.json
```

MaaS verification schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                               |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/customers/verification/verification-object.json](verification-object.json) |

# verification-object Definitions

| Property                  | Type       | Group                                                                                                          |
| ------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| [agencyId](#agencyid)     | agencyId   | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [created](#created)       | time       | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [details](#details)       | `object`   | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [id](#id)                 | `string`   | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [identityId](#identityid) | identityId | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [modified](#modified)     | time       | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [stateLog](#statelog)     | `object[]` | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [status](#status)         | `string`   | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [type](#type)             | `string`   | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [validFrom](#validfrom)   | `string`   | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |
| [validTo](#validto)       | `string`   | `http://maasglobal.com/maas-backend/customers/verification/verification-object.json#/definitions/verification` |

## agencyId

`agencyId`

- is optional
- type: agencyId
- defined in this schema

### agencyId Type

- [agencyId](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

## created

`created`

- is optional
- type: time
- defined in this schema

### created Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## details

`details`

- is **required**
- type: `object`
- defined in this schema

### details Type

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

## id

Unique ID

`id`

- is **required**
- type: `string`
- defined in this schema

### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## identityId

`identityId`

- is **required**
- type: identityId
- defined in this schema

### identityId Type

- [identityId](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

## modified

`modified`

- is optional
- type: time
- defined in this schema

### modified Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## stateLog

`stateLog`

- is **required**
- type: `object[]`
- at least `1` items in the array
- defined in this schema

### stateLog Type

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

## status

`status`

- is **required**
- type: `string`
- defined in this schema

### status Type

`string`

## type

`type`

- is **required**
- type: `string`
- defined in this schema

### type Type

`string`

## validFrom

`validFrom`

- is optional
- type: `string`
- defined in this schema

### validFrom Type

`string`

## validTo

`validTo`

- is optional
- type: `string`
- defined in this schema

### validTo Type

`string`
