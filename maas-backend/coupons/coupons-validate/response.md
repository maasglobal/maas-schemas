# response Schema

```
http://maasglobal.com/maas-backend/coupons/coupons-validate/response.json
```

MaaS coupon validation

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                           |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/coupons/coupons-validate/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/coupons/coupons-validate/response.json`
  - [code](../code.md) `http://maasglobal.com/maas-backend/coupons/code.json`

# response Properties

| Property        | Type      | Required     | Nullable | Defined by             |
| --------------- | --------- | ------------ | -------- | ---------------------- |
| [code](#code)   | `string`  | **Required** | No       | response (this schema) |
| [valid](#valid) | `boolean` | **Required** | No       | response (this schema) |

## code

MaaS coupon code

`code`

- is **required**
- type: `string`
- defined in this schema

### code Type

`string`

## valid

`valid`

- is **required**
- type: `boolean`
- defined in this schema

### valid Type

`boolean`
