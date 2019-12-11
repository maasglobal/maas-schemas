# customer Schema

```
http://maasglobal.com/maas-backend/customers/customer.json
```

MaaS customer schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                            |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/customer.json](customer.json) |

## Schema Hierarchy

- customer `http://maasglobal.com/maas-backend/customers/customer.json`
  - [units](../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [personalData](personalData.md) `http://maasglobal.com/maas-backend/customers/personalData.json`
  - [region](../../core/region.md) `http://maasglobal.com/core/region.json`

# customer Properties

| Property                                | Type          | Required     | Nullable | Defined by             |
| --------------------------------------- | ------------- | ------------ | -------- | ---------------------- |
| [authorizations](#authorizations)       | authorization | **Required** | No       | customer (this schema) |
| [balances](#balances)                   | fare          | **Required** | No       | customer (this schema) |
| [favoriteLocations](#favoritelocations) | `object[]`    | Optional     | No       | customer (this schema) |
| [identityId](#identityid)               | complex       | Optional     | No       | customer (this schema) |
| [paymentSources](#paymentsources)       | paymentSource | **Required** | No       | customer (this schema) |
| [personalData](#personaldata)           | personalData  | **Required** | No       | customer (this schema) |
| [profileImageUrl](#profileimageurl)     | `string`      | Optional     | No       | customer (this schema) |
| [region](#region)                       | region        | **Required** | No       | customer (this schema) |

## authorizations

`authorizations`

- is **required**
- type: authorization
- defined in this schema

### authorizations Type

Array type: authorization

All items must be of the type:

- [authorization](../../core/components/authorization.md) – `http://maasglobal.com/core/components/authorization.json`

## balances

`balances`

- is **required**
- type: fare
- defined in this schema

### balances Type

Array type: fare

All items must be of the type:

- [fare](../../core/components/fare.md) – `http://maasglobal.com/core/components/fare.json`

## favoriteLocations

`favoriteLocations`

- is optional
- type: `object[]`
- defined in this schema

### favoriteLocations Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## identityId

`identityId`

- is optional
- type: complex
- defined in this schema

### identityId Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`string`

All instances must conform to this regular expression

```regex
^[aepus]{2}-[\w]{4}-\d:[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$
```

- test example:
  [eu-west-1:4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5Baepus%5D%7B2%7D-%5B%5Cw%5D%7B4%7D-%5Cd%3A%5Ba-f%5Cd%5D%7B8%7D(-%5Ba-f%5Cd%5D%7B4%7D)%7B3%7D-%5Ba-f%5Cd%5D%7B12%7D%24&text=eu-west-1%3A4828507e-683f-41bf-9d87-689808fbf958>)

#### Option 2

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### identityId Examples

```json
"eu-west-1:4828507e-683f-41bf-9d87-689808fbf958"
```

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## paymentSources

`paymentSources`

- is **required**
- type: paymentSource
- defined in this schema

### paymentSources Type

Array type: paymentSource

All items must be of the type: `object` with following properties:

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

Payment source

## personalData

`personalData`

- is **required**
- type: personalData
- defined in this schema

### personalData Type

- [personalData](personalData.md) – `http://maasglobal.com/maas-backend/customers/personalData.json`

## profileImageUrl

`profileImageUrl`

- is optional
- type: `string`
- defined in this schema

### profileImageUrl Type

`string`

- minimum length: 10 characters
- maximum length: 1024 characters

## region

`region`

- is **required**
- type: region
- defined in this schema

### region Type

- [region](../../core/region.md) – `http://maasglobal.com/core/region.json`
