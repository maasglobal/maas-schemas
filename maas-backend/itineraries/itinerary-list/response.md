# response Schema

```
http://maasglobal.com/maas-backend/itineraries/itinerary-list/response.json
```

Response schema for itineraries-list

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/itineraries/itinerary-list/response.json](response.json) |

# response Properties

| Property                    | Type      | Required     | Nullable | Defined by             |
| --------------------------- | --------- | ------------ | -------- | ---------------------- |
| [itineraries](#itineraries) | itinerary | **Required** | No       | response (this schema) |
| [maas](#maas)               | `object`  | Optional     | No       | response (this schema) |

## itineraries

`itineraries`

- is **required**
- type: itinerary
- at least `0` items in the array
- defined in this schema

### itineraries Type

Array type: itinerary

All items must be of the type:

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

