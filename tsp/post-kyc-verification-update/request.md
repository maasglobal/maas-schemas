# request Schema

```
http://maasglobal.com/tsp/post-kyc-verification-update/request.json
```

Request post KYC verification update

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                    |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/post-kyc-verification-update/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/post-kyc-verification-update/request.json`
  - [customer](../../core/customer.md) `http://maasglobal.com/core/customer.json`

## request Example

```json
{
  "customer": {
    "firstName": "John",
    "lastName": "Maas",
    "opaqueId": "8da153248154d1b3f4f7322245f1c93a588dc6aac53c46d551a547c8524c315e",
    "phone": "+35888999222",
    "email": "maasuser-test@maas.fi",
    "documents": [
      {
        "media": [
          {
            "context": "document-front",
            "content": "iVBORw0KGgoAAAANSUhEUgA"
          },
          {
            "context": "document-back",
            "content": "iVBORw0KGgoAAAANSUhEUgA"
          }
        ],
        "type": "DRIVERS_LICENSE",
        "documentNumber": "491102155590",
        "nameOnDocument": "NGUYEN DUY HIEU",
        "issuingCountry": "JP",
        "status": "APPROVED",
        "validFrom": "2018-10-12",
        "validTo": "2022-02-21"
      }
    ]
  }
}
```

# request Properties

| Property              | Type     | Required     | Nullable | Defined by            |
| --------------------- | -------- | ------------ | -------- | --------------------- |
| [customer](#customer) | customer | **Required** | No       | request (this schema) |

## customer

`customer`

- is **required**
- type: customer
- defined in this schema

### customer Type

- [customer](../../core/customer.md) – `http://maasglobal.com/core/customer.json`
