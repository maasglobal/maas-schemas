# request Schema

```
http://maasglobal.com/maas-backend/webhooks/zendesk-push-notification/request.json
```

MaaS Zendesk push notification forwarder request schema.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/webhooks/zendesk-push-notification/request.json](request.json) |

# request Properties

| Property                      | Type     | Required     | Nullable | Defined by            |
| ----------------------------- | -------- | ------------ | -------- | --------------------- |
| [devices](#devices)           | `array`  | **Required** | No       | request (this schema) |
| [notification](#notification) | `object` | **Required** | No       | request (this schema) |

## devices

`devices`

- is **required**
- type: `array`
- between `1` and `50` items in the array
- defined in this schema

### devices Type

Array type: `array`

All items must be of the type: Unknown type ``.

```json
{
  "type": "array",
  "minItems": 1,
  "maxItems": 50,
  "items": {
    "properties": {
      "identifier": {
        "$ref": "http://maasglobal.com/core/components/common.json#/definitions/deviceToken",
        "$linkVal": "deviceToken",
        "$linkPath": "common.md"
      },
      "type": {
        "enum": ["ios", "android"]
      }
    },
    "required": ["identifier", "type"],
    "additionalProperties": false,
    "simpletype": "complex"
  },
  "isrequired": true,
  "simpletype": "`array`"
}
```

## notification

`notification`

- is **required**
- type: `object`
- defined in this schema

### notification Type

`object` with following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `body`      | string | Optional |
| `ticket_id` | string | Optional |
| `title`     | string | Optional |

#### body

`body`

- is optional
- type: `string`

##### body Type

`string`

- minimum length: 1 characters
- maximum length: 1024 characters

#### ticket_id

`ticket_id`

- is optional
- type: `string`

##### ticket_id Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

#### title

`title`

- is optional
- type: `string`

##### title Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters
