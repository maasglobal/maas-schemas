# paymentSource Schema

```
http://maasglobal.com/core/paymentSource.json
```

MaaS region schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/paymentSource.json](paymentSource.json) |

## Schema Hierarchy

- paymentSource `http://maasglobal.com/core/paymentSource.json`
  - [units](components/units.md) `http://maasglobal.com/core/components/units.json`
  - [card](card.md) `http://maasglobal.com/core/card.json`

# paymentSource Properties

| Property                          | Type      | Required     | Nullable | Defined by                  |
| --------------------------------- | --------- | ------------ | -------- | --------------------------- |
| [card](#card)                     | card      | Optional     | No       | paymentSource (this schema) |
| [customerId](#customerid)         | complex   | **Required** | No       | paymentSource (this schema) |
| [gateway](#gateway)               | `string`  | Optional     | No       | paymentSource (this schema) |
| [gatewayId](#gatewayid)           | `string`  | Optional     | No       | paymentSource (this schema) |
| [id](#id)                         | `string`  | Optional     | No       | paymentSource (this schema) |
| [status](#status)                 | `string`  | Optional     | No       | paymentSource (this schema) |
| [temporaryToken](#temporarytoken) | `string`  | Optional     | No       | paymentSource (this schema) |
| [type](#type)                     | `enum`    | **Required** | No       | paymentSource (this schema) |
| [valid](#valid)                   | `boolean` | Optional     | No       | paymentSource (this schema) |

## card

`card`

- is optional
- type: card
- defined in this schema

### card Type

- [card](card.md) – `http://maasglobal.com/core/card.json`

## customerId

`customerId`

- is **required**
- type: complex
- defined in this schema

### customerId Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`string`

All instances must conform to this regular expression

```regex
^[aepus]{2}-[\w]{4}-\d:[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$
```

- test example:
  [eu-west-1:4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5Baepus%5D%7B2%7D-%5B%5Cw%5D%7B4%7D-%5Cd%3A%5Ba-f%5Cd%5D%7B8%7D(-%5Ba-f%5Cd%5D%7B4%7D)%7B3%7D-%5Ba-f%5Cd%5D%7B12%7D%24&text=eu-west-1%3A4828507e-683f-41bf-9d87-689808fbf958>)

#### Option 2

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### customerId Examples

```json
"eu-west-1:4828507e-683f-41bf-9d87-689808fbf958"
```

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## gateway

`gateway`

- is optional
- type: `string`
- defined in this schema

### gateway Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

## gatewayId

`gatewayId`

- is optional
- type: `string`
- defined in this schema

### gatewayId Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

## id

`id`

- is optional
- type: `string`
- defined in this schema

### id Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

## status

`status`

- is optional
- type: `string`
- defined in this schema

### status Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

## temporaryToken

`temporaryToken`

- is optional
- type: `string`
- defined in this schema

### temporaryToken Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value                     | Description |
| ------------------------- | ----------- |
| `card`                    |             |
| `paypal_express_checkout` |             |
| `amazon_payments`         |             |
| `direct_debit`            |             |
| `generic`                 |             |
| `alipay`                  |             |
| `unionpay`                |             |
| `apple_pay`               |             |

## valid

`valid`

- is optional
- type: `boolean`
- defined in this schema

### valid Type

`boolean`
