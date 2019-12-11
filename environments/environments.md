# environments Schema

```
http://maasglobal.com/environments/environments.json
```

The base environments object with several environment groups and related meta data

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                          |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Forbidden             | [environments/environments.json](environments.json) |

## environments Example

```json
{
  "index": [
    {
      "name": "Core Environments",
      "envs": [
        {
          "id": "production",
          "api": "https://production.example.com/api/",
          "live": true,
          "contact": {
            "name": "Alisha Admin",
            "email": "admin@example.com"
          },
          "description": "Production environment"
        },
        {
          "id": "testing",
          "api": "https://testing.example.com/api/",
          "live": false,
          "contact": {
            "name": "Alisha Admin"
          },
          "description": "Testing environment"
        }
      ]
    },
    {
      "name": "Development Environments",
      "envs": [
        {
          "id": "fantasyTopping",
          "api": "https://fantasy.example.com/api/",
          "live": false,
          "contact": {
            "name": "Dennis Developer"
          },
          "name": "Fantasy Topping",
          "description": "Add support for pizza customization"
        }
      ]
    }
  ]
}
```

# environments Definitions

| Property                    | Type                        | Group                                                                                |
| --------------------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| [api](#api)                 | environmentUrl              | `http://maasglobal.com/environments/environments.json#/definitions/environment`      |
| [contact](#contact)         | developer                   | `http://maasglobal.com/environments/environments.json#/definitions/environment`      |
| [description](#description) | environmentGroupDescription | `http://maasglobal.com/environments/environments.json#/definitions/environmentGroup` |
| [email](#email)             | email                       | `http://maasglobal.com/environments/environments.json#/definitions/developer`        |
| [envs](#envs)               | environment                 | `http://maasglobal.com/environments/environments.json#/definitions/environmentGroup` |
| [id](#id)                   | environmentId               | `http://maasglobal.com/environments/environments.json#/definitions/environment`      |
| [live](#live)               | environmentLive             | `http://maasglobal.com/environments/environments.json#/definitions/environment`      |
| [name](#name)               | environmentGroupName        | `http://maasglobal.com/environments/environments.json#/definitions/environmentGroup` |

## api

`api`

- is **required**
- type: environmentUrl
- defined in this schema

### api Type

- [environmentUrl](environments.md) – `#/definitions/environmentUrl`

## contact

`contact`

- is **required**
- type: developer
- defined in this schema

### contact Type

- [developer](environments.md) – `#/definitions/developer`

## description

`description`

- is optional
- type: environmentGroupDescription
- defined in this schema

### description Type

- [environmentGroupDescription](environments.md) – `#/definitions/environmentGroupDescription`

## email

`email`

- is optional
- type: email
- defined in this schema

### email Type

- [email](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/email`

## envs

`envs`

- is **required**
- type: environment
- defined in this schema

### envs Type

Array type: environment

All items must be of the type:

- [environment](environments.md) – `#/definitions/environment`

## id

`id`

- is **required**
- type: environmentId
- defined in this schema

### id Type

- [environmentId](environments.md) – `#/definitions/environmentId`

## live

`live`

- is **required**
- type: environmentLive
- defined in this schema

### live Type

- [environmentLive](environments.md) – `#/definitions/environmentLive`

## name

`name`

- is **required**
- type: environmentGroupName
- defined in this schema

### name Type

- [environmentGroupName](environments.md) – `#/definitions/environmentGroupName`

# environments Properties

| Property        | Type             | Required     | Nullable | Defined by                 |
| --------------- | ---------------- | ------------ | -------- | -------------------------- |
| [index](#index) | environmentGroup | **Required** | No       | environments (this schema) |

## index

`index`

- is **required**
- type: environmentGroup
- defined in this schema

### index Type

Array type: environmentGroup

All items must be of the type:

- [environmentGroup](environments.md) – `#/definitions/environmentGroup`
