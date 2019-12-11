# payment-parameters Schema

```
http://maasglobal.com/core/components/payment-parameters.json
```

MaaS payment parameters for completing booking payment

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                         |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------ |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/components/payment-parameters.json](payment-parameters.json) |

# payment-parameters Definitions

| Property                      | Type     | Group                                                                                                |
| ----------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| [bookingId](#bookingid)       | uuid     | `http://maasglobal.com/core/components/payment-parameters.json#/definitions/stripePaymentParameters` |
| [clientSecret](#clientsecret) | `string` | `http://maasglobal.com/core/components/payment-parameters.json#/definitions/stripePaymentParameters` |

## bookingId

`bookingId`

- is optional
- type: uuid
- defined in this schema

### bookingId Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## clientSecret

`clientSecret`

- is optional
- type: `string`
- defined in this schema

### clientSecret Type

`string`

- minimum length: 1 characters
- maximum length: 1024 characters
