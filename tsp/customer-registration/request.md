# request Schema

```
http://maasglobal.com/tsp/customer-registration/request.json
```

Request schema for customer registration

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/customer-registration/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/customer-registration/request.json`
  - [customer](../../core/customer.md) `http://maasglobal.com/core/customer.json`

# request Properties

| Property              | Type     | Required     | Nullable | Defined by            |
| --------------------- | -------- | ------------ | -------- | --------------------- |
| [customer](#customer) | customer | **Required** | No       | request (this schema) |

## customer

`customer`

- is **required**
- type: customer
- defined in this schema

### customer Type

- [customer](../../core/customer.md) – `http://maasglobal.com/core/customer.json`
