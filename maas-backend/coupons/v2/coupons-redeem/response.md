# response Schema

```
http://maasglobal.com/maas-backend/coupons/v2/coupons-redeem/response.json
```

MaaS coupon redeem

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                            |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [maas-backend/coupons/v2/coupons-redeem/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/coupons/v2/coupons-redeem/response.json`
  - [code](../../code.md) `http://maasglobal.com/maas-backend/coupons/code.json`

# response Properties

| Property            | Type      | Required     | Nullable | Defined by                                 |
| ------------------- | --------- | ------------ | -------- | ------------------------------------------ |
| [code](#code)       | `string`  | **Required** | No       | response (this schema)                     |
| [data](#data)       | `object`  | **Required** | No       | response (this schema)                     |
| [success](#success) | `boolean` | **Required** | No       | response (this schema)                     |
| `*`                 | any       | Additional   | Yes      | this schema _allows_ additional properties |

## code

MaaS coupon code

`code`

- is **required**
- type: `string`
- defined in this schema

### code Type

`string`

## data

`data`

- is **required**
- type: `object`
- defined in this schema

### data Type

`object` with following properties:

| Property       | Type | Required |
| -------------- | ---- | -------- |
| `subscription` |      | Optional |

#### subscription

`subscription`

- is optional
- type: subscription

##### subscription Type

- [subscription](subscription.md) –
  `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscription`

## success

`success`

- is **required**
- type: `boolean`
- defined in this schema

### success Type

`boolean`
