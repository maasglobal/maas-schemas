import * as fs_ from 'fs';
import * as iotsfjs from 'io-ts-from-json-schema/lib/main';
import type * as mjsv from 'maasglobal-json-schema-validator';
import path from 'path';

export const logHeader = '# io-ts code generation log\n\n';

const relativeLogPath = path.posix.join('src', 'io-ts', '_translation.log');

async function runConverter(sourceDir: string): Promise<void> {
  const schemaGlob = path.posix.join(sourceDir, 'schemas', '**', '*.json');
  const typesDir = path.posix.join(sourceDir, 'src', 'io-ts', '_types');

  const manifestPath = path.resolve(__dirname, path.join(sourceDir, 'schemas.json'));

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const manifest: mjsv.Manifest = require(manifestPath);

  const { base, deps } = manifest;

  const importArgs = Object.entries(deps).map(
    ([depBase, dep]) => `${depBase}^${dep.package}/lib/io-ts`,
  );
  const imports = importArgs.length === 0 ? [] : ['--import', ...importArgs];

  const args = [
    '--inputFile',
    schemaGlob,
    '--outputDir',
    typesDir,
    '--base',
    base,
    ...imports,
    '--importHashLength',
    String(4),
    '--maskNull',
  ];

  const logPath = path.posix.join(sourceDir, relativeLogPath);
  const errStream = fs_.createWriteStream(logPath);
  errStream.write(logHeader);

  iotsfjs.main({
    args,
    stderr: errStream,
    stdout: process.stdout,
  });

  errStream.end();

  return new Promise((resolve) => errStream.on('finish', resolve));
}

async function getLog(sourceDir: string): Promise<string> {
  const logPath = path.posix.join(sourceDir, relativeLogPath);
  return fs_.readFileSync(logPath, 'utf8');
}

function printErrors(lines: Array<string>) {
  const tally: Record<string, number> = {};
  // eslint-disable-next-line fp/no-loops
  for (const line of lines) {
    if (tally.hasOwnProperty(line) === false) {
      // eslint-disable-next-line fp/no-mutation
      tally[line] = 0;
    }
    // eslint-disable-next-line fp/no-mutation
    tally[line] += 1;
  }
  const text = Object.entries(tally)
    .map(([k, v]) => `${String(v).padStart(8, ' ')}: ${k}`)
    .sort()
    .join('\n');
  console.log(text);
}

export async function generateCodecs(sourceDir: string): Promise<void> {
  await runConverter(sourceDir);

  // eslint-disable-next-line fp/no-let
  let log = String();
  // eslint-disable-next-line fp/no-loops
  while (log.length < logHeader.length) {
    // eslint-disable-next-line fp/no-mutation
    log = await getLog(sourceDir);
  }
  const lines = log.split('\n');
  console.log();
  console.log();
  printErrors(lines.filter((line) => line.startsWith('INFO')));
  console.log();
  printErrors(lines.filter((line) => line.startsWith('WARNING')));
  console.log();
  printErrors(lines.filter((line) => line.startsWith('ERROR')));
}
