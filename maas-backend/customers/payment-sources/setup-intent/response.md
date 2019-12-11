# response Schema

```
http://maasglobal.com/maas-backend/customers/payment-sources/setup-intent/response.json
```

MaaS customer payment sources setup intent create response

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                         |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/payment-sources/setup-intent/response.json](response.json) |

# response Properties

| Property                    | Type     | Required     | Nullable | Defined by             |
| --------------------------- | -------- | ------------ | -------- | ---------------------- |
| [setupIntent](#setupintent) | `object` | **Required** | No       | response (this schema) |

## setupIntent

`setupIntent`

- is **required**
- type: `object`
- defined in this schema

### setupIntent Type

`object` with following properties:

| Property        | Type    | Required     |
| --------------- | ------- | ------------ |
| `alias`         | string  | Optional     |
| `clientSecret`  | string  | Optional     |
| `gatewayName`   | string  | **Required** |
| `isDefault`     | boolean | **Required** |
| `setupIntentId` | string  | **Required** |
| `status`        | string  | **Required** |
| `type`          | string  | **Required** |

#### alias

`alias`

- is optional
- type: alias

##### alias Type

`string`

- minimum length: 3 characters
- maximum length: 100 characters

#### clientSecret

`clientSecret`

- is optional
- type: `string`

##### clientSecret Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

#### gatewayName

`gatewayName`

- is **required**
- type: gatewayName

##### gatewayName Type

`string`

- minimum length: 3 characters
- maximum length: 255 characters

#### isDefault

`isDefault`

- is **required**
- type: `boolean`

##### isDefault Type

`boolean`

#### setupIntentId

`setupIntentId`

- is **required**
- type: paymentSourceId

##### setupIntentId Type

`string`

- minimum length: 3 characters
- maximum length: 255 characters

#### status

`status`

- is **required**
- type: status

##### status Type

`string`

- minimum length: 2 characters
- maximum length: 255 characters

#### type

`type`

- is **required**
- type: type

##### type Type

`string`

- minimum length: 3 characters
- maximum length: 100 characters
