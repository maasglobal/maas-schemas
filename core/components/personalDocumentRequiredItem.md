# personalDocumentRequiredItem Schema

```
http://maasglobal.com/core/components/personalDocumentRequiredItem.json
```

MaaS personal document TSP requirements specification

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/components/personalDocumentRequiredItem.json](personalDocumentRequiredItem.json) |

# personalDocumentRequiredItem Properties

| Property        | Type       | Required   | Nullable | Defined by                                 |
| --------------- | ---------- | ---------- | -------- | ------------------------------------------ |
| [items](#items) | `string[]` | Optional   | No       | personalDocumentRequiredItem (this schema) |
| [type](#type)   | `enum`     | Optional   | No       | personalDocumentRequiredItem (this schema) |
| `*`             | any        | Additional | Yes      | this schema _allows_ additional properties |

## items

`items`

- is optional
- type: `string[]`
- defined in this schema

### items Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

## type

`type`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value   | Description |
| ------- | ----------- |
| `allOf` |             |
| `anyOf` |             |
