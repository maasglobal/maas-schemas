# response Schema

```
http://maasglobal.com/tsp/bookings-ticket/response.json
```

Response schema for retrieving a ticket from booking through a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/booking-ticket/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/tsp/bookings-ticket/response.json`
  - [units](../../core/components/units.md) `http://maasglobal.com/core/components/units.json`

# response Properties

| Property                    | Type      | Required     | Nullable | Defined by                                 |
| --------------------------- | --------- | ------------ | -------- | ------------------------------------------ |
| [contentType](#contenttype) | `enum`    | **Required** | No       | response (this schema)                     |
| [refreshAt](#refreshat)     | `integer` | Optional     | No       | response (this schema)                     |
| [ticket](#ticket)           | `string`  | **Required** | No       | response (this schema)                     |
| [type](#type)               | `enum`    | **Required** | No       | response (this schema)                     |
| `*`                         | any       | Additional   | Yes      | this schema _allows_ additional properties |

## contentType

`contentType`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#contenttype-known-values).

### contentType Known Values

| Value             | Description |
| ----------------- | ----------- |
| `application/pdf` |             |
| `image/svg+xml`   |             |
| `text/html`       |             |

## refreshAt

Epoch when the ticket needs to be refreshed

`refreshAt`

- is optional
- type: `integer`
- defined in this schema

### refreshAt Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## ticket

`ticket`

- is **required**
- type: `string`
- defined in this schema

### ticket Type

`string`

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value  | Description |
| ------ | ----------- |
| `html` |             |
| `pdf`  |             |
| `svg`  |             |
