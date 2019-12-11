# paymentSource Schema

```
http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json
```

MaaS payment source schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                      |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/customers/payment-sources/paymentSource.json](paymentSource.json) |

# paymentSource Definitions

| Property                            | Type            | Group                                                                                                        |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| [alias](#alias)                     | alias           | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [billingCountry](#billingcountry)   | country         | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [billingZip](#billingzip)           | zipCode         | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [cardNumbers](#cardnumbers)         | `string`        | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [expiryMonth](#expirymonth)         | `number`        | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [expiryYear](#expiryyear)           | `number`        | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [gatewayName](#gatewayname)         | gatewayName     | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [isDefault](#isdefault)             | `boolean`       | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [isValid](#isvalid)                 | `boolean`       | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [issuer](#issuer)                   | `string`        | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [paymentSourceId](#paymentsourceid) | paymentSourceId | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [setupIntentId](#setupintentid)     | setupIntentId   | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [status](#status)                   | status          | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |
| [type](#type)                       | type            | `http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json#/definitions/paymentSource` |

## alias

`alias`

- is optional
- type: alias
- defined in this schema

### alias Type

- [alias](paymentSource.md) – `#/definitions/alias`

## billingCountry

`billingCountry`

- is optional
- type: country
- defined in this schema

### billingCountry Type

- [country](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/country`

## billingZip

`billingZip`

- is optional
- type: zipCode
- defined in this schema

### billingZip Type

- [zipCode](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/zipCode`

## cardNumbers

`cardNumbers`

- is optional
- type: `string`
- defined in this schema

### cardNumbers Type

`string`

- minimum length: 10 characters

## expiryMonth

`expiryMonth`

- is optional
- type: `number`
- defined in this schema

### expiryMonth Type

`number`

- minimum value: `1`
- maximum value: `12`
- must be a multiple of `1`

## expiryYear

`expiryYear`

- is optional
- type: `number`
- defined in this schema

### expiryYear Type

`number`

- minimum value: `2018`
- must be a multiple of `1`

## gatewayName

`gatewayName`

- is **required**
- type: gatewayName
- defined in this schema

### gatewayName Type

- [gatewayName](paymentSource.md) – `#/definitions/gatewayName`

## isDefault

`isDefault`

- is **required**
- type: `boolean`
- defined in this schema

### isDefault Type

`boolean`

## isValid

`isValid`

- is optional
- type: `boolean`
- defined in this schema

### isValid Type

`boolean`

## issuer

`issuer`

- is optional
- type: `string`
- defined in this schema

### issuer Type

`string`

- minimum length: 2 characters

## paymentSourceId

`paymentSourceId`

- is **required**
- type: paymentSourceId
- defined in this schema

### paymentSourceId Type

- [paymentSourceId](paymentSource.md) – `#/definitions/paymentSourceId`

## setupIntentId

`setupIntentId`

- is optional
- type: setupIntentId
- defined in this schema

### setupIntentId Type

- [setupIntentId](paymentSource.md) – `#/definitions/setupIntentId`

## status

`status`

- is **required**
- type: status
- defined in this schema

### status Type

- [status](paymentSource.md) – `#/definitions/status`

## type

`type`

- is **required**
- type: type
- defined in this schema

### type Type

- [type](paymentSource.md) – `#/definitions/type`
