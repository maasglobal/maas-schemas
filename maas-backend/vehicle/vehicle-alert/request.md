# request Schema

```
http://maasglobal.com/maas-backend/vehicle/vehicle-alert/request.json
```

Request to vehicle

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [maas-backend/vehicle/vehicle-alert/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/vehicle/vehicle-alert/request.json`
  - [product](../../../core/product.md) `http://maasglobal.com/core/product.json`

# request Properties

| Property                | Type     | Required   | Nullable | Defined by                                 |
| ----------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [productId](#productid) | `string` | Optional   | No       | request (this schema)                      |
| [vehicleId](#vehicleid) | `string` | Optional   | No       | request (this schema)                      |
| `*`                     | any      | Additional | Yes      | this schema _allows_ additional properties |

## productId

`productId`

- is optional
- type: `string`
- defined in this schema

### productId Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters

## vehicleId

`vehicleId`

- is optional
- type: `string`
- defined in this schema

### vehicleId Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters
