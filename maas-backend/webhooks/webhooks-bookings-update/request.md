# request Schema

```
http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-update/request.json
```

MaaS webhook to update bookings for tsp adapter callback request schema.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [maas-backend/webhooks/webhooks-bookings-update/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-update/request.json`
  - [remote-request](../../../tsp/webhooks-bookings-update/remote-request.md)
    `http://maasglobal.com/tsp/webhooks-bookings-update/remote-request.json`

# request Properties

| Property              | Type           | Required     | Nullable | Defined by                                 |
| --------------------- | -------------- | ------------ | -------- | ------------------------------------------ |
| [agencyId](#agencyid) | `string`       | **Required** | No       | request (this schema)                      |
| [payload](#payload)   | remote-request | **Required** | No       | request (this schema)                      |
| `*`                   | any            | Additional   | Yes      | this schema _allows_ additional properties |

## agencyId

`agencyId`

- is **required**
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 3 characters
- maximum length: 256 characters

## payload

`payload`

- is **required**
- type: remote-request
- defined in this schema

### payload Type

- [remote-request](../../../tsp/webhooks-bookings-update/remote-request.md) –
  `http://maasglobal.com/tsp/webhooks-bookings-update/remote-request.json`
