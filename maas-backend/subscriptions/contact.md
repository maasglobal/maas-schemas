# contact Schema

```
http://maasglobal.com/maas-backend/subscriptions/contact.json
```

MaaS contact (customer and user) schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                              |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/subscriptions/contact.json](contact.json) |

# contact Definitions

| Property                    | Type         | Group                                                                                                |
| --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| [address](#address)         | address      | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [city](#city)               | city         | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [country](#country)         | country      | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [cvv](#cvv)                 | `string`     | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/creditCardPaymentMethod` |
| [email](#email)             | email        | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [expiryMonth](#expirymonth) | `integer`    | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/creditCardPaymentMethod` |
| [expiryYear](#expiryyear)   | `integer`    | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/creditCardPaymentMethod` |
| [firstName](#firstname)     | personalName | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [identityId](#identityid)   | identityId   | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [lastName](#lastname)       | personalName | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [number](#number)           | `string`     | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/creditCardPaymentMethod` |
| [phone](#phone)             | phone        | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |
| [token](#token)             | `string`     | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/stripePaymentMethod`     |
| [type](#type)               | `enum`       | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/creditCardPaymentMethod` |
| [valid](#valid)             | `boolean`    | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/paymentMethodResponse`   |
| [zipCode](#zipcode)         | zipCode      | `http://maasglobal.com/maas-backend/subscriptions/contact.json#/definitions/contactBase`             |

## address

`address`

- is optional
- type: address
- defined in this schema

### address Type

- [address](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/address`

## city

`city`

- is optional
- type: city
- defined in this schema

### city Type

- [city](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/city`

## country

`country`

- is optional
- type: country
- defined in this schema

### country Type

- [country](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/country`

## cvv

`cvv`

- is **required**
- type: `string`
- defined in this schema

### cvv Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5B0-9%5D%7B3%2C4%7D%24)):

```regex
^[0-9]{3,4}$
```

## email

`email`

- is optional
- type: email
- defined in this schema

### email Type

- [email](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/email`

## expiryMonth

`expiryMonth`

- is **required**
- type: `integer`
- defined in this schema

### expiryMonth Type

`integer`

- minimum value: `1`
- maximum value: `12`

## expiryYear

`expiryYear`

- is **required**
- type: `integer`
- defined in this schema

### expiryYear Type

`integer`

- minimum value: `2017`
- maximum value: `2030`

## firstName

`firstName`

- is optional
- type: personalName
- defined in this schema

### firstName Type

- [personalName](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/personalName`

## identityId

`identityId`

- is optional
- type: identityId
- defined in this schema

### identityId Type

- [identityId](contact.md) – `#/definitions/identityId`

## lastName

`lastName`

- is optional
- type: personalName
- defined in this schema

### lastName Type

- [personalName](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/personalName`

## number

Credit card numbers, see http://www.regular-expressions.info/creditcard.html

`number`

- is **required**
- type: `string`
- defined in this schema

### number Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(%3F%3A4%5B0-9%5D%7B12%7D(%3F%3A%5B0-9%5D%7B3%7D)%3F%7C(%3F%3A5%5B1-5%5D%5B0-9%5D%7B2%7D%7C222%5B1-9%5D%7C22%5B3-9%5D%5B0-9%5D%7C2%5B3-6%5D%5B0-9%5D%7B2%7D%7C27%5B01%5D%5B0-9%5D%7C2720)%5B0-9%5D%7B12%7D%7C3%5B47%5D%5B0-9%5D%7B13%7D%7C3(%3F%3A0%5B0-5%5D%7C%5B68%5D%5B0-9%5D)%5B0-9%5D%7B11%7D%7C6(%3F%3A011%7C5%5B0-9%5D%7B2%7D)%5B0-9%5D%7B12%7D%7C(%3F%3A2131%7C1800%7C35%5Cd%7B3%7D)%5Cd%7B11%7D)%24>)):

```regex
^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$
```

## phone

`phone`

- is optional
- type: phone
- defined in this schema

### phone Type

- [phone](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/phone`

## token

Stripe based payment method

`token`

- is **required**
- type: `string`
- defined in this schema

### token Type

`string`

- minimum length: 1 characters
- maximum length: 1024 characters

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value  | Description |
| ------ | ----------- |
| `card` |             |

## valid

Whether the payment method is valid and working

`valid`

- is **required**
- type: `boolean`
- defined in this schema

### valid Type

`boolean`

## zipCode

`zipCode`

- is optional
- type: zipCode
- defined in this schema

### zipCode Type

- [zipCode](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/zipCode`
