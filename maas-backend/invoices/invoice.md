# invoice Schema

```
http://maasglobal.com/maas-backend/invoices/invoice.json
```

MaaS Invoice schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                         |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/invoices/invoice.json](invoice.json) |

# invoice Definitions

| Property                  | Type            | Group                                                                           |
| ------------------------- | --------------- | ------------------------------------------------------------------------------- |
| [bookingId](#bookingid)   | uuid            | `http://maasglobal.com/maas-backend/invoices/invoice.json#/definitions/Invoice` |
| [customerId](#customerid) | identityId      | `http://maasglobal.com/maas-backend/invoices/invoice.json#/definitions/Invoice` |
| [id](#id)                 | InvoiceId       | `http://maasglobal.com/maas-backend/invoices/invoice.json#/definitions/Invoice` |
| [lineItems](#lineitems)   | InvoiceLineItem | `http://maasglobal.com/maas-backend/invoices/invoice.json#/definitions/Invoice` |

## bookingId

bookingId of the requested booking

`bookingId`

- is **required**
- type: uuid
- defined in this schema

### bookingId Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## customerId

`customerId`

- is **required**
- type: identityId
- defined in this schema

### customerId Type

- [identityId](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

## id

`id`

- is **required**
- type: InvoiceId
- defined in this schema

### id Type

- [InvoiceId](invoiceUnits.md) – `http://maasglobal.com/maas-backend/invoices/invoiceUnits.json#/definitions/InvoiceId`

## lineItems

`lineItems`

- is **required**
- type: InvoiceLineItem
- defined in this schema

### lineItems Type

Array type: InvoiceLineItem

All items must be of the type:

- [InvoiceLineItem](invoiceLineItem.md) –
  `http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json#/definitions/InvoiceLineItem`
