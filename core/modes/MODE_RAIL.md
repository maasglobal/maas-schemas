# MODE_RAIL Schema

```
http://maasglobal.com/core/modes/MODE_RAIL.json
```

Schema for MODE_RAIL meta field

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/modes/MODE_RAIL.json](MODE_RAIL.json) |

# MODE_RAIL Properties

| Property                          | Type     | Required   | Nullable | Defined by                                 |
| --------------------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [deliveryMethod](#deliverymethod) | `object` | Optional   | No       | MODE_RAIL (this schema)                    |
| [outward](#outward)               | `object` | Optional   | No       | MODE_RAIL (this schema)                    |
| [return](#return)                 | `object` | Optional   | No       | MODE_RAIL (this schema)                    |
| `*`                               | any      | Additional | Yes      | this schema _allows_ additional properties |

## deliveryMethod

`deliveryMethod`

- is optional
- type: `object`
- defined in this schema

### deliveryMethod Type

`object` with following properties:

| Property                 | Type   | Required |
| ------------------------ | ------ | -------- |
| `alternativeCollections` | string | Optional |
| `name`                   | string | Optional |
| `stationId`              | string | Optional |

#### alternativeCollections

`alternativeCollections`

- is optional
- type: `string`

##### alternativeCollections Type

`string`

#### name

`name`

- is optional
- type: `string`

##### name Type

`string`

#### stationId

`stationId`

- is optional
- type: id

##### stationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## outward

`outward`

- is optional
- type: `object`
- defined in this schema

### outward Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `from`   | place  | **Required** |
| `id`     | string | Optional     |
| `to`     | place  | **Required** |

#### from

`from`

- is **required**
- type: place

##### from Type

- [place](../components/place.md) – `http://maasglobal.com/core/components/place.json`

#### id

Arbitrary outward journey id given by either TSP or map provider

`id`

- is optional
- type: `string`

##### id Type

`string`

#### to

`to`

- is **required**
- type: place

##### to Type

- [place](../components/place.md) – `http://maasglobal.com/core/components/place.json`

## return

`return`

- is optional
- type: `object`
- defined in this schema

### return Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `from`   | place  | **Required** |
| `id`     | string | Optional     |
| `to`     | place  | **Required** |

#### from

`from`

- is **required**
- type: place

##### from Type

- [place](../components/place.md) – `http://maasglobal.com/core/components/place.json`

#### id

Arbitrary return journey id given by either TSP or map provider

`id`

- is optional
- type: `string`

##### id Type

`string`

#### to

`to`

- is **required**
- type: place

##### to Type

- [place](../components/place.md) – `http://maasglobal.com/core/components/place.json`
