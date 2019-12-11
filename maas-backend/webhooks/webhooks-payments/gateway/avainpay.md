# avainpay Schema

```
http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json
```

Avainpay payment webhook schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                     |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------ |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/webhooks/webhooks-payments/gateway/avainpay.json](avainpay.json) |

# avainpay Definitions

| Property            | Type     | Group                                                                                                      |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| [headers](#headers) | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json#/definitions/request` |
| [params](#params)   | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json#/definitions/request` |
| [payload](#payload) | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json#/definitions/request` |

## headers

`headers`

- is optional
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property     | Type   | Required |
| ------------ | ------ | -------- |
| `Set-Cookie` | string | Optional |

#### Set-Cookie

`Set-Cookie`

- is optional
- type: `string`

##### Set-Cookie Type

`string`

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

| Value      | Description |
| ---------- | ----------- |
| `avainpay` |             |

## payload

`payload`

- is **required**
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `action_str`  | string | **Required** |
| `data_type`   | string | **Required** |
| `log_list`    | array  | Optional     |
| `request_map` | object | Optional     |
| `trans_map`   | object | Optional     |

#### action_str

`action_str`

- is **required**
- type: `string`

##### action_str Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

#### data_type

`data_type`

- is **required**
- type: `string`

##### data_type Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

#### log_list

`log_list`

- is optional
- type: `array`

##### log_list Type

Array type: `array`

#### request_map

`request_map`

- is optional
- type: `object`

##### request_map Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### trans_map

`trans_map`

- is optional
- type: `object`

##### trans_map Type

`object` with following properties:

| Property      | Type    | Required |
| ------------- | ------- | -------- |
| `nonce`       | string  | Optional |
| `signature`   | string  | Optional |
| `system_time` | integer | Optional |

#### nonce

`nonce`

- is optional
- type: `string`

##### nonce Type

`string`

#### signature

`signature`

- is optional
- type: `string`

##### signature Type

`string`

#### system_time

`system_time`

- is optional
- type: `integer`

##### system_time Type

`integer`
