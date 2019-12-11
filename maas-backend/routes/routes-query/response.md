# response Schema

```
http://maasglobal.com/maas-backend/routes/routes-query/response.json
```

MaaS.fi routes-query response schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/routes/routes-query/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/routes/routes-query/response.json`
  - [plan](../../../core/plan.md) `http://maasglobal.com/core/plan.json`

# response Properties

| Property        | Type     | Required     | Nullable | Defined by             |
| --------------- | -------- | ------------ | -------- | ---------------------- |
| [debug](#debug) | `object` | Optional     | No       | response (this schema) |
| [plan](#plan)   | plan     | **Required** | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## plan

`plan`

- is **required**
- type: plan
- defined in this schema

### plan Type

- [plan](../../../core/plan.md) – `http://maasglobal.com/core/plan.json`
