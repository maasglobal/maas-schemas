[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]
![Transpilation status][transpilation-image]
[![npm version][npm-image]][npm-url]

# git-list-updated

## Resolve list of updated (and existing) files

By default it checks difference between `HEAD` (so current branch) and `master`.

Useful when we want to apply certain operations (e.g. lint) only to files that were updated and not whole repostory

### Installation

```bash
npm install -g git-list-updated
```

# Usage

## CLI

### git-list-updated

List updated files

```bash
git-list-updated [-h | --help] [--base=<base>] [--head=<head>] [--ext=<ext>] [<path>]
```

If `<path>` is not provided, check is done in repository at current working directory

#### Options:

##### `base` (defaults to `master`)

Base branch with which we wish to compare

##### `head` (defaults to `HEAD`)

Target containing the changes that should be investigated

##### `ext`

List only files with specific extensions. Multiple extensions can be chosen by passing arg multiple times.
If not passed, all files are listed

### pipe-git-updated

Pipe output of git-list-updated into other command.
On \*nix systems that could simply be achieved via:

```bash
git-list-updated [<...git-list-updated-args>] | <targetComand> [<...target-command-args>]
```

Purpose of this util is to provide cross environment solution that can also work on Windows

```bash
pipe-git-updated [<...git-list-updated-args>] -- <targetComand> [<...target-command-args>]
```

## Programatically

### `git-list-updated`

```javascript
const gitListUpdated = require("git-list-updated/pipe");

gitListUpdated(respositoryRoot, {
	base: "master", // Base to compare against
	head: "HEAD" // Source for comparision
	ext: [] // Limit output to given extensions
})
	// Response object is a stream that emits each filename with individual data event
	.on("data", filename => {
		console.log(`Updated file: ${filename}`);
	})
	// Response object is also a promise that resolves with a list of updated files
	.then(fileNames => {
		console.log(`All updated files: ${fileNames}`);
	});
```

### `git-list-updated/pipe`

```javascript
const pipeGitUpdated = require("git-list-updated/pipe");

pipeGitUpdated(respositoryRoot, [targetCliCommand, targetCliCommandArg1, targetCliCommandArg2], {
 	// git-list-updated options
	base: "master", // Base to compare against
	head: "HEAD" // Source for comparision
	// pipe specific optons
	stdio: "inherit" // Override stdio setting of targetCli command
});
```

### Tests

```bash
npm test
```

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/git-list-updated/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/git-list-updated
[win-build-image]: https://ci.appveyor.com/api/projects/status/bj6qtpvem7rqgoas?svg=true
[win-build-url]: https://ci.appveyor.com/api/project/medikoo/git-list-updated
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/git-list-updated.svg
[cov-url]: https://codecov.io/gh/medikoo/git-list-updated
[transpilation-image]: https://img.shields.io/badge/transpilation-free-brightgreen.svg
[npm-image]: https://img.shields.io/npm/v/git-list-updated.svg
[npm-url]: https://www.npmjs.com/package/git-list-updated
