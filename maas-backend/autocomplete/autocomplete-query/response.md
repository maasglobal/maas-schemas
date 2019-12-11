# response Schema

```
http://maasglobal.com/maas-backend/autocomplete/autocomplete-query/response.json
```

Response schema for autocomplete

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/autocomplete/autocomplete-query/response.json](response.json) |

# response Properties

| Property                    | Type       | Required     | Nullable | Defined by             |
| --------------------------- | ---------- | ------------ | -------- | ---------------------- |
| [debug](#debug)             | `object`   | Optional     | No       | response (this schema) |
| [suggestions](#suggestions) | `string[]` | **Required** | No       | response (this schema) |

## debug

`debug`

- is optional
- type: `object`
- defined in this schema

### debug Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## suggestions

`suggestions`

- is **required**
- type: `string[]`
- defined in this schema

### suggestions Type

Array type: `string[]`

All items must be of the type: `string`
