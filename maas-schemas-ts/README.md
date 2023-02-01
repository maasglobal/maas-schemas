# MaaS Schemas TypeScript Support

**DEPRECATED**

This auxiliary package started as an experiment to provide TypeScript support for the [maas-schemas](https://www.npmjs.com/package/maas-schemas) package. TypeScript support has since been added to the main package, and this package has been discontinued. Please migrate to the main schema package and update your import paths according to the following example.

```typescript
// old import path
import { Phone } from 'maas-schemas-ts/lib/core/components/common';

// new import path
import { Phone } from 'maas-schemas/lib/io-ts/core/components/common';
```
