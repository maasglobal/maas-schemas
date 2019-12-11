# response Schema

```
http://maasglobal.com/maas-backend/webhooks/zendesk-push-notification/response.json
```

MaaS Zendesk push notification forwarder response schema.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                     |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/webhooks/zendesk-push-notification/response.json](response.json) |

# response Properties

| Property            | Type    | Required     | Nullable | Defined by             |
| ------------------- | ------- | ------------ | -------- | ---------------------- |
| [results](#results) | complex | **Required** | No       | response (this schema) |

## results

`results`

- is **required**
- type: complex
- defined in this schema

### results Type

Unknown type ``.

```json
{
  "properties": {
    "successCount": {
      "type": "integer",
      "minimum": 0
    },
    "failureCount": {
      "type": "integer",
      "minimum": 0
    }
  },
  "required": ["successCount", "failureCount"],
  "isrequired": true,
  "simpletype": "complex"
}
```
