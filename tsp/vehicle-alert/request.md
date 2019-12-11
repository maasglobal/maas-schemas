# request Schema

```
http://maasglobal.com/tsp/vehicle-alert/request.json
```

Request vehicle to alert itself to users

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                     |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/vehicle-alert/request.json](request.json) |

# request Properties

| Property                | Type     | Required   | Nullable | Defined by                                 |
| ----------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [vehicleId](#vehicleid) | `string` | Optional   | No       | request (this schema)                      |
| `*`                     | any      | Additional | Yes      | this schema _allows_ additional properties |

## vehicleId

`vehicleId`

- is optional
- type: `string`
- defined in this schema

### vehicleId Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters
