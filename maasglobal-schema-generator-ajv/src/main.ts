'use strict';

import fs from 'fs';
import * as glob from 'glob';
import * as mjsv from 'maasglobal-json-schema-validator';
import path from 'path';
import yargs from 'yargs';

type SourceDir = string;
type SourceCode = string;

type SourcePackage = {
  sourceDir: SourceDir;
  manifest: mjsv.Manifest;
};

type CodeGenerator = (p: SourcePackage) => SourceCode;

export const getManifest = (sourceDir: SourceDir): mjsv.Manifest => {
  const manifestPath = path.resolve(__dirname, path.join(sourceDir, 'schemas.json'));

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const manifest: mjsv.Manifest = require(manifestPath);

  return manifest;
};

export const parseSourcePackage = (sourceDir: SourceDir): SourcePackage => {
  const manifest = getManifest(sourceDir);

  return {
    manifest,
    sourceDir,
  };
};

export const generateRegistry: CodeGenerator = ({ sourceDir }) => {
  const schemaPaths = glob.sync(path.posix.join(sourceDir, 'schemas', '**', '*.json'), {
    cwd: __dirname,
  });

  const modulePaths = schemaPaths.map((schemaPath: string) => {
    const relativePath = path.relative(sourceDir, schemaPath);
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

export const generateClient: CodeGenerator = ({ manifest }) => {
  const registries = Object.values(manifest.deps)
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

export const generateConformanceTests: CodeGenerator = (_sourcePackage) => {
  return `import { testSchemaPackage } from 'maasglobal-json-schema-validator/lib/conformance';
import path from 'path';

describe('Ajv Validator Conformance', () => {
  const packageRoot = path.resolve(__dirname, '..', '..');
  testSchemaPackage(packageRoot, require);
});
`;
};

export function _main(sourceDir: string): void {
  const sourcePackage = parseSourcePackage(sourceDir);

  const targetDir = path.join(sourceDir, 'src', 'ajv');

  fs.mkdirSync(targetDir, { recursive: true });

  const files = {
    'registry.ts': generateRegistry(sourcePackage),
    'index.ts': generateClient(sourcePackage),
    'conformance.test.ts': generateConformanceTests(sourcePackage),
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
