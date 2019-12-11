# invoiceLineItem Schema

```
http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json
```

MaaS InvoiceLineItem schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                         |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------ |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/invoices/invoiceLineItem.json](invoiceLineItem.json) |

# invoiceLineItem Definitions

| Property                                                  | Type              | Group                                                                                           |
| --------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------- |
| [amount](#amount)                                         | `number`          | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [currency](#currency)                                     | currency          | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [date](#date)                                             | time              | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [description](#description)                               | `string`          | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [gatewayId](#gatewayid)                                   | `string`          | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [id](#id)                                                 | InvoiceLineItemId | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [invoiceId](#invoiceid)                                   | InvoiceId         | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [paymentSourceId](#paymentsourceid)                       | `string`          | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [referenceInvoiceLineItemId](#referenceinvoicelineitemid) | InvoiceLineItemId | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [token](#token)                                           | `object`          | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [tokenId](#tokenid)                                       | tokenId           | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |
| [type](#type)                                             | `enum`            | `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem` |

## amount

`amount`

- is **required**
- type: `number`
- defined in this schema

### amount Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

## currency

`currency`

- is **required**
- type: currency
- defined in this schema

### currency Type

- [currency](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/currency`

## date

`date`

- is optional
- type: time
- defined in this schema

### date Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## description

`description`

- is **required**
- type: `string`
- defined in this schema

### description Type

`string`

- minimum length: 1 characters

## gatewayId

`gatewayId`

- is **required**
- type: `string`
- defined in this schema

### gatewayId Type

`string`

- minimum length: 4 characters

## id

`id`

- is **required**
- type: InvoiceLineItemId
- defined in this schema

### id Type

- [InvoiceLineItemId](invoiceUnits.md) –
  `http://maasglobal.com/maas-backend/invoices/invoiceUnits.json#/definitions/InvoiceLineItemId`

## invoiceId

`invoiceId`

- is optional
- type: InvoiceId
- defined in this schema

### invoiceId Type

- [InvoiceId](invoiceUnits.md) – `http://maasglobal.com/maas-backend/invoices/invoiceUnits.json#/definitions/InvoiceId`

## paymentSourceId

`paymentSourceId`

- is optional
- type: `string`
- defined in this schema

### paymentSourceId Type

`string`

- minimum length: 4 characters

## referenceInvoiceLineItemId

`referenceInvoiceLineItemId`

- is optional
- type: InvoiceLineItemId
- defined in this schema

### referenceInvoiceLineItemId Type

- [InvoiceLineItemId](invoiceUnits.md) –
  `http://maasglobal.com/maas-backend/invoices/invoiceUnits.json#/definitions/InvoiceLineItemId`

## token

Arbitrary token data, e.g. payment parameters for async payment gateways

`token`

- is optional
- type: `object`
- defined in this schema

### token Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## tokenId

`tokenId`

- is optional
- type: tokenId
- defined in this schema

### tokenId Type

- [tokenId](fare.md) – `http://maasglobal.com/core/components/fare.json#/definitions/tokenId`

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value           | Description |
| --------------- | ----------- |
| `authorization` |             |
| `capture`       |             |
| `charge`        |             |
| `refund`        |             |
