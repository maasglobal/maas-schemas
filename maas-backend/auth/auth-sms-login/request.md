# request Schema

```
http://maasglobal.com/maas-backend/auth/auth-sms-login/request.json
```

Request schema for auth-sms-login

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/auth/auth-sms-login/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/auth/auth-sms-login/request.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Properties

| Property            | Type     | Required     | Nullable | Defined by            |
| ------------------- | -------- | ------------ | -------- | --------------------- |
| [headers](#headers) | `object` | Optional     | No       | request (this schema) |
| [payload](#payload) | `object` | **Required** | No       | request (this schema) |

## headers

`headers`

- is optional
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property            | Type | Required |
| ------------------- | ---- | -------- |
| `Accept`            |      | Optional |
| `X-Whim-User-Agent` |      | Optional |

#### Accept

`Accept`

- is optional
- type: acceptHeader

##### Accept Type

- [acceptHeader](api-common.md) – `#/definitions/acceptHeader`

#### X-Whim-User-Agent

`X-Whim-User-Agent`

- is optional
- type: userAgentHeader

##### X-Whim-User-Agent Type

- [userAgentHeader](api-common.md) – `#/definitions/userAgentHeader`

## payload

`payload`

- is **required**
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `code`   | string | **Required** |
| `phone`  | string | **Required** |

#### code

TOPT login verification code

`code`

- is **required**
- type: `string`

##### code Type

`string`

- minimum length: 4 characters
- maximum length: 7 characters All instances must conform to this regular expression (test examples
  [here](https://regexr.com/?expression=%5E%5Cd%2B%24)):

```regex
^\d+$
```

#### phone

Slightly looser definition of phone number

`phone`

- is **required**
- type: rawPhone

##### phone Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%5C%2B%3F(%3F%3A%5Cd)%7B6%2C14%7D%5Cd%24>)):

```regex
^\+?(?:\d){6,14}\d$
```
