# response Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscriptions-options/response.json
```

Response schema for subscriptions-options

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/subscriptions/subscriptions-options/response.json](response.json) |

# response Properties

| Property            | Type               | Required     | Nullable | Defined by             |
| ------------------- | ------------------ | ------------ | -------- | ---------------------- |
| [debug](#debug)     | `object`           | Optional     | No       | response (this schema) |
| [options](#options) | subscriptionOption | **Required** | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## options

`options`

- is **required**
- type: subscriptionOption
- defined in this schema

### options Type

Array type: subscriptionOption

All items must be of the type:

- [subscriptionOption](../subscriptionOption.md) –
  `http://maasglobal.com/maas-backend/subscriptions/subscriptionOption.json`
