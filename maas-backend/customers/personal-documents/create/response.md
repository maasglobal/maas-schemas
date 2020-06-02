# response Schema

```
http://maasglobal.com/maas-backend/customers/personal-documents/create/response.json
```

Insert a pending verification personal document object

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [maas-backend/customers/personal-documents/create/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/customers/personal-documents/create/response.json`
  - [personal-document](../../../../core/personal-document.md) `http://maasglobal.com/core/personal-document.json`

# response Properties

| Property          | Type     | Required     | Nullable | Defined by                                 |
| ----------------- | -------- | ------------ | -------- | ------------------------------------------ |
| [status](#status) | `enum`   | **Required** | No       | response (this schema)                     |
| [type](#type)     | `string` | **Required** | No       | response (this schema)                     |
| `*`               | any      | Additional   | Yes      | this schema _allows_ additional properties |

## status

`status`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#status-known-values).

### status Known Values

| Value                    | Description |
| ------------------------ | ----------- |
| `PENDING`                |             |
| `APPROVED`               |             |
| `DECLINED`               |             |
| `EXPIRED`                |             |
| `RESUBMISSION_REQUESTED` |             |
| `ABANDONED`              |             |

## type

`type`

- is **required**
- type: `string`
- defined in this schema

### type Type

`string`
