# yaband Schema

```
http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/yaband.json
```

YaBand payment webhook schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                 |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/webhooks/webhooks-payments/gateway/yaband.json](yaband.json) |

# yaband Definitions

| Property            | Type     | Group                                                                                                    |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| [headers](#headers) | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/yaband.json#/definitions/request` |
| [params](#params)   | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/yaband.json#/definitions/request` |
| [payload](#payload) | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/yaband.json#/definitions/request` |

## headers

`headers`

- is optional
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


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
| `yaband` |             |

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
| `sign`   | string | **Required** |

#### data

`data`

- is **required**
- type: `object`

##### data Type

`object` with following properties:

| Property         | Type   | Required     |
| ---------------- | ------ | ------------ |
| `order_id`       | string | **Required** |
| `state`          | string | **Required** |
| `trade_id`       | string | Optional     |
| `transaction_id` | string | Optional     |
| `type`           | string | **Required** |

#### order_id

`order_id`

- is **required**
- type: `string`

##### order_id Type

`string`

- minimum length: 2 characters

#### state

`state`

- is **required**
- type: `string`

##### state Type

`string`

- minimum length: 2 characters

#### trade_id

`trade_id`

- is optional
- type: `string`

##### trade_id Type

`string`

#### transaction_id

`transaction_id`

- is optional
- type: `string`

##### transaction_id Type

`string`

#### type

`type`

- is **required**
- type: `string`

##### type Type

`string`

- minimum length: 2 characters

#### sign

`sign`

- is **required**
- type: `string`

##### sign Type

`string`

- minimum length: 64 characters
