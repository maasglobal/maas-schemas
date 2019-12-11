# subscriptionAddress Schema

```
http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json
```

MaaS subscription address schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                      |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/subscriptions/subscriptionAddress.json](subscriptionAddress.json) |

# subscriptionAddress Definitions

| Property                | Type      | Group                                                                                                        |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| [city](#city)           | city      | `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json#/definitions/subscriptionAddress` |
| [country](#country)     | country   | `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json#/definitions/subscriptionAddress` |
| [email](#email)         | email     | `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json#/definitions/subscriptionAddress` |
| [firstName](#firstname) | firstName | `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json#/definitions/subscriptionAddress` |
| [lastName](#lastname)   | lastName  | `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json#/definitions/subscriptionAddress` |
| [phone](#phone)         | phone     | `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json#/definitions/subscriptionAddress` |
| [zipCode](#zipcode)     | zipCode   | `http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json#/definitions/subscriptionAddress` |

## city

`city`

- is optional
- type: city
- defined in this schema

### city Type

- [city](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/city`

## country

`country`

- is **required**
- type: country
- defined in this schema

### country Type

- [country](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/country`

## email

`email`

- is optional
- type: email
- defined in this schema

### email Type

- [email](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/email`

## firstName

`firstName`

- is optional
- type: firstName
- defined in this schema

### firstName Type

- [firstName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/firstName`

## lastName

`lastName`

- is optional
- type: lastName
- defined in this schema

### lastName Type

- [lastName](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/lastName`

## phone

`phone`

- is optional
- type: phone
- defined in this schema

### phone Type

- [phone](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/phone`

## zipCode

`zipCode`

- is **required**
- type: zipCode
- defined in this schema

### zipCode Type

- [zipCode](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/zipCode`
