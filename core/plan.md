# plan Schema

```
http://maasglobal.com/core/plan.json
```

OpenTripPlanner compatible format for plans, extended with id for legs and itineraries

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                  |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/plan.json](plan.json) |

# plan Definitions

| Property                    | Type        | Group                                                     |
| --------------------------- | ----------- | --------------------------------------------------------- |
| [from](#from)               | place       | `http://maasglobal.com/core/plan.json#/definitions/plan2` |
| [itineraries](#itineraries) | itineraries | `http://maasglobal.com/core/plan.json#/definitions/plan2` |
| [outwards](#outwards)       | itineraries | `http://maasglobal.com/core/plan.json#/definitions/plan1` |
| [planId](#planid)           | uuid        | `http://maasglobal.com/core/plan.json#/definitions/plan2` |
| [returns](#returns)         | itineraries | `http://maasglobal.com/core/plan.json#/definitions/plan1` |

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

- [itineraries](plan.md) – `#/definitions/itineraries`

## outwards

`outwards`

- is **required**
- type: itineraries
- defined in this schema

### outwards Type

- [itineraries](plan.md) – `#/definitions/itineraries`

## planId

`planId`

- is **required**
- type: uuid
- defined in this schema

### planId Type

- [uuid](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/uuid`

## returns

`returns`

- is **required**
- type: itineraries
- defined in this schema

### returns Type

- [itineraries](plan.md) – `#/definitions/itineraries`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [plan1](plan.md) – `#/definitions/plan1`

#### Condition 2

- [plan2](plan.md) – `#/definitions/plan2`
