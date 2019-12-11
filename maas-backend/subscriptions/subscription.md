# subscription Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscription.json
```

MaaS subscription schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                        |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/subscriptions/subscription.json](subscription.json) |

# subscription Definitions

| Property                              | Type                    | Group                                                                                              |
| ------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| [activated](#activated)               | time                    | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/terms`            |
| [active](#active)                     | `boolean`               | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [addons](#addons)                     | addon                   | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [availability](#availability)         | `object`                | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [changeState](#changestate)           | subscriptionChangeState | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [coupons](#coupons)                   | coupon                  | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [customerId](#customerid)             | identityId              | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [description](#description)           | `string`                | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/coupon`           |
| [hidden](#hidden)                     | `boolean`               | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [id](#id)                             | subscriptionItemId      | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/coupon`           |
| [image](#image)                       | url                     | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/addon`            |
| [level](#level)                       | `integer`               | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [meta](#meta)                         | `object`                | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [modified](#modified)                 | time                    | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/terms`            |
| [name](#name)                         | `string`                | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/coupon`           |
| [plan](#plan)                         | plan                    | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [pointCost](#pointcost)               | point-cost              | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [price](#price)                       | price                   | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/plan`             |
| [quantity](#quantity)                 | `integer`               | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/addon`            |
| [region](#region)                     | region                  | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [scheduledChanges](#scheduledchanges) | `boolean`               | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/terms`            |
| [selectable](#selectable)             | `boolean`               | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [shippingAddress](#shippingaddress)   | subscriptionAddress     | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [terms](#terms)                       | terms                   | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [topUpId](#topupid)                   | `string`                | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |
| [unitPrice](#unitprice)               | price                   | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/addon`            |
| [validity](#validity)                 | `object`                | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/terms`            |
| [wmpGrant](#wmpgrant)                 | `integer`               | `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase` |

## activated

`activated`

- is optional
- type: time
- defined in this schema

### activated Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## active

`active`

- is optional
- type: `boolean`
- defined in this schema

### active Type

`boolean`

## addons

`addons`

- is optional
- type: addon
- defined in this schema

### addons Type

Array type: addon

All items must be of the type:

- [addon](subscription.md) – `#/definitions/addon`

## availability

`availability`

- is optional
- type: `object`
- defined in this schema

### availability Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## changeState

`changeState`

- is optional
- type: subscriptionChangeState
- defined in this schema

### changeState Type

- [subscriptionChangeState](subscriptionChangeState.md) –
  `http://maasglobal.com/core/components/subscriptionChangeState.json`

## coupons

`coupons`

- is optional
- type: coupon
- defined in this schema

### coupons Type

Array type: coupon

All items must be of the type:

- [coupon](subscription.md) – `#/definitions/coupon`

## customerId

`customerId`

- is optional
- type: identityId
- defined in this schema

### customerId Type

- [identityId](contact.md) – `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/identityId`

## description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## hidden

`hidden`

- is optional
- type: `boolean`
- defined in this schema

### hidden Type

`boolean`

## id

`id`

- is **required**
- type: subscriptionItemId
- defined in this schema

### id Type

- [subscriptionItemId](subscription.md) – `#/definitions/subscriptionItemId`

## image

`image`

- is optional
- type: url
- defined in this schema

### image Type

- [url](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/url`

## level

`level`

- is optional
- type: `integer`
- defined in this schema

### level Type

`integer`

- minimum value: `1`

## meta

Arbitrary metadata on whatever app might need to display

`meta`

- is optional
- type: `object`
- defined in this schema

### meta Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## modified

`modified`

- is optional
- type: time
- defined in this schema

### modified Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## name

`name`

- is optional
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters

## plan

`plan`

- is optional
- type: plan
- defined in this schema

### plan Type

- [plan](subscription.md) – `#/definitions/plan`

## pointCost

`pointCost`

- is optional
- type: point-cost
- defined in this schema

### pointCost Type

- [point-cost](point-cost.md) – `http://maasglobal.com/core/components/point-cost.json`

## price

`price`

- is optional
- type: price
- defined in this schema

### price Type

- [price](subscription.md) – `#/definitions/price`

## quantity

`quantity`

- is **required**
- type: `integer`
- default: `1`
- defined in this schema

### quantity Type

`integer`

- minimum value: `0`
- maximum value: `200000`

## region

`region`

- is optional
- type: region
- defined in this schema

### region Type

- [region](region.md) – `http://maasglobal.com/core/region.json`

## scheduledChanges

`scheduledChanges`

- is optional
- type: `boolean`
- default: `false`
- defined in this schema

### scheduledChanges Type

`boolean`

## selectable

`selectable`

- is optional
- type: `boolean`
- defined in this schema

### selectable Type

`boolean`

## shippingAddress

`shippingAddress`

- is optional
- type: subscriptionAddress
- defined in this schema

### shippingAddress Type

- [subscriptionAddress](subscriptionAddress.md) –
  `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json`

## terms

`terms`

- is optional
- type: terms
- defined in this schema

### terms Type

- [terms](subscription.md) – `#/definitions/terms`

## topUpId

`topUpId`

- is optional
- type: `string`
- defined in this schema

### topUpId Type

`string`

- minimum length: 2 characters

## unitPrice

`unitPrice`

- is optional
- type: price
- defined in this schema

### unitPrice Type

- [price](subscription.md) – `#/definitions/price`

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

## wmpGrant

`wmpGrant`

- is optional
- type: `integer`
- defined in this schema

### wmpGrant Type

`integer`

- minimum value: `0`
