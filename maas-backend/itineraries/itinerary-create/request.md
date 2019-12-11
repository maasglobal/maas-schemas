# request Schema

```
http://maasglobal.com/maas-backend/itineraries/itinerary-create/request.json
```

Request schema for itineraries-create

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [maas-backend/itineraries/itinerary-create/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/itineraries/itinerary-create/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Definitions

| Property                                  | Type       | Group                                                                                                            |
| ----------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| [customerSelections](#customerselections) | `object[]` | `http://maasglobal.com/maas-backend/itineraries/itinerary-create/request.json#/definitions/outwardReturnWrapper` |
| [itinerary](#itinerary)                   | itinerary  | `http://maasglobal.com/maas-backend/itineraries/itinerary-create/request.json#/definitions/outwardReturnWrapper` |

## customerSelections

`customerSelections`

- is optional
- type: `object[]`
- defined in this schema

### customerSelections Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property            | Type | Required |
| ------------------- | ---- | -------- |
| `customerSelection` |      | Optional |
| `ref`               |      | Optional |

#### customerSelection

`customerSelection`

- is optional
- type: customerSelection

##### customerSelection Type

- [customerSelection](customerSelection.md) – `http://maasglobal.com/core/components/customerSelection.json`

#### ref

`ref`

- is optional
- type: ref

##### ref Type

- [ref](product-option.md) – `http://maasglobal.com/core/product-option.json#/definitions/ref`

## itinerary

`itinerary`

- is optional
- type: itinerary
- defined in this schema

### itinerary Type

- [itinerary](itinerary.md) – `http://maasglobal.com/core/itinerary.json`

# request Properties

| Property                  | Type     | Required | Nullable | Defined by            |
| ------------------------- | -------- | -------- | -------- | --------------------- |
| [headers](#headers)       | `object` | Optional | No       | request (this schema) |
| [identityId](#identityid) | complex  | Optional | No       | request (this schema) |
| [payload](#payload)       | `object` | Optional | No       | request (this schema) |

## headers

`headers`

- is optional
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property            | Type | Required |
| ------------------- | ---- | -------- |
| `Accept`            |      | Optional |
| `X-Whim-User-Agent` |      | Optional |

#### Accept

`Accept`

- is optional
- type: acceptHeader

##### Accept Type

- [acceptHeader](api-common.md) – `#/definitions/acceptHeader`

#### X-Whim-User-Agent

`X-Whim-User-Agent`

- is optional
- type: userAgentHeader

##### X-Whim-User-Agent Type

- [userAgentHeader](api-common.md) – `#/definitions/userAgentHeader`

## identityId

`identityId`

- is optional
- type: complex
- defined in this schema

### identityId Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`string`

All instances must conform to this regular expression

```regex
^[aepus]{2}-[\w]{4}-\d:[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$
```

- test example:
  [eu-west-1:4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5Baepus%5D%7B2%7D-%5B%5Cw%5D%7B4%7D-%5Cd%3A%5Ba-f%5Cd%5D%7B8%7D(-%5Ba-f%5Cd%5D%7B4%7D)%7B3%7D-%5Ba-f%5Cd%5D%7B12%7D%24&text=eu-west-1%3A4828507e-683f-41bf-9d87-689808fbf958>)

#### Option 2

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### identityId Examples

```json
"eu-west-1:4828507e-683f-41bf-9d87-689808fbf958"
```

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## payload

`payload`

- is optional
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property          | Type      | Required |
| ----------------- | --------- | -------- |
| `itinerary`       | itinerary | Optional |
| `outward`         |           | Optional |
| `paymentSourceId` | string    | Optional |
| `return`          |           | Optional |

#### itinerary

`itinerary`

- is optional
- type: itinerary

##### itinerary Type

- [itinerary](../../../core/itinerary.md) – `http://maasglobal.com/core/itinerary.json`

#### outward

`outward`

- is optional
- type: outwardReturnWrapper

##### outward Type

- [outwardReturnWrapper](request.md) – `#/definitions/outwardReturnWrapper`

#### paymentSourceId

`paymentSourceId`

- is optional
- type: paymentSourceId

##### paymentSourceId Type

`string`

- minimum length: 3 characters
- maximum length: 255 characters

#### return

`return`

- is optional
- type: outwardReturnWrapper

##### return Type

- [outwardReturnWrapper](request.md) – `#/definitions/outwardReturnWrapper`
