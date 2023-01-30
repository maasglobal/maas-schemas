'use strict';

import fs from 'fs';
import * as glob from 'glob';
import * as mjsv from 'maasglobal-json-schema-validator';
import { parseSchemaPackage, RootDir, SchemaPackage } from 'maasglobal-schema-package';
import path from 'path';
import yargs from 'yargs';

type SourceCode = string;

type CodeGenerator = (p: SchemaPackage) => SourceCode;

export const generateRegistry: CodeGenerator = (pkg) => {
  const schemaPaths = glob.sync(path.posix.join(pkg.paths.schemas, '**', '*.json'), {
    cwd: __dirname,
  });

  const modulePaths = schemaPaths.map((schemaPath: string) => {
    const relativePath = path.relative(pkg.paths.root, schemaPath);
    const requirePath = path.posix.join('..', '..', relativePath);
    return `require('${requirePath}')`;
  });

  return `import * as mjsv from 'maasglobal-json-schema-validator';

export const registry: mjsv.Registry = { "schemas": [
${modulePaths.join(',\n')}
] }

module.exports = registry;
`;
};

export const generateClient: CodeGenerator = (pkg) => {
  const registries = Object.values(pkg.manifest.deps)
    .map((dep) => `require('${mjsv.registryPath(dep.package)}')`)
    .concat("require('./registry')");

  return `import * as mjsv from 'maasglobal-json-schema-validator';

let validator: mjsv.Validator|undefined;

export function init(): mjsv.Validator {
  validator = mjsv.validator([
${registries.join(',\n')}
  ]);

  return validator;
}

export function cached(): mjsv.Validator {
  if (typeof validator !== 'undefined') {
    return validator
  }
  return init();
}

export function validate(schema: mjsv.Schema|mjsv.SchemaURI, obj: unknown): unknown {
  const instance = cached()
  return instance.validate(schema, obj);
}
`;
};

export const generateConformanceTests: CodeGenerator = (_pkg) => {
  return `import { testSchemaPackage } from 'maasglobal-json-schema-validator/lib/conformance';
import path from 'path';

describe('Ajv Validator Conformance', () => {
  const packageRoot = path.resolve(__dirname, '..', '..');
  testSchemaPackage(packageRoot, require);
});
`;
};

export function _main(rootDir: RootDir): void {
  const pkg = parseSchemaPackage(rootDir);

  const targetDir = path.join(pkg.paths.src, 'ajv');

  fs.mkdirSync(targetDir, { recursive: true });

  const files = {
    'registry.ts': generateRegistry(pkg),
    'index.ts': generateClient(pkg),
    'conformance.test.ts': generateConformanceTests(pkg),
  };

  Object.entries(files).forEach(([filename, contents]) => {
    const targetPath = path.join(targetDir, filename);
    fs.writeFileSync(targetPath, contents, { encoding: 'utf-8' });
  });
}

export function main(args: Array<string>): void {
  const { argv } = yargs(args)
    .option('packageRoot', { type: 'string', demandOption: true })
    .help();

  const packageRoot = path.resolve(argv.packageRoot);
  _main(packageRoot);
}
