# response Schema

```
http://maasglobal.com/maas-backend/geocoding/geocoding-query/response.json
```

MaaS.fi geocoding (GeoJSON) response schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                            |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/geocoding/geocoding-query/response.json](response.json) |

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [debug](#debug)       | `object` | Optional     | No       | response (this schema) |
| [features](#features) | feature  | **Required** | No       | response (this schema) |
| [type](#type)         | `enum`   | **Required** | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## features

`features`

- is **required**
- type: feature
- defined in this schema

### features Type

Array type: feature

All items must be of the type: `object` with following properties:

| Property     | Type | Required     |
| ------------ | ---- | ------------ |
| `geometry`   |      | **Required** |
| `properties` |      | **Required** |
| `type`       |      | **Required** |

#### geometry

`geometry`

- is **required**
- type: geometry

##### geometry Type

- [geometry](geolocation.md) – `#/definitions/geometry`

#### properties

`properties`

- is **required**
- type: properties

##### properties Type

- [properties](geolocation.md) – `#/definitions/properties`

#### type

`type`

- is **required**
- type: `enum`

The value of this property **must** be equal to one of the [known values below](#features-known-values).

##### type Known Values

| Value     | Description |
| --------- | ----------- |
| `Feature` |             |

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value               | Description |
| ------------------- | ----------- |
| `FeatureCollection` |             |
