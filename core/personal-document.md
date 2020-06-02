# personal-document Schema

```
http://maasglobal.com/core/personal-document.json
```

Personal document object

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                            |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [core/personal-document.json](personal-document.json) |

## Schema Hierarchy

- personal-document `http://maasglobal.com/core/personal-document.json`
  - [units](components/units.md) `http://maasglobal.com/core/components/units.json`

# personal-document Properties

| Property                          | Type       | Required     | Nullable | Defined by                      |
| --------------------------------- | ---------- | ------------ | -------- | ------------------------------- |
| [details](#details)               | `object`   | Optional     | No       | personal-document (this schema) |
| [documentNumber](#documentnumber) | `string`   | **Required** | No       | personal-document (this schema) |
| [identityId](#identityid)         | complex    | Optional     | No       | personal-document (this schema) |
| [issuingCountry](#issuingcountry) | `string`   | **Required** | No       | personal-document (this schema) |
| [media](#media)                   | `object[]` | Optional     | No       | personal-document (this schema) |
| [nameOnDocument](#nameondocument) | `string`   | **Required** | No       | personal-document (this schema) |
| [status](#status)                 | `enum`     | **Required** | No       | personal-document (this schema) |
| [type](#type)                     | `string`   | **Required** | No       | personal-document (this schema) |
| [validFrom](#validfrom)           | `string`   | **Required** | No       | personal-document (this schema) |
| [validTo](#validto)               | `string`   | **Required** | No       | personal-document (this schema) |

## details

`details`

- is optional
- type: `object`
- defined in this schema

### details Type

`object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `category` | string | Optional |

#### category

`category`

- is optional
- type: `string`

##### category Type

`string`

## documentNumber

`documentNumber`

- is **required**
- type: `string`
- defined in this schema

### documentNumber Type

`string`

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

## issuingCountry

`issuingCountry`

- is **required**
- type: `string`
- defined in this schema

### issuingCountry Type

`string`

- minimum length: 2 characters

## media

Media documents related to user personal document.

`media`

- is optional
- type: `object[]`
- defined in this schema

### media Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `content` | string | **Required** |
| `context` | string | **Required** |

#### content

`content`

- is **required**
- type: `string`

##### content Type

`string`

#### context

`context`

- is **required**
- type: `string`

##### context Type

`string`

## nameOnDocument

`nameOnDocument`

- is **required**
- type: `string`
- defined in this schema

### nameOnDocument Type

`string`

## status

`status`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#status-known-values).

### status Known Values

| Value                    | Description |
| ------------------------ | ----------- |
| `PENDING`                |             |
| `APPROVED`               |             |
| `DECLINED`               |             |
| `EXPIRED`                |             |
| `RESUBMISSION_REQUESTED` |             |
| `ABANDONED`              |             |

## type

`type`

- is **required**
- type: `string`
- defined in this schema

### type Type

`string`

## validFrom

A date in the form YYYY-MM-DD without a time component

`validFrom`

- is **required**
- type: `string`
- defined in this schema

### validFrom Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7D)):

```regex
^\d{4}-\d{2}-\d{2}
```

## validTo

A date in the form YYYY-MM-DD without a time component

`validTo`

- is **required**
- type: `string`
- defined in this schema

### validTo Type

`string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7D)):

```regex
^\d{4}-\d{2}-\d{2}
```
