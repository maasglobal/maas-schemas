import * as fs_ from 'fs';
import { glob } from 'glob';
import { SchemaPackage } from 'maasglobal-schema-package';
import * as path_ from 'path';

export async function updateInterfaces(pkg: SchemaPackage): Promise<void> {
  const star = '*';
  const stop = '.';
  const suffix = 'ts';
  const lineEnding = '\n';
  const empty = String();

  const dirTypes = '_types';
  const dirUtils = '_utils';
  const dirTest = '__tests__';

  const root = path_.join(pkg.paths.src, 'io-ts');
  const rootTypes = path_.join(root, dirTypes);
  const rootUtils = path_.join(root, dirUtils);

  const globStar = '**';
  const globDoctest = [star, 'doctest', suffix].join(stop);
  const globTs = [star, suffix].join(stop);

  const patternTest = path_.join(root, globStar, globDoctest);
  const patternDoctest = path_.join(root, globStar, dirTest, globTs);

  const patternTypes = path_.join(root, dirTypes, globStar, globTs);
  const patternUtils = path_.join(root, dirUtils, globStar, globTs);

  const ignore = [patternTest, patternDoctest];

  const types = glob.sync(patternTypes, { ignore });
  const utils = glob.sync(patternUtils, { ignore });

  const done: Array<string> = [];

  function unsafeReportDone(pathPrefix: string) {
    done.push(pathPrefix);
  }

  function withoutSuffix(path: string) {
    return path.slice(0, 0 - stop.length - suffix.length);
  }

  function dottified(path: string) {
    if (path.startsWith(stop)) {
      return path;
    }
    return [stop, path].join(path_.sep);
  }

  function relative(filepathFrom: string, filepathTo: string) {
    const dirFrom = path_.dirname(filepathFrom);
    return path_.relative(dirFrom, filepathTo);
  }

  function exportStatement(filepathImporter: string, filepathImportee: string) {
    const moduleName = withoutSuffix(
      dottified(relative(filepathImporter, filepathImportee)),
    );
    return `export * from '${moduleName}';`;
  }

  function file(filepath: string): string {
    return path_.relative(path_.dirname(filepath), filepath);
  }

  // utils file /foo/bar.ts for type /foo/bar.ts
  function findUtilsFile(filepathType: string): string | null {
    const filepathTypeGeneric = path_.relative(rootTypes, filepathType);
    // eslint-disable-next-line fp/no-loops
    for (const filepathUtil of utils) {
      const filepathUtilGeneric = path_.relative(rootUtils, filepathUtil);
      if (filepathUtilGeneric === filepathTypeGeneric) {
        unsafeReportDone(path_.join(rootUtils, filepathUtilGeneric));
        return filepathUtil;
      }
    }
    return null;
  }

  // utils file /foo/bar/bar.ts for type /foo/bar.ts
  function findUtilsDirIndex(filepathType: string): string | null {
    const filepathTypeGeneric = path_.relative(rootTypes, filepathType);
    const pathUtils = withoutSuffix(path_.join(rootUtils, filepathTypeGeneric));
    const fileIndex = file(filepathTypeGeneric);
    const filepathUtilsDirIndex = path_.join(pathUtils, fileIndex);
    const filepathsUtilsDir = utils.filter((filepathUtil) =>
      filepathUtil.startsWith(pathUtils.concat(path_.sep)),
    );

    // eslint-disable-next-line fp/no-loops
    for (const filepath of filepathsUtilsDir) {
      if (filepath === filepathUtilsDirIndex) {
        unsafeReportDone(pathUtils.concat(path_.sep));
        return filepath;
      }
    }
    if (filepathsUtilsDir.length > 0) {
      console.warn(`Missing util index ${filepathUtilsDirIndex}`);
    }
    return null;
  }

  function findUtils(filepathOutput: string, filepathType: string): string | null {
    const utilsFile = findUtilsFile(filepathType);
    if (utilsFile !== null) {
      return utilsFile;
    }
    const utilsDirIndex = findUtilsDirIndex(filepathType);
    if (utilsDirIndex !== null) {
      return utilsDirIndex;
    }
    return null;
  }

  function* utilExports(filepathOutput: string, filepathType: string) {
    const filepathUtil = findUtils(filepathOutput, filepathType);
    if (filepathUtil !== null) {
      yield exportStatement(filepathOutput, filepathUtil);
    }
  }

  function* typeExports(filepathOutput: string, filepathType: string) {
    yield exportStatement(filepathOutput, filepathType);
  }

  function* index(filepathOutput: string, filepathType: string) {
    yield `// Generated by update-index.ts Do not edit!`;
    yield empty;
    yield* typeExports(filepathOutput, filepathType);
    yield* utilExports(filepathOutput, filepathType);
    yield empty;
  }

  // eslint-disable-next-line fp/no-loops
  for (const filepathType of types) {
    const filepathTypeGeneric = path_.relative(rootTypes, filepathType);
    const filepathOutput = path_.join(root, filepathTypeGeneric);
    const lines = index(filepathOutput, filepathType);
    const data = [...lines].join(lineEnding);
    const pathOutput = path_.dirname(filepathOutput);
    fs_.mkdirSync(pathOutput, { recursive: true });
    fs_.writeFileSync(filepathOutput, data);
  }

  const missingTypes = utils.filter(
    (util) => done.some((d) => util.startsWith(d)) === false,
  );
  if (missingTypes.length > 0) {
    console.error(
      ['ERROR: Missing types for following utilities!', ...missingTypes].join(lineEnding),
    );
    process.exit(1);
  }
}
