# response Schema

```
http://maasglobal.com/maas-backend/customers/update/response.json
```

MaaS customer update

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/update/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/customers/update/response.json`
  - [customer](../customer.md) `http://maasglobal.com/maas-backend/customers/customer.json`

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [customer](#customer) | customer | **Required** | No       | response (this schema) |

## customer

`customer`

- is **required**
- type: customer
- defined in this schema

### customer Type

- [customer](../customer.md) – `http://maasglobal.com/maas-backend/customers/customer.json`