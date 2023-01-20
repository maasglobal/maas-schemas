import path from 'path';
import yargs from 'yargs';

import { generateCodecs } from './generate-codecs';
import { updateInterfaces } from './update-interfaces';

async function _main(sourceDir: string): Promise<void> {
  await generateCodecs(sourceDir);
  await updateInterfaces(sourceDir);
}

export function main(args: Array<string>): void {
  const { argv } = yargs(args)
    .option('packageRoot', { type: 'string', demandOption: true })
    .help();

  const packageRoot = path.resolve(argv.packageRoot);
  _main(packageRoot);
}
