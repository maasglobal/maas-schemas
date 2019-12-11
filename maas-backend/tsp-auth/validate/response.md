# response Schema

```
http://maasglobal.com/maas-backend/tsp-auth/validate/response.json
```

Response schema for tsp-auth validate

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/tsp-auth/validate/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/tsp-auth/validate/response.json`
  - [common](../../../core/components/common.md) `http://maasglobal.com/core/components/common.json`

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [location](#location) | `string` | **Required** | No       | response (this schema) |

## location

Whim only deep link to localhost and freely defined view - not a complete URI validation

`location`

- is **required**
- type: `string`
- defined in this schema

### location Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(whim)%3A%5C%2F%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(whim):\/\/\/[^\s/$.?#].[^\s]*$
```
