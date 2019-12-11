# response Schema

```
http://maasglobal.com/maas-backend/customers/payment-sources/update/response.json
```

MaaS customer payment sources update response

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/payment-sources/update/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/customers/payment-sources/update/response.json`
  - [paymentSource](../paymentSource.md)
    `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json`

# response Properties

| Property                        | Type     | Required     | Nullable | Defined by             |
| ------------------------------- | -------- | ------------ | -------- | ---------------------- |
| [paymentSource](#paymentsource) | `object` | **Required** | No       | response (this schema) |

## paymentSource

Payment source

`paymentSource`

- is **required**
- type: `object`
- defined in this schema

### paymentSource Type

`object` with following properties:

| Property          | Type    | Required     |
| ----------------- | ------- | ------------ |
| `alias`           |         | Optional     |
| `billingCountry`  |         | Optional     |
| `billingZip`      |         | Optional     |
| `cardNumbers`     | string  | Optional     |
| `expiryMonth`     | number  | Optional     |
| `expiryYear`      | number  | Optional     |
| `gatewayName`     |         | **Required** |
| `isDefault`       | boolean | **Required** |
| `isValid`         | boolean | Optional     |
| `issuer`          | string  | Optional     |
| `paymentSourceId` |         | **Required** |
| `setupIntentId`   |         | Optional     |
| `status`          |         | **Required** |
| `type`            |         | **Required** |

#### alias

`alias`

- is optional
- type: alias

##### alias Type

- [alias](paymentSource.md) – `#/definitions/alias`

#### billingCountry

`billingCountry`

- is optional
- type: country

##### billingCountry Type

- [country](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/country`

#### billingZip

`billingZip`

- is optional
- type: zipCode

##### billingZip Type

- [zipCode](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/zipCode`

#### cardNumbers

`cardNumbers`

- is optional
- type: `string`

##### cardNumbers Type

`string`

- minimum length: 10 characters

#### expiryMonth

`expiryMonth`

- is optional
- type: `number`

##### expiryMonth Type

`number`

- minimum value: `1`
- maximum value: `12`
- must be a multiple of `1`

#### expiryYear

`expiryYear`

- is optional
- type: `number`

##### expiryYear Type

`number`

- minimum value: `2018`
- must be a multiple of `1`

#### gatewayName

`gatewayName`

- is **required**
- type: gatewayName

##### gatewayName Type

- [gatewayName](paymentSource.md) – `#/definitions/gatewayName`

#### isDefault

`isDefault`

- is **required**
- type: `boolean`

##### isDefault Type

`boolean`

#### isValid

`isValid`

- is optional
- type: `boolean`

##### isValid Type

`boolean`

#### issuer

`issuer`

- is optional
- type: `string`

##### issuer Type

`string`

- minimum length: 2 characters

#### paymentSourceId

`paymentSourceId`

- is **required**
- type: paymentSourceId

##### paymentSourceId Type

- [paymentSourceId](paymentSource.md) – `#/definitions/paymentSourceId`

#### setupIntentId

`setupIntentId`

- is optional
- type: setupIntentId

##### setupIntentId Type

- [setupIntentId](paymentSource.md) – `#/definitions/setupIntentId`

#### status

`status`

- is **required**
- type: status

##### status Type

- [status](paymentSource.md) – `#/definitions/status`

#### type

`type`

- is **required**
- type: type

##### type Type

- [type](paymentSource.md) – `#/definitions/type`
