# response Schema

```
http://maasglobal.com/maas-backend/customers/favorite-locations/update/response.json
```

MaaS customer favorite location updating response

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/favorite-locations/update/response.json](response.json) |

# response Properties

| Property                              | Type    | Required | Nullable | Defined by             |
| ------------------------------------- | ------- | -------- | -------- | ---------------------- |
| [favoriteLocation](#favoritelocation) | complex | Optional | No       | response (this schema) |

## favoriteLocation

`favoriteLocation`

- is optional
- type: complex
- defined in this schema

### favoriteLocation Type

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [partialFavoriteLocation](partialFavoriteLocation.md) – `http://maasglobal.com/core/partialFavoriteLocation.json`

#### Requirement 2
