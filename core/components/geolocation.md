# geolocation Schema

```
http://maasglobal.com/core/components/geolocation.json
```

Partial (Points only) GeoJSON Schema

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                           |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/components/geolocation.json](geolocation.json) |

# geolocation Definitions

| Property                      | Type          | Group                                                                                   |
| ----------------------------- | ------------- | --------------------------------------------------------------------------------------- |
| [city](#city)                 | `string`      | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |
| [coordinates](#coordinates)   | shortLocation | `http://maasglobal.com/core/components/geolocation.json#/definitions/geometry`          |
| [country](#country)           | `string`      | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |
| [countryCode](#countrycode)   | `string`      | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |
| [features](#features)         | feature       | `http://maasglobal.com/core/components/geolocation.json#/definitions/featureCollection` |
| [geometry](#geometry)         | geometry      | `http://maasglobal.com/core/components/geolocation.json#/definitions/feature`           |
| [houseNumber](#housenumber)   | `integer`     | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |
| [name](#name)                 | `string`      | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |
| [properties](#properties)     | properties    | `http://maasglobal.com/core/components/geolocation.json#/definitions/feature`           |
| [streetName](#streetname)     | `string`      | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |
| [streetNumber](#streetnumber) | `string`      | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |
| [type](#type)                 | `enum`        | `http://maasglobal.com/core/components/geolocation.json#/definitions/geometry`          |
| [zipcode](#zipcode)           | zipCode       | `http://maasglobal.com/core/components/geolocation.json#/definitions/properties`        |

## city

`city`

- is optional
- type: `string`
- defined in this schema

### city Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## coordinates

`coordinates`

- is **required**
- type: shortLocation
- defined in this schema

### coordinates Type

- [shortLocation](units-geo.md) – `http://maasglobal.com/core/components/units-geo.json#/definitions/shortLocation`

## country

`country`

- is optional
- type: `string`
- defined in this schema

### country Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## countryCode

`countryCode`

- is optional
- type: `string`
- defined in this schema

### countryCode Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## features

`features`

- is **required**
- type: feature
- defined in this schema

### features Type

Array type: feature

All items must be of the type:

- [feature](geolocation.md) – `#/definitions/feature`

## geometry

`geometry`

- is **required**
- type: geometry
- defined in this schema

### geometry Type

- [geometry](geolocation.md) – `#/definitions/geometry`

## houseNumber

`houseNumber`

- is optional
- type: `integer`
- defined in this schema

### houseNumber Type

`integer`

## name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## properties

`properties`

- is **required**
- type: properties
- defined in this schema

### properties Type

- [properties](geolocation.md) – `#/definitions/properties`

## streetName

`streetName`

- is optional
- type: `string`
- defined in this schema

### streetName Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## streetNumber

`streetNumber`

- is optional
- type: `string`
- defined in this schema

### streetNumber Type

`string`

- minimum length: 1 characters
- maximum length: 16 characters

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value   | Description |
| ------- | ----------- |
| `Point` |             |

## zipcode

`zipcode`

- is optional
- type: zipCode
- defined in this schema

### zipcode Type

- [zipCode](address.md) – `http://maasglobal.com/core/components/address.json#/definitions/zipCode`
