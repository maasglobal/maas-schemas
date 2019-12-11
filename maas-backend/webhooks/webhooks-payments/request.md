# request Schema

```
http://maasglobal.com/maas-backend/webhooks/webhooks-payments/request.json
```

MaaS webhook to receive payment status updates from payment gateways.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                           |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [maas-backend/webhooks/webhooks-payments/request.json](request.json) |

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [request](avainpay.md) –
  `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json#/definitions/request`

#### Condition 2

- [request](stripe.md) –
  `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/stripe.json#/definitions/request`

#### Condition 3

- [request](yaband.md) –
  `http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/yaband.json#/definitions/request`
