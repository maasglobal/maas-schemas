import path from 'path';

export type BaseURI = string;

export type NpmPackageName = string;
export type DepInfo = {
  package: NpmPackageName;
};
export type Deps = Record<BaseURI, DepInfo>;

export type Manifest = {
  base: BaseURI;
  deps: Deps;
};

export type AbsoluteDirectoryPath = string;

export type RootDir = AbsoluteDirectoryPath;
export type SchemaDir = AbsoluteDirectoryPath;
export type SourceDir = AbsoluteDirectoryPath;

export type Paths = {
  root: RootDir;
  schemas: SchemaDir;
  src: SourceDir;
};

export type SchemaPackage = {
  manifest: Manifest;
  paths: Paths;
};

export const manifestFileName = 'schemas.json';
export const schemaDirName = 'schemas';
export const srcDirName = 'src';

export const parseSchemaPackage = (rootDir: RootDir): SchemaPackage => {
  const manifestPath = path.join(rootDir, manifestFileName);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const manifest: Manifest = require(manifestPath);

  const paths = {
    root: rootDir,
    schemas: path.join(rootDir, schemaDirName),
    src: path.join(rootDir, srcDirName),
  };

  return {
    manifest,
    paths,
  };
};
