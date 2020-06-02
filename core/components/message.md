# message Schema

```
http://maasglobal.com/core/components/message.json
```

MaaS booking message object

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/components/message.json](message.json) |

# message Properties

| Property              | Type     | Required     | Nullable | Defined by            |
| --------------------- | -------- | ------------ | -------- | --------------------- |
| [mode](#mode)         | `enum`   | **Required** | No       | message (this schema) |
| [property](#property) | `string` | **Required** | No       | message (this schema) |
| [text](#text)         | `string` | **Required** | No       | message (this schema) |

## mode

Booking meta mode

`mode`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#mode-known-values).

### mode Known Values

| Value                   | Description |
| ----------------------- | ----------- |
| `MODE_WALK`             |             |
| `MODE_BICYCLE`          |             |
| `MODE_CAR`              |             |
| `MODE_TRAM`             |             |
| `MODE_SUBWAY`           |             |
| `MODE_RAIL`             |             |
| `MODE_BUS`              |             |
| `MODE_FERRY`            |             |
| `MODE_CABLE_CAR`        |             |
| `MODE_GONDOLA`          |             |
| `MODE_FUNICULAR`        |             |
| `MODE_SHARED_BICYCLE`   |             |
| `MODE_SHARED_E_BICYCLE` |             |
| `MODE_SHARED_CAR`       |             |
| `MODE_TRANSIT`          |             |
| `MODE_TRAIN`            |             |
| `MODE_TRAINISH`         |             |
| `MODE_BUSISH`           |             |
| `MODE_TAXI`             |             |
| `MODE_SCOOTER`          |             |

## property

Property name where the message will be injected to

`property`

- is **required**
- type: `string`
- defined in this schema

### property Type

`string`

## text

Actual message

`text`

- is **required**
- type: `string`
- defined in this schema

### text Type

`string`

- maximum length: 160 characters
