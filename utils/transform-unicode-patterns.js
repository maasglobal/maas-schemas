const jsonPath = require('jsonpath');
const rewritePattern = require('regexpu-core');
const transform = require('gulp-transform');

const UNICODE_REGEX_OPTS = {
  dotAllFlag: true,
  unicodePropertyEscape: true,
  useUnicodeFlag: false,
};
const UNICODE_REGEX_FLAGS = 'us';

/**
 * Compiles JSON schema into a function that can be used as-is without AJV
 */
function transformUnicode(json) {
  const schema = JSON.parse(json);

  // Find all matching unicode patterns
  jsonPath.apply(schema, '$..pattern', pattern => {
    return rewritePattern(pattern, UNICODE_REGEX_FLAGS, UNICODE_REGEX_OPTS);
  });

  return JSON.stringify(schema, null, 2);
}

module.exports = {
  transform: () => transform(transformUnicode, { encoding: 'utf8' }),
};
