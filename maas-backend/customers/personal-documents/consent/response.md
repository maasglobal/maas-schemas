# response Schema

```
http://maasglobal.com/maas-backend/customers/personal-documents/consent/response.json
```

Save user consent to send all TSP required personal documents to TSP

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/personal-documents/consent/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/maas-backend/customers/personal-documents/consent/response.json`
  - [units](../../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [common](../../../../core/components/common.md) `http://maasglobal.com/core/components/common.json`

# response Properties

| Property                  | Type     | Required     | Nullable | Defined by             |
| ------------------------- | -------- | ------------ | -------- | ---------------------- |
| [agencyId](#agencyid)     | `string` | **Required** | No       | response (this schema) |
| [identityId](#identityid) | complex  | **Required** | No       | response (this schema) |

## agencyId

`agencyId`

- is **required**
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## identityId

`identityId`

- is **required**
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
