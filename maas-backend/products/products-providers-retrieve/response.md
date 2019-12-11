# response Schema

```
http://maasglobal.com/maas-backend/products/products-providers-retrieve/response.json
```

Response schema for products-providers-retrieve

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/products/products-providers-retrieve/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/products/products-providers-retrieve/response.json`
  - [provider](../provider.md) `http://maasglobal.com/maas-backend/products/provider.json`

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [provider](#provider) | provider | **Required** | No       | response (this schema) |

## provider

`provider`

- is **required**
- type: provider
- defined in this schema

### provider Type

- [provider](../provider.md) – `http://maasglobal.com/maas-backend/products/provider.json`
