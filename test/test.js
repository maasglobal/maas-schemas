'use strict';

describe('MaaS Schemas', () => {
  require('./feature-deref.js')();
  require('./feature-validate.js')();
  require('./feature-resolve.js')();
  require('./feature-require-prebuilt.js')();
});
