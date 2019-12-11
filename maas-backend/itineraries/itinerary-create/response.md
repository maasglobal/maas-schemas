# response Schema

```
http://maasglobal.com/maas-backend/itineraries/itinerary-create/response.json
```

Response schema for itineraries-create

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                               |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------ |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [maas-backend/itineraries/itinerary-create/response.json](response.json) |

# response Definitions

| Property              | Type                      | Group                                                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [avainpay](#avainpay) | avainpayPaymentParameters | `http://maasglobal.com/maas-backend/itineraries/itinerary-create/response.json#/definitions/paymentParameter` |
| [stripe](#stripe)     | stripePaymentParameters   | `http://maasglobal.com/maas-backend/itineraries/itinerary-create/response.json#/definitions/paymentParameter` |

## avainpay

`avainpay`

- is optional
- type: avainpayPaymentParameters
- defined in this schema

### avainpay Type

- [avainpayPaymentParameters](payment-parameters.md) –
  `http://maasglobal.com/core/components/payment-parameters.json#/definitions/avainpayPaymentParameters`

## stripe

`stripe`

- is optional
- type: stripePaymentParameters
- defined in this schema

### stripe Type

- [stripePaymentParameters](payment-parameters.md) –
  `http://maasglobal.com/core/components/payment-parameters.json#/definitions/stripePaymentParameters`

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

`object` with following properties:

| Property            | Type | Required     |
| ------------------- | ---- | ------------ |
| `itinerary`         |      | **Required** |
| `paymentParameters` |      | Optional     |

#### itinerary

`itinerary`

- is **required**
- type: itinerary

##### itinerary Type

- [itinerary](itinerary.md) – `http://maasglobal.com/core/itinerary.json`

#### paymentParameters

Payment parameters for asynchronous payment methods

`paymentParameters`

- is optional
- type: paymentParameters

##### paymentParameters Type

- [paymentParameters](response.md) – `#/definitions/paymentParameters`

#### Condition 2

`object` with following properties:

| Property            | Type | Required     |
| ------------------- | ---- | ------------ |
| `outward`           |      | **Required** |
| `paymentParameters` |      | Optional     |
| `return`            |      | Optional     |

#### outward

`outward`

- is **required**
- type: itinerary

##### outward Type

- [itinerary](itinerary.md) – `http://maasglobal.com/core/itinerary.json`

#### paymentParameters

Payment parameters for asynchronous payment methods

`paymentParameters`

- is optional
- type: paymentParameters

##### paymentParameters Type

- [paymentParameters](response.md) – `#/definitions/paymentParameters`

#### return

`return`

- is optional
- type: itinerary

##### return Type

- [itinerary](itinerary.md) – `http://maasglobal.com/core/itinerary.json`
