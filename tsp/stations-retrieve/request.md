# request Schema

```
http://maasglobal.com/tsp/stations-retrieve/request.json
```

MaaS stations retrieve request schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                         |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/stations-retrieve/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/stations-retrieve/request.json`
  - [station](../../core/components/station.md) `http://maasglobal.com/core/components/station.json`

# request Properties

| Property              | Type     | Required | Nullable | Defined by            |
| --------------------- | -------- | -------- | -------- | --------------------- |
| [agencyId](#agencyid) | agencyId | Optional | No       | request (this schema) |
| [id](#id)             | `string` | Optional | No       | request (this schema) |

## agencyId

`agencyId`

- is optional
- type: agencyId
- defined in this schema

### agencyId Type

- [agencyId](station.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

## id

`id`

- is optional
- type: `string`
- defined in this schema

### id Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters
