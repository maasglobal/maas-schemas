'use strict';

// Migrate global syntax from mocha to jest
global.context = describe;
global.before = beforeAll;
global.after = afterAll;
