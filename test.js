'use strict';

describe('MaaS Schemas', () => {
  require('./test/feature-deref.js')();
  require('./test/feature-validate.js')();
  require('./test/feature-resolve.js')();
});
