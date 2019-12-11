# cost Schema

```
http://maasglobal.com/core/components/cost.json
```

MaaS common units that are used consistently within our own objects

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                             |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/components/cost.json](cost.json) |

# cost Properties

| Property                          | Type     | Required     | Nullable | Defined by         |
| --------------------------------- | -------- | ------------ | -------- | ------------------ |
| [amount](#amount)                 | `number` | **Required** | Yes      | cost (this schema) |
| [currency](#currency)             | complex  | **Required** | No       | cost (this schema) |
| [discount](#discount)             | `number` | Optional     | No       | cost (this schema) |
| [originalAmount](#originalamount) | `number` | Optional     | Yes      | cost (this schema) |
| [taxes](#taxes)                   | `number` | Optional     | No       | cost (this schema) |

## amount

`amount`

- is **required**
- type: `number`
- defined in this schema

### amount Type

`number`, nullable

- minimum value: `0`
- must be a multiple of `0.01`

## currency

`currency`

- is **required**
- type: complex
- defined in this schema

### currency Type

**One** of the following _conditions_ need to be fulfilled.

#### Condition 1

- [currency](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/currency`

#### Condition 2

## discount

`discount`

- is optional
- type: `number`
- defined in this schema

### discount Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`

## originalAmount

`originalAmount`

- is optional
- type: `number`
- defined in this schema

### originalAmount Type

`number`, nullable

- minimum value: `0`
- must be a multiple of `0.01`

## taxes

`taxes`

- is optional
- type: `number`
- defined in this schema

### taxes Type

`number`

- minimum value: `0`
- must be a multiple of `0.01`
