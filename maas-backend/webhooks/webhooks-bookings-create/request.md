# request Schema

```
http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-create/request.json
```

Request schema for webhooks-bookings-create

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/webhooks/webhooks-bookings-create/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-create/request.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Properties

| Property            | Type     | Required     | Nullable | Defined by            |
| ------------------- | -------- | ------------ | -------- | --------------------- |
| [headers](#headers) | `object` | Optional     | No       | request (this schema) |
| [payload](#payload) | `object` | **Required** | No       | request (this schema) |

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

## payload

`payload`

- is **required**
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property            | Type              | Required     |
| ------------------- | ----------------- | ------------ |
| `customerSelection` | customerSelection | Optional     |
| `identityId`        | anyOf             | **Required** |
| `locale`            | string            | **Required** |
| `option`            |                   | **Required** |

#### customerSelection

`customerSelection`

- is optional
- type: customerSelection

##### customerSelection Type

- [customerSelection](../../../core/components/customerSelection.md) –
  `http://maasglobal.com/core/components/customerSelection.json`

#### identityId

`identityId`

- is **required**
- type: identityId

##### identityId Type

- [identityId](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/identityId`

##### identityId Examples

```json
eu-west-1:4828507e-683f-41bf-9d87-689808fbf958
```

```json
4828507e-683f-41bf-9d87-689808fbf958
```

#### locale

`locale`

- is **required**
- type: locale

##### locale Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%5Ba-z%5D%7B2%2C3%7D(%3F%3A-%5Ba-zA-Z%5D%7B4%7D)%3F(%3F%3A-%5BA-Z%5D%7B2%2C3%7D)%3F%24>)):

```regex
^[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?$
```

#### option

`option`

- is **required**
- type: complex

##### option Type

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

`object` with following properties:

| Property       | Type   | Required |
| -------------- | ------ | -------- |
| `configurator` |        | Optional |
| `cost`         |        | Optional |
| `leg`          |        | Optional |
| `meta`         |        | Optional |
| `terms`        |        | Optional |
| `tspProduct`   | object | Optional |

#### configurator

`configurator`

- is optional
- type: configurator

##### configurator Type

- [configurator](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/configurator`

#### cost

`cost`

- is optional
- type: cost

##### cost Type

- [cost](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/cost`

#### leg

`leg`

- is optional
- type: leg

##### leg Type

- [leg](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/leg`

#### meta

`meta`

- is optional
- type: booking-meta

##### meta Type

- [booking-meta](booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

#### terms

`terms`

- is optional
- type: terms

##### terms Type

- [terms](booking.md) – `http://maasglobal.com/core/booking.json#/definitions/terms`

#### tspProduct

`tspProduct`

- is optional
- type: `object`

##### tspProduct Type

`object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `id`     | string | Optional |

#### id

`id`

- is optional
- type: `string`

##### id Type

`string`

#### Requirement 2
