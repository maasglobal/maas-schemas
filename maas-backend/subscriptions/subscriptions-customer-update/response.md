# response Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscriptions-customer-update/response.json
```

Response schema for subscriptions-customer-update

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/subscriptions/subscriptions-customer-update/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/subscriptions/subscriptions-customer-update/response.json`
  - [contact](../contact.md) `http://maasglobal.com/maas-backend/subscriptions/contact.json`

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [customer](#customer) | complex  | **Required** | No       | response (this schema) |
| [debug](#debug)       | `object` | Optional     | No       | response (this schema) |

## customer

`customer`

- is **required**
- type: complex
- defined in this schema

### customer Type

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [contactBase](contact.md) – `#/definitions/contactBase`

#### Requirement 2

`object` with following properties:

| Property        | Type | Required |
| --------------- | ---- | -------- |
| `paymentMethod` |      | Optional |

#### paymentMethod

`paymentMethod`

- is optional
- type: paymentMethodResponse

##### paymentMethod Type

- [paymentMethodResponse](contact.md) – `#/definitions/paymentMethodResponse`

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |

