# kyc-service Schema

```
http://maasglobal.com/core/kyc-service.json
```

KycService object

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/kyc-service.json](kyc-service.json) |

# kyc-service Properties

| Property                                          | Type         | Required   | Nullable | Defined by                                 |
| ------------------------------------------------- | ------------ | ---------- | -------- | ------------------------------------------ |
| [id](#id)                                         | `string`     | Optional   | No       | kyc-service (this schema)                  |
| [supportedDocumentTypes](#supporteddocumenttypes) | documentType | Optional   | No       | kyc-service (this schema)                  |
| `*`                                               | any          | Additional | Yes      | this schema _allows_ additional properties |

## id

`id`

- is optional
- type: `string`
- defined in this schema

### id Type

`string`

## supportedDocumentTypes

List of document types that this KYC service supports

`supportedDocumentTypes`

- is optional
- type: documentType
- defined in this schema

### supportedDocumentTypes Type

Array type: documentType

All items must be of the type: `string`
