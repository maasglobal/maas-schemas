# response Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscriptions-update/response.json
```

Response schema for subscriptions-update

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                     |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/subscriptions/subscriptions-update/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/subscriptions/subscriptions-update/response.json`
  - [subscription](../subscription.md) `http://maasglobal.com/maas-backend/subscriptions/subscription.json`

# response Properties

| Property                            | Type         | Required     | Nullable | Defined by             |
| ----------------------------------- | ------------ | ------------ | -------- | ---------------------- |
| [debug](#debug)                     | `object`     | Optional     | No       | response (this schema) |
| [immediateUpdate](#immediateupdate) | `boolean`    | Optional     | No       | response (this schema) |
| [subscription](#subscription)       | subscription | **Required** | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## immediateUpdate

If a given subscription change will be immediate or not

`immediateUpdate`

- is optional
- type: `boolean`
- defined in this schema

### immediateUpdate Type

`boolean`

## subscription

`subscription`

- is **required**
- type: subscription
- defined in this schema

### subscription Type

- [subscription](subscription.md) – `#/definitions/subscriptionBase`
