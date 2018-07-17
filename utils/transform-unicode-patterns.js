'use strict';

const jsonPath = require('jsonpath');
const rewritePattern = require('regexpu-core');

const UNICODE_REGEX_OPTS = {
  dotAllFlag: true,
  unicodePropertyEscape: true,
  useUnicodeFlag: false,
};
const UNICODE_REGEX_FLAGS = 'us';

/**
 * Compiles JSON schema into a function that can be used as-is without AJV
 */
function transform(schema) {
  // Find all matching unicode patterns
  jsonPath.apply(schema, '$..pattern', pattern => {
    return rewritePattern(pattern, UNICODE_REGEX_FLAGS, UNICODE_REGEX_OPTS);
  });

  return schema;
}

module.exports = {
  transform,
};
