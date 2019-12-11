# response Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscriptions-change-state/response.json
```

Response schema for subscriptions-change-state

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                           |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/subscriptions/subscriptions-change-state/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/subscriptions/subscriptions-change-state/response.json`
  - [subscriptionChangeState](../../../core/components/subscriptionChangeState.md)
    `http://maasglobal.com/core/components/subscriptionChangeState.json`

# response Properties

| Property                    | Type                    | Required     | Nullable | Defined by             |
| --------------------------- | ----------------------- | ------------ | -------- | ---------------------- |
| [changeState](#changestate) | subscriptionChangeState | **Required** | No       | response (this schema) |

## changeState

`changeState`

- is **required**
- type: subscriptionChangeState
- defined in this schema

### changeState Type

- [subscriptionChangeState](../../../core/components/subscriptionChangeState.md) –
  `http://maasglobal.com/core/components/subscriptionChangeState.json`
