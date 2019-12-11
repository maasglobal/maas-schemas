# response Schema

```
http://maasglobal.com/maas-backend/webhooks/webhooks-payments/response.json
```

Response for MaaS webhook to receive payment status updates from payment gateways.

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                             |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/webhooks/webhooks-payments/response.json](response.json) |

# response Definitions

| Property                      | Type     | Group                                                                                                       |
| ----------------------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| [action_str](#action_str)     | `string` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/response.json#/definitions/avainpayResponse` |
| [data_type](#data_type)       | `string` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/response.json#/definitions/avainpayResponse` |
| [log_list](#log_list)         | `array`  | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/response.json#/definitions/avainpayResponse` |
| [response_map](#response_map) | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/response.json#/definitions/avainpayResponse` |
| [trans_map](#trans_map)       | `object` | `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/response.json#/definitions/avainpayResponse` |

## action_str

`action_str`

- is **required**
- type: `string`
- defined in this schema

### action_str Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

## data_type

`data_type`

- is **required**
- type: `string`
- defined in this schema

### data_type Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

## log_list

`log_list`

- is optional
- type: `array`
- defined in this schema

### log_list Type

Array type: `array`

## response_map

`response_map`

- is optional
- type: `object`
- defined in this schema

### response_map Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## trans_map

`trans_map`

- is optional
- type: `object`
- defined in this schema

### trans_map Type

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

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [avainpayResponse](response.md) – `#/definitions/avainpayResponse`
