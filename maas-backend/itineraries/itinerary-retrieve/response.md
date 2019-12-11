# response Schema

```
http://maasglobal.com/maas-backend/itineraries/itinerary-retrieve/response.json
```

Response schema for itinerary-retrieve

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                 |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/itineraries/itinerary-retrieve/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/itineraries/itinerary-retrieve/response.json`
  - [itinerary](../../../core/itinerary.md) `http://maasglobal.com/core/itinerary.json`

# response Properties

| Property                | Type      | Required     | Nullable | Defined by             |
| ----------------------- | --------- | ------------ | -------- | ---------------------- |
| [itinerary](#itinerary) | itinerary | **Required** | No       | response (this schema) |
| [maas](#maas)           | `object`  | Optional     | No       | response (this schema) |

## itinerary

`itinerary`

- is **required**
- type: itinerary
- defined in this schema

### itinerary Type

- [itinerary](../../../core/itinerary.md) – `http://maasglobal.com/core/itinerary.json`

## maas

`maas`

- is optional
- type: `object`
- defined in this schema

### maas Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |

