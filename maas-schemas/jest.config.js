'use strict';

const path = require('path');

module.exports = {
  verbose: true,
  bail: false,
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.js', '!**/test/test-lib.js'],
  setupTestFrameworkScriptFile: path.resolve('./jest.setupEnvironment.js'),
};
