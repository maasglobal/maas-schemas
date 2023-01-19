'use strict';

const fg = require('fast-glob');
const fs = require('fs');

const schemaPaths = fg.sync(['schemas/**/*.json'], { cwd: __dirname });

const modulePaths = schemaPaths
  .map(schemaPath => {
    return `require('../../${schemaPath}')`;
  })
  .join(',\n');

const fileContent = `'use strict'\nmodule.exports = { "schemas": [\n${modulePaths}\n] }\n`;

fs.writeFileSync('lib/ajv/registry.js', fileContent, { encoding: 'utf-8' });
