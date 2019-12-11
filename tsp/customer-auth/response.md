# response Schema

```
http://maasglobal.com/tsp/customer-auth/response.json
```

Response schema for initiating customer authorization for TSP

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/customer-auth/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/tsp/customer-auth/response.json`
  - [units](../../core/components/units.md) `http://maasglobal.com/core/components/units.json`

# response Properties

| Property            | Type     | Required     | Nullable | Defined by             |
| ------------------- | -------- | ------------ | -------- | ---------------------- |
| [authUrl](#authurl) | `string` | **Required** | No       | response (this schema) |

## authUrl

Uniform resource locator, see https://en.wikipedia.org/wiki/Uniform_Resource_Locator and
https://mathiasbynens.be/demo/url-regex

`authUrl`

- is **required**
- type: `string`
- defined in this schema

### authUrl Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F%5B%5E%5Cs%2F%24.%3F%23%5D.%5B%5E%5Cs%5D*%24>)):

```regex
^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
```
