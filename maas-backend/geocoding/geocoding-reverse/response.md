# response Schema

```
http://maasglobal.com/maas-backend/geocoding/geocoding-reverse/response.json
```

MaaS.fi geocoding (GeoJSON) response schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                              |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/geocoding/geocoding-reverse/response.json](response.json) |

# response Properties

| Property              | Type     | Required     | Nullable | Defined by             |
| --------------------- | -------- | ------------ | -------- | ---------------------- |
| [debug](#debug)       | `object` | Optional     | No       | response (this schema) |
| [features](#features) | `array`  | **Required** | No       | response (this schema) |
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
- type: `array`
- defined in this schema

### features Type

Array type: `array`

All items must be of the type:

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [feature](geolocation.md) – `http://maasglobal.com/core/components/geolocation.json#/definitions/feature`

#### Requirement 2

`object` with following properties:

| Property     | Type   | Required |
| ------------ | ------ | -------- |
| `properties` | object | Optional |

#### properties

`properties`

- is optional
- type: `object`

##### properties Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


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
