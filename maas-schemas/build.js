'use strict';

const fg = require('fast-glob');
const fs = require('fs');

const schemaPaths = fg.sync(['schemas/**/*.json'], { cwd: __dirname });

const modulePaths = schemaPaths
  .map(schemaPath => {
    return `'${schemaPath}': require('./${schemaPath}')`;
  })
  .join(',\n');

const fileContent = `'use strict'\nmodule.exports = {\n${modulePaths}\n}`;

fs.writeFileSync('registry.js', fileContent, { encoding: 'utf-8' });
