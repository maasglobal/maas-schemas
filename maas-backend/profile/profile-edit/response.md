# response Schema

```
http://maasglobal.com/maas-backend/profile/profile-edit/response.json
```

Response schema for profile-edit

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/profile/profile-edit/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/profile/profile-edit/response.json`
  - [profile](../../../core/profile.md) `http://maasglobal.com/core/profile.json`

# response Properties

| Property            | Type     | Required | Nullable | Defined by             |
| ------------------- | -------- | -------- | -------- | ---------------------- |
| [debug](#debug)     | `object` | Optional | No       | response (this schema) |
| [profile](#profile) | profile  | Optional | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

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
