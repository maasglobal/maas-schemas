# travel-mode Schema

```
http://maasglobal.com/core/components/travel-mode.json
```

Transfer modes used for MaaS internal services

| Abstract               | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                           |
| ---------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ---------------------------------------------------- |
| Cannot be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/components/travel-mode.json](travel-mode.json) |

**Any** following _options_ needs to be fulfilled.

#### Option 1

- [waitingMode](travel-mode.md) – `#/definitions/waitingMode`

#### Option 2

- [transferMode](travel-mode.md) – `#/definitions/transferMode`

#### Option 3

- [personalMode](travel-mode.md) – `#/definitions/personalMode`

#### Option 4

- [publicTransitMode](travel-mode.md) – `#/definitions/publicTransitMode`

#### Option 5

- [privateTransitMode](travel-mode.md) – `#/definitions/privateTransitMode`
