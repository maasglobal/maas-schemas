'use strict';

describe('MaaS Schemas', () => {
  require('./feature-deref.js')();
  require('./feature-validate.js')();
  require('./feature-require-schemas.js')();
  require('./feature-require-prebuilt.js')();
  require('./schemas');
});
