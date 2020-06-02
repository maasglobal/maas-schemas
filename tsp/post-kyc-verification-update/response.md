# response Schema

```
http://maasglobal.com/tsp/post-kyc-verification-update/response.json
```

Response schema for post KYC verification update.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/post-kyc-verification-update/response.json](response.json) |

## response Example

```json
{
  "status": 200,
  "message": "Documents were processed."
}
```

# response Properties

| Property            | Type     | Required     | Nullable | Defined by             |
| ------------------- | -------- | ------------ | -------- | ---------------------- |
| [message](#message) | `string` | **Required** | No       | response (this schema) |
| [status](#status)   | `number` | **Required** | No       | response (this schema) |

## message

`message`

- is **required**
- type: `string`
- defined in this schema

### message Type

`string`

## status

`status`

- is **required**
- type: `number`
- defined in this schema

### status Type

`number`
