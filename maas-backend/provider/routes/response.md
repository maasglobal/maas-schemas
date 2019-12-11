# response Schema

```
http://maasglobal.com/maas-backend/provider/routes/response.json
```

Response schema for routes providers, subset of routes-query response schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/provider/routes/response.json](response.json) |

# response Definitions

| Property                    | Type        | Group                                                                                 |
| --------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| [from](#from)               | place       | `http://maasglobal.com/maas-backend/provider/routes/response.json#/definitions/plan2` |
| [itineraries](#itineraries) | itineraries | `http://maasglobal.com/maas-backend/provider/routes/response.json#/definitions/plan2` |
| [outwards](#outwards)       | itineraries | `http://maasglobal.com/maas-backend/provider/routes/response.json#/definitions/plan1` |
| [returns](#returns)         | itineraries | `http://maasglobal.com/maas-backend/provider/routes/response.json#/definitions/plan1` |

## from

`from`

- is **required**
- type: place
- defined in this schema

### from Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

## itineraries

`itineraries`

- is **required**
- type: itineraries
- defined in this schema

### itineraries Type

- [itineraries](response.md) – `#/definitions/itineraries`

## outwards

`outwards`

- is **required**
- type: itineraries
- defined in this schema

### outwards Type

- [itineraries](response.md) – `#/definitions/itineraries`

## returns

`returns`

- is **required**
- type: itineraries
- defined in this schema

### returns Type

- [itineraries](response.md) – `#/definitions/itineraries`

# response Properties

| Property      | Type    | Required   | Nullable | Defined by                                 |
| ------------- | ------- | ---------- | -------- | ------------------------------------------ |
| [plan](#plan) | complex | Optional   | No       | response (this schema)                     |
| `*`           | any     | Additional | Yes      | this schema _allows_ additional properties |

## plan

`plan`

- is optional
- type: complex
- defined in this schema

### plan Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [plan1](response.md) – `#/definitions/plan1`

#### Condition 2

- [plan2](response.md) – `#/definitions/plan2`
