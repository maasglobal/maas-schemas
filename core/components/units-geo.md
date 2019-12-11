# units-geo Schema

```
http://maasglobal.com/core/components/units-geo.json
```

MaaS common geolocaion units that are used consistently within our own objects

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/components/units-geo.json](units-geo.json) |

# units-geo Definitions

| Property    | Type             | Group                                                                               |
| ----------- | ---------------- | ----------------------------------------------------------------------------------- |
| [lat](#lat) | relaxedLatitude  | `http://maasglobal.com/core/components/units-geo.json#/definitions/relaxedLocation` |
| [lon](#lon) | relaxedLongitude | `http://maasglobal.com/core/components/units-geo.json#/definitions/relaxedLocation` |

## lat

`lat`

- is **required**
- type: relaxedLatitude
- defined in this schema

### lat Type

- [relaxedLatitude](units-geo.md) – `#/definitions/relaxedLatitude`

## lon

`lon`

- is **required**
- type: relaxedLongitude
- defined in this schema

### lon Type

- [relaxedLongitude](units-geo.md) – `#/definitions/relaxedLongitude`
