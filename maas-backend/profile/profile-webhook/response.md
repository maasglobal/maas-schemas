# response Schema

```
http://maasglobal.com/maas-backend/profile/profile-webhook/response.json
```

Response schema for profile-webhook

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/profile/profile-webhook/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/profile/profile-webhook/response.json`
  - [profile](../../../core/profile.md) `http://maasglobal.com/core/profile.json`

# response Properties

| Property            | Type     | Required | Nullable | Defined by             |
| ------------------- | -------- | -------- | -------- | ---------------------- |
| [maas](#maas)       | `object` | Optional | No       | response (this schema) |
| [profile](#profile) | profile  | Optional | No       | response (this schema) |

## maas

`maas`

- is optional
- type: `object`
- defined in this schema

### maas Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## profile

`profile`

- is optional
- type: profile
- defined in this schema

### profile Type

- [profile](../../../core/profile.md) – `http://maasglobal.com/core/profile.json`
