# MODE_SHARED_E_BICYCLE Schema

```
http://maasglobal.com/core/modes/MODE_SHARED_E_BICYCLE.json
```

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/modes/MODE_SHARED_E_BICYCLE.json](MODE_SHARED_E_BICYCLE.json) |

# MODE_SHARED_E_BICYCLE Properties

| Property      | Type     | Required   | Nullable | Defined by                                 |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [bike](#bike) | `object` | Optional   | No       | MODE_SHARED_E_BICYCLE (this schema)        |
| `*`           | any      | Additional | Yes      | this schema _allows_ additional properties |

## bike

`bike`

- is optional
- type: `object`
- defined in this schema

### bike Type

`object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `battery` | number | Optional     |
| `id`      | string | **Required** |

#### battery

`battery`

- is optional
- type: `number`

##### battery Type

`number`

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`
