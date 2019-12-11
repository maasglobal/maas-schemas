# subscriptionOption Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscriptionOption.json
```

MaaS subscription option schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/subscriptions/subscriptionOption.json](subscriptionOption.json) |

## Schema Hierarchy

- subscriptionOption `http://maasglobal.com/maas-backend/subscriptions/subscriptionOption.json`
  - [subscription](subscription.md) `http://maasglobal.com/maas-backend/subscriptions/subscription.json`

# subscriptionOption Properties

| Property                                          | Type                    | Required     | Nullable | Defined by                                      |
| ------------------------------------------------- | ----------------------- | ------------ | -------- | ----------------------------------------------- |
| [active](#active)                                 | `boolean`               | Optional     | No       | [subscription](subscription.md#active)          |
| [addons](#addons)                                 | addon                   | Optional     | No       | [subscription](subscription.md#addons)          |
| [availability](#availability)                     | `object`                | Optional     | No       | [subscription](subscription.md#availability)    |
| [changeState](#changestate)                       | subscriptionChangeState | Optional     | No       | [subscription](subscription.md#changestate)     |
| [coupons](#coupons)                               | coupon                  | Optional     | No       | [subscription](subscription.md#coupons)         |
| [customerId](#customerid)                         | identityId              | Optional     | No       | [subscription](subscription.md#customerid)      |
| [description](#description)                       | `string`                | Optional     | No       | [subscription](subscription.md#description)     |
| [discounts](#discounts)                           | `array`                 | Optional     | No       | subscriptionOption (this schema)                |
| [hidden](#hidden)                                 | `boolean`               | Optional     | No       | [subscription](subscription.md#hidden)          |
| [id](#id)                                         | identityId              | Optional     | No       | [subscription](subscription.md#id)              |
| [level](#level)                                   | `integer`               | Optional     | No       | [subscription](subscription.md#level)           |
| [meta](#meta)                                     | `object`                | Optional     | No       | [subscription](subscription.md#meta)            |
| [name](#name)                                     | `string`                | Optional     | No       | [subscription](subscription.md#name)            |
| [plan](#plan)                                     | `object`                | Optional     | No       | [subscription](subscription.md#plan)            |
| [pointCost](#pointcost)                           | point-cost              | Optional     | No       | [subscription](subscription.md#pointcost)       |
| [region](#region)                                 | region                  | Optional     | No       | [subscription](subscription.md#region)          |
| [requiredAuthorizations](#requiredauthorizations) | agencyId                | **Required** | No       | subscriptionOption (this schema)                |
| [selectable](#selectable)                         | `boolean`               | Optional     | No       | [subscription](subscription.md#selectable)      |
| [shippingAddress](#shippingaddress)               | subscriptionAddress     | Optional     | No       | [subscription](subscription.md#shippingaddress) |
| [terms](#terms)                                   | `object`                | Optional     | No       | [subscription](subscription.md#terms)           |
| [topUpId](#topupid)                               | `string`                | Optional     | No       | [subscription](subscription.md#topupid)         |
| [wmpGrant](#wmpgrant)                             | `integer`               | Optional     | No       | [subscription](subscription.md#wmpgrant)        |
| `*`                                               | any                     | Additional   | Yes      | this schema _allows_ additional properties      |

## active

`active`

- is optional
- type: `boolean`
- defined in [subscription](subscription.md#active)

### active Type

`boolean`

## addons

`addons`

- is optional
- type: addon
- defined in [subscription](subscription.md#addons)

### addons Type

Array type: addon

All items must be of the type:

- [addon](subscription.md) – `#/definitions/addon`

## availability

`availability`

- is optional
- type: `object`
- defined in [subscription](subscription.md#availability)

### availability Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## changeState

`changeState`

- is optional
- type: subscriptionChangeState
- defined in [subscription](subscription.md#changestate)

### changeState Type

- [subscriptionChangeState](../../core/components/subscriptionChangeState.md) –
  `http://maasglobal.com/core/components/subscriptionChangeState.json`

## coupons

`coupons`

- is optional
- type: coupon
- defined in [subscription](subscription.md#coupons)

### coupons Type

Array type: coupon

All items must be of the type:

- [coupon](subscription.md) – `#/definitions/coupon`

## customerId

`customerId`

- is optional
- type: identityId
- defined in [subscription](subscription.md#customerid)

### customerId Type

- [identityId](contact.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

## description

`description`

- is optional
- type: `string`
- defined in [subscription](subscription.md#description)

### description Type

`string`

## discounts

`discounts`

- is optional
- type: `array`
- defined in this schema

### discounts Type

Array type: `array`

## hidden

`hidden`

- is optional
- type: `boolean`
- defined in [subscription](subscription.md#hidden)

### hidden Type

`boolean`

## id

`id`

- is optional
- type: identityId
- defined in [subscription](subscription.md#id)

### id Type

- [identityId](contact.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

## level

`level`

- is optional
- type: `integer`
- defined in [subscription](subscription.md#level)

### level Type

`integer`

- minimum value: `1`

## meta

Arbitrary metadata on whatever app might need to display

`meta`

- is optional
- type: `object`
- defined in [subscription](subscription.md#meta)

### meta Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## name

`name`

- is optional
- type: `string`
- defined in [subscription](subscription.md#name)

### name Type

`string`

- minimum length: 2 characters

## plan

Customer subscription plan

`plan`

- is optional
- type: `object`
- defined in [subscription](subscription.md#plan)

### plan Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `description` | string | Optional     |
| `id`          |        | **Required** |
| `name`        | string | Optional     |
| `price`       |        | Optional     |

#### description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### id

`id`

- is **required**
- type: subscriptionItemId

##### id Type

- [subscriptionItemId](subscription.md) – `#/definitions/subscriptionItemId`

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

- minimum length: 1 characters

#### price

`price`

- is optional
- type: price

##### price Type

- [price](subscription.md) – `#/definitions/price`

## pointCost

`pointCost`

- is optional
- type: point-cost
- defined in [subscription](subscription.md#pointcost)

### pointCost Type

- [point-cost](../../core/components/point-cost.md) – `http://maasglobal.com/core/components/point-cost.json`

## region

`region`

- is optional
- type: region
- defined in [subscription](subscription.md#region)

### region Type

- [region](../../core/region.md) – `http://maasglobal.com/core/region.json`

## requiredAuthorizations

Authorizations needed for the user before this subscription can be fulfilled

`requiredAuthorizations`

- is **required**
- type: agencyId
- at least `0` items in the array
- defined in this schema

### requiredAuthorizations Type

Array type: agencyId

All items must be of the type: `string`

- minimum length: 2 characters
- maximum length: 64 characters

## selectable

`selectable`

- is optional
- type: `boolean`
- defined in [subscription](subscription.md#selectable)

### selectable Type

`boolean`

## shippingAddress

`shippingAddress`

- is optional
- type: subscriptionAddress
- defined in [subscription](subscription.md#shippingaddress)

### shippingAddress Type

- [subscriptionAddress](subscriptionAddress.md) –
  `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json`

## terms

Terms related to this subscription

`terms`

- is optional
- type: `object`
- defined in [subscription](subscription.md#terms)

### terms Type

`object` with following properties:

| Property           | Type    | Required     | Default |
| ------------------ | ------- | ------------ | ------- |
| `activated`        |         | Optional     |         |
| `modified`         |         | Optional     |         |
| `scheduledChanges` | boolean | Optional     | `false` |
| `validity`         | object  | **Required** |         |

#### activated

`activated`

- is optional
- type: time

##### activated Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### modified

`modified`

- is optional
- type: time

##### modified Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### scheduledChanges

`scheduledChanges`

- is optional
- type: `boolean`
- default: `false`

##### scheduledChanges Type

`boolean`

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

## topUpId

`topUpId`

- is optional
- type: `string`
- defined in [subscription](subscription.md#topupid)

### topUpId Type

`string`

- minimum length: 2 characters

## wmpGrant

`wmpGrant`

- is optional
- type: `integer`
- defined in [subscription](subscription.md#wmpgrant)

### wmpGrant Type

`integer`

- minimum value: `0`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [subscriptionBase](subscription.md) –
  `http://maasglobal.com/maas-backend/subscriptions/subscription.json#/definitions/subscriptionBase`

#### Requirement 2

- [subscriptionAdditions](subscriptionOption.md) – `#/definitions/subscriptionAdditions`
