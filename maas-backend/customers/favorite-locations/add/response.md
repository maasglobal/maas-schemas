# response Schema

```
http://maasglobal.com/maas-backend/customers/favorite-locations/add/response.json
```

MaaS customer favorite location adding response

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/favorite-locations/add/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/customers/favorite-locations/add/response.json`
  - [partialFavoriteLocation](../../../../core/partialFavoriteLocation.md)
    `http://maasglobal.com/core/partialFavoriteLocation.json`

# response Properties

| Property                              | Type                    | Required | Nullable | Defined by             |
| ------------------------------------- | ----------------------- | -------- | -------- | ---------------------- |
| [favoriteLocation](#favoritelocation) | partialFavoriteLocation | Optional | No       | response (this schema) |

## favoriteLocation

`favoriteLocation`

- is optional
- type: partialFavoriteLocation
- defined in this schema

### favoriteLocation Type

- [partialFavoriteLocation](../../../../core/partialFavoriteLocation.md) –
  `http://maasglobal.com/core/partialFavoriteLocation.json`
