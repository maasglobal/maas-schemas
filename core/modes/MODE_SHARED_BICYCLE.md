# MODE_SHARED_BICYCLE Schema

```
http://maasglobal.com/core/modes/MODE_SHARED_BICYCLE.json
```

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/modes/MODE_SHARED_BICYCLE.json](MODE_SHARED_BICYCLE.json) |

# MODE_SHARED_BICYCLE Properties

| Property      | Type     | Required   | Nullable | Defined by                                 |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [bike](#bike) | `object` | Optional   | No       | MODE_SHARED_BICYCLE (this schema)          |
| `*`           | any      | Additional | Yes      | this schema _allows_ additional properties |

## bike

`bike`

- is optional
- type: `object`
- defined in this schema

### bike Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |
| `type`   | string | Optional     |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### type

`type`

- is optional
- type: `string`

##### type Type

`string`
