'use strict';

const fg = require('fast-glob');
const fs = require('fs');

const schemaPaths = fg.sync(['schemas/**/*.json'], { cwd: __dirname });

let fileContent = "'use strict'\nmodule.exports = {";
fileContent += '\n';

schemaPaths.forEach(path => {
  const relativePath = `./${path}`;
  fileContent = fileContent + `'${path}': require('` + relativePath + "'),\n";
});

fileContent += '}';

fs.writeFileSync('registry.js', fileContent, { encoding: 'utf-8' });
