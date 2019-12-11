# response Schema

```
http://maasglobal.com/maas-backend/products/products-providers-options/response.json
```

Response schema for products-providers-options

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/products/products-providers-options/response.json](response.json) |

# response Properties

| Property                | Type     | Required     | Nullable | Defined by             |
| ----------------------- | -------- | ------------ | -------- | ---------------------- |
| [providers](#providers) | provider | **Required** | No       | response (this schema) |

## providers

`providers`

- is **required**
- type: provider
- defined in this schema

### providers Type

Array type: provider

All items must be of the type:

- [provider](../provider.md) – `http://maasglobal.com/maas-backend/products/provider.json`
