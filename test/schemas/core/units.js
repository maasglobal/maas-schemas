'use strict';

const schema = require('../../../prebuilt/core/components/units.json').definitions;
const { generateTestCases } = require('../../../test-lib');

describe('units', () => {
  describe('htmlBlock', () => {
    generateTestCases(schema.htmlBlock, true, [
      '<p>First parag</p></p>Second parag</p>',
      '<main>Main content</main>',
      '<h1>Heading</h1><footer>Footer</footer>',
      '<div>Block content</div>',
      '<div>Multiline</div>\n<div>Content</div>',
    ]);

    generateTestCases(schema.htmlBlock, false, [
      'Plain text',,
      '',
      '# Markdown',
      '<a href="https://example.com">Some link</a>', // Inline content
    ]);
  });
});
