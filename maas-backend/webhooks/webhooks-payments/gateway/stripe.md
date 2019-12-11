# stripe Schema

```
http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/stripe.json
```

Stripe payment webhook schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                 |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/webhooks/webhooks-payments/gateway/stripe.json](stripe.json) |

# stripe Definitions

| Property            | Type     | Group                                                                                                    |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| [params](#params)   | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/stripe.json#/definitions/request` |
| [payload](#payload) | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/stripe.json#/definitions/request` |

## params

`params`

- is **required**
- type: `object`
- defined in this schema

### params Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `gatewayName` | string | **Required** |

#### gatewayName

`gatewayName`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#params-known-values).

##### gatewayName Known Values

| Value    | Description |
| -------- | ----------- |
| `stripe` |             |

## payload

`payload`

- is **required**
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `data`   | object | **Required** |
| `id`     | string | **Required** |
| `type`   | string | **Required** |

#### data

`data`

- is **required**
- type: `object`

##### data Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `object` | object | Optional |

#### object

`object`

- is optional
- type: `object`

##### object Type

`object` with following properties:

| Property            | Type   | Required |
| ------------------- | ------ | -------- |
| `amount`            | number | Optional |
| `amount_capturable` | number | Optional |
| `amount_received`   | number | Optional |
| `charges`           | object | Optional |
| `id`                | string | Optional |

#### amount

`amount`

- is optional
- type: `number`

##### amount Type

`number`

- minimum value: `0`

#### amount_capturable

`amount_capturable`

- is optional
- type: `number`

##### amount_capturable Type

`number`

- minimum value: `0`

#### amount_received

`amount_received`

- is optional
- type: `number`

##### amount_received Type

`number`

- minimum value: `0`

#### charges

`charges`

- is optional
- type: `object`

##### charges Type

`object` with following properties:

| Property | Type  | Required |
| -------- | ----- | -------- |
| `data`   | array | Optional |

#### data

`data`

- is optional
- type: `object[]`

##### data Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property          | Type   | Required |
| ----------------- | ------ | -------- |
| `amount`          | number | Optional |
| `amount_refunded` | number | Optional |
| `id`              | string | Optional |
| `object`          | string | Optional |

#### amount

`amount`

- is optional
- type: `number`

##### amount Type

`number`

- minimum value: `0`

#### amount_refunded

`amount_refunded`

- is optional
- type: `number`

##### amount_refunded Type

`number`

- minimum value: `0`

#### id

`id`

- is optional
- type: `string`

##### id Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

#### object

`object`

- is optional
- type: `string`

##### object Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

#### id

`id`

- is optional
- type: `string`

##### id Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

#### type

`type`

- is **required**
- type: `string`

##### type Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters
