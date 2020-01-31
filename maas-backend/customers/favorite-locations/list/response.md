# response Schema

```
http://maasglobal.com/maas-backend/customers/favorite-locations/list/response.json
```

MaaS customer favorite location listing response

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/favorite-locations/list/response.json](response.json) |

# response Properties

| Property                                | Type    | Required | Nullable | Defined by             |
| --------------------------------------- | ------- | -------- | -------- | ---------------------- |
| [favoriteLocations](#favoritelocations) | `array` | Optional | No       | response (this schema) |

## favoriteLocations

`favoriteLocations`

- is optional
- type: `array`
- defined in this schema

### favoriteLocations Type

Array type: `array`

All items must be of the type:

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [partialFavoriteLocation](partialFavoriteLocation.md) – `http://maasglobal.com/core/partialFavoriteLocation.json`

#### Requirement 2
