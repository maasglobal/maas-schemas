import * as fs_ from 'fs';
import { parseSchemaPackage, RootDir } from 'maasglobal-schema-package';
import path from 'path';
import yargs from 'yargs';

import { generateCodecs } from './generate-codecs';
import { updateInterfaces } from './update-interfaces';

async function _main(rootDir: RootDir): Promise<void> {
  const pkg = parseSchemaPackage(rootDir);

  const targetDir = path.posix.join(pkg.paths.src, 'io-ts');
  fs_.mkdirSync(targetDir, { recursive: true });

  await generateCodecs(pkg);
  await updateInterfaces(pkg);
}

export function main(args: Array<string>): void {
  const { argv } = yargs(args)
    .option('packageRoot', { type: 'string', demandOption: true })
    .help();

  const packageRoot = path.resolve(argv.packageRoot);
  _main(packageRoot);
}
