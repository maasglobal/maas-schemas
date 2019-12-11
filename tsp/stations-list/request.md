# request Schema

```
http://maasglobal.com/tsp/stations-list/request.json
```

MaaS stations query request schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                     |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/stations-list/request.json](request.json) |

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`object` with following properties:

| Property   | Type | Required     |
| ---------- | ---- | ------------ |
| `location` |      | **Required** |
| `radius`   |      | Optional     |

#### location

`location`

- is **required**
- type: shortLocationString

##### location Type

- [shortLocationString](units-geo.md) –
  `http://maasglobal.com/core/components/units-geo.json#/definitions/shortLocationString`

#### radius

`radius`

- is optional
- type: distance

##### radius Type

- [distance](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/distance`

#### Condition 2

`object` with following properties:

| Property | Type    | Required     |
| -------- | ------- | ------------ |
| `count`  | integer | Optional     |
| `name`   | string  | **Required** |
| `type`   |         | **Required** |

#### count

`count`

- is optional
- type: `integer`

##### count Type

`integer`

- minimum value: `1`

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- minimum length: 3 characters

#### type

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#-known-values).

##### type Known Values

| Value         | Description |
| ------------- | ----------- |
| `origin`      |             |
| `destination` |             |
| `viaAvoid`    |             |
