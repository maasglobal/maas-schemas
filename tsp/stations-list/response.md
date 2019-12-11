# response Schema

```
http://maasglobal.com/tsp/stations-list/response.json
```

MaaS stations query response schema

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/stations-list/response.json](response.json) |

# response Properties

| Property              | Type       | Required | Nullable | Defined by             |
| --------------------- | ---------- | -------- | -------- | ---------------------- |
| [stations](#stations) | `object[]` | Optional | No       | response (this schema) |

## stations

`stations`

- is optional
- type: `object[]`
- defined in this schema

### stations Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property       | Type | Required     |
| -------------- | ---- | ------------ |
| `address`      |      | Optional     |
| `agencyId`     |      | **Required** |
| `city`         |      | Optional     |
| `code`         |      | Optional     |
| `country`      |      | Optional     |
| `id`           |      | **Required** |
| `location`     |      | **Required** |
| `name`         |      | Optional     |
| `platformCode` |      | Optional     |
| `services`     |      | **Required** |
| `zone`         |      | Optional     |

#### address

`address`

- is optional
- type: address

##### address Type

- [address](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/address`

#### agencyId

`agencyId`

- is **required**
- type: agencyId

##### agencyId Type

- [agencyId](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/agencyId`

#### city

`city`

- is optional
- type: city

##### city Type

- [city](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/city`

#### code

`code`

- is optional
- type: code

##### code Type

- [code](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/code`

#### country

`country`

- is optional
- type: country

##### country Type

- [country](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/country`

#### id

`id`

- is **required**
- type: id

##### id Type

- [id](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/id`

#### location

`location`

- is **required**
- type: location

##### location Type

- [location](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/location`

#### name

`name`

- is optional
- type: name

##### name Type

- [name](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/name`

#### platformCode

`platformCode`

- is optional
- type: platformCode

##### platformCode Type

- [platformCode](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/platformCode`

#### services

`services`

- is **required**
- type: services

##### services Type

- [services](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/services`

#### zone

`zone`

- is optional
- type: zone

##### zone Type

- [zone](station.md) – `http://maasglobal.com/core/components/station.json#/definitions/zone`

Simplified station schema, coming as part of stations-list response
