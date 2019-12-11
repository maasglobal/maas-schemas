# request Schema

```
http://maasglobal.com/maas-backend/profile/profile-favoriteLocations-delete/request.json
```

Request schema for profile-favoriteLocations-delete

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                         |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/profile/profile-favoriteLocations-delete/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/profile/profile-favoriteLocations-delete/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`

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

| Property            | Type   | Required |
| ------------------- | ------ | -------- |
| `Accept`            | string | Optional |
| `X-Whim-User-Agent` | string | Optional |

#### Accept

SemVer versioning schemas for versioning our resources

`Accept`

- is optional
- type: acceptHeader

##### Accept Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5Cbapplication%2Fjson%5B%3B%2C%5D%5Cs*version%3D((0%7C%5B1-9%5D%5Cd*)%5C.(0%7C%5B1-9%5D%5Cd*)%5C.(0%7C%5B1-9%5D%5Cd*)(-%5B%5Cda-z%5C-%5D%2B(%3F%3A%5C.%5B%5Cda-z%5C-%5D%2B)*)%3F(%3F%3A%5C%2B%5B%5Cda-z%5C-%5D%2B(%3F%3A%5C.%5B%5Cda-z%5C-%5D%2B)*)%3F)%5Cb>)):

```regex
\bapplication/json[;,]\s*version=((0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)\b
```

#### X-Whim-User-Agent

`X-Whim-User-Agent`

- is optional
- type: userAgentHeader

##### X-Whim-User-Agent Type

`string`

- minimum length: 1 characters

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

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `name`   | string | **Required** |

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters
