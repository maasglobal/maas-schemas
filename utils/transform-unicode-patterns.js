'use strict';

const rewritePattern = require('regexpu-core');

const UNICODE_REGEX_OPTS = {
  dotAllFlag: true,
  unicodePropertyEscape: true,
  useUnicodeFlag: false,
};
const UNICODE_REGEX_FLAGS = 'us';

/**
 * Find the key in object mattching a pattern and modify its value using a function
 *
 * @param {Object} input
 * @param {string} pattern - string pattern to look for in the key
 * @param {Object} modifierFunc - Allow caller to modify based on existing value
 *
 * @return {Object} input that has all its nested key replaced
 */
function findAndReplace(input, pattern, modifierFunc) {
  const copy = JSON.parse(JSON.stringify(input));
  if (copy[pattern]) copy[pattern] = modifierFunc(copy[pattern]);

  Object.keys(copy).forEach(key => {
    if (typeof copy[key] === 'object' && copy[key] !== null && !Array.isArray(copy[key])) {
      copy[key] = findAndReplace(copy[key], pattern, modifierFunc);
    }
  });

  return copy;
}

/**
 * Compiles JSON schema into a function that can be used as-is without AJV
 */
function transform(schema) {
  schema = findAndReplace(schema, 'pattern', existingValue => {
    return rewritePattern(existingValue, UNICODE_REGEX_FLAGS, UNICODE_REGEX_OPTS);
  });

  return schema;
}

module.exports = {
  transform,
};
