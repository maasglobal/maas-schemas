

import sys; sys.stdout.write(('/*' + '\n' + '/*'.join(
  '*/'.join(sys.stdin.read().split('```typescript')).split('```')
) + '*/').replace("from 'maasglobal-json-schema-validator'", "from './index'").replace("from 'maasglobal-json-schema-validator/lib/", "from './").replace("from 'maas-schemas/", "from '../../maas-schemas/").replace('[registry]', '[registry as any]') + '\n' + 'export { phone }')
