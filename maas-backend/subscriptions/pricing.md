# pricing Schema

```
http://maasglobal.com/maas-backend/subscriptions/pricing.json
```

MaaS pricing schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [maas-backend/subscriptions/pricing.json](pricing.json) |

## Schema Hierarchy

- pricing `http://maasglobal.com/maas-backend/subscriptions/pricing.json`
  - [cost](../../core/components/cost.md) `http://maasglobal.com/core/components/cost.json`

# pricing Definitions

| Property                    | Type               | Group                                                                                 |
| --------------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| [description](#description) | `string`           | `http://maasglobal.com/maas-backend/subscriptions/pricing.json#/definitions/discount` |
| [discount](#discount)       | cost               | `http://maasglobal.com/maas-backend/subscriptions/pricing.json#/definitions/discount` |
| [id](#id)                   | subscriptionItemId | `http://maasglobal.com/maas-backend/subscriptions/pricing.json#/definitions/lineItem` |
| [quantity](#quantity)       | `integer`          | `http://maasglobal.com/maas-backend/subscriptions/pricing.json#/definitions/lineItem` |
| [type](#type)               | `string`           | `http://maasglobal.com/maas-backend/subscriptions/pricing.json#/definitions/lineItem` |
| [unitPrice](#unitprice)     | cost               | `http://maasglobal.com/maas-backend/subscriptions/pricing.json#/definitions/lineItem` |
| [validity](#validity)       | `object`           | `http://maasglobal.com/maas-backend/subscriptions/pricing.json#/definitions/terms`    |

## description

`description`

- is **required**
- type: `string`
- defined in this schema

### description Type

`string`

- minimum length: 1 characters

## discount

Price of one unit after all taxes & discounts

`discount`

- is **required**
- type: cost
- defined in this schema

### discount Type

- [cost](cost.md) – `http://maasglobal.com/core/components/cost.json`

## id

`id`

- is **required**
- type: subscriptionItemId
- defined in this schema

### id Type

- [subscriptionItemId](subscription.md) –
  `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionItemId`

## quantity

`quantity`

- is **required**
- type: `integer`
- default: `0`
- defined in this schema

### quantity Type

`integer`

- minimum value: `0`
- maximum value: `100000`

## type

`type`

- is **required**
- type: `string`
- defined in this schema

### type Type

`string`

- minimum length: 1 characters

## unitPrice

Price of one unit after all taxes & discounts

`unitPrice`

- is **required**
- type: cost
- defined in this schema

### unitPrice Type

- [cost](cost.md) – `http://maasglobal.com/core/components/cost.json`

## validity

Subscription validity conditions

`validity`

- is **required**
- type: `object`
- defined in this schema

### validity Type

`object` with following properties:

| Property    | Type | Required     |
| ----------- | ---- | ------------ |
| `endTime`   |      | **Required** |
| `startTime` |      | **Required** |

#### endTime

`endTime`

- is **required**
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### startTime

`startTime`

- is **required**
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

# pricing Properties

| Property                | Type     | Required     | Nullable | Defined by            |
| ----------------------- | -------- | ------------ | -------- | --------------------- |
| [discounts](#discounts) | discount | Optional     | No       | pricing (this schema) |
| [lineItems](#lineitems) | lineItem | **Required** | No       | pricing (this schema) |
| [terms](#terms)         | `object` | Optional     | No       | pricing (this schema) |
| [total](#total)         | cost     | **Required** | No       | pricing (this schema) |

## discounts

`discounts`

- is optional
- type: discount
- defined in this schema

### discounts Type

Array type: discount

All items must be of the type:

- [discount](pricing.md) – `#/definitions/discount`

## lineItems

`lineItems`

- is **required**
- type: lineItem
- defined in this schema

### lineItems Type

Array type: lineItem

All items must be of the type:

- [lineItem](pricing.md) – `#/definitions/lineItem`

## terms

Terms related to this subscription

`terms`

- is optional
- type: `object`
- defined in this schema

### terms Type

`object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `validity` | object | **Required** |

#### validity

Subscription validity conditions

`validity`

- is **required**
- type: `object`

##### validity Type

`object` with following properties:

| Property    | Type | Required     |
| ----------- | ---- | ------------ |
| `endTime`   |      | **Required** |
| `startTime` |      | **Required** |

#### endTime

`endTime`

- is **required**
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### startTime

`startTime`

- is **required**
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## total

Sum of the quantity \* unitPrice - sum of discounts

`total`

- is **required**
- type: cost
- defined in this schema

### total Type

- [cost](../../core/components/cost.md) – `http://maasglobal.com/core/components/cost.json`
