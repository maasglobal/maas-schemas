# error Schema

```
http://maasglobal.com/core/error.json
```

MaaS event response error object. An error that the service may send.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/error.json](error.json) |

# error Properties

| Property            | Type     | Required     | Nullable | Defined by                                 |
| ------------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [code](#code)       | `string` | **Required** | No       | error (this schema)                        |
| [message](#message) | `string` | **Required** | No       | error (this schema)                        |
| `*`                 | any      | Additional   | Yes      | this schema _allows_ additional properties |

## code

An internal error code, used for reference

`code`

- is **required**
- type: `string`
- defined in this schema

### code Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## message

A human readable error message (preferrably in English)

`message`

- is **required**
- type: `string`
- defined in this schema

### message Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters
