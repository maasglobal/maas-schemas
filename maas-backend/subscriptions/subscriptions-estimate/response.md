# response Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscriptions-estimate/response.json
```

Response schema for subscriptions-estimate

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/subscriptions/subscriptions-estimate/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/subscriptions/subscriptions-estimate/response.json`
  - [pricing](../pricing.md) `http://maasglobal.com/maas-backend/subscriptions/pricing.json`

# response Properties

| Property                            | Type      | Required     | Nullable | Defined by             |
| ----------------------------------- | --------- | ------------ | -------- | ---------------------- |
| [debug](#debug)                     | `object`  | Optional     | No       | response (this schema) |
| [estimate](#estimate)               | pricing   | **Required** | No       | response (this schema) |
| [immediateUpdate](#immediateupdate) | `boolean` | Optional     | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## estimate

`estimate`

- is **required**
- type: pricing
- defined in this schema

### estimate Type

- [pricing](../pricing.md) – `http://maasglobal.com/maas-backend/subscriptions/pricing.json`

## immediateUpdate

If a given subscription change will be immediate or not

`immediateUpdate`

- is optional
- type: `boolean`
- defined in this schema

### immediateUpdate Type

`boolean`
