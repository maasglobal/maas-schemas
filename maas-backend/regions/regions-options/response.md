# response Schema

```
http://maasglobal.com/maas-backend/regions/regions-options/response.json
```

Response schema for regions-options

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/regions/regions-options/response.json](response.json) |

# response Properties

| Property            | Type     | Required     | Nullable | Defined by             |
| ------------------- | -------- | ------------ | -------- | ---------------------- |
| [debug](#debug)     | `object` | Optional     | No       | response (this schema) |
| [options](#options) | region   | **Required** | No       | response (this schema) |

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
- type: region
- defined in this schema

### options Type

Array type: region

All items must be of the type:

- [region](../../../core/region.md) – `http://maasglobal.com/core/region.json`
