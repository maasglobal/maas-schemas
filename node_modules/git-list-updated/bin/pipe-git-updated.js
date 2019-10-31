#!/usr/bin/env node

"use strict";

require("essentials");

const meta = require("../package");

const usage =
	`pipe-git-updated v${ meta.version }

Usage: pipe-git-updated [-h | --help] [--base=<base>] [--head=<head>] [<path>]` +
	` -- targetCommand [...targetCommandArgs]

Pipe output of git-list-updated into targetCommand

Options:

    --base <base> Base to compare against (defaults to 'master')
    --head <head> Head to compare against (defaults to 'HEAD')
		--ext <ext>   Pass only filenames with given extension ` +
	`(argument can be passed multiple times)
    --help,            -h  Show this message

`;

const boundaryIndex = process.argv.indexOf("--");

if (boundaryIndex === -1) {
	process.stdout.write(usage);
	return;
}

const argv = require("minimist")(process.argv.slice(2, boundaryIndex), {
	string: ["base", "head", "ext"]
});

if (argv.h || argv.help) {
	process.stdout.write(usage);
	return;
}

if (argv.v || argv.version) {
	process.stdout.write(`${ meta.version }\n`);
	return;
}

const path = argv._[0] || process.cwd();
if (typeof argv.ext === "string") argv.ext = [argv.ext];

require("../pipe")(path, process.argv.slice(boundaryIndex + 1), argv).catch(error => {
	if (typeof error.code !== "number") throw error;
	process.stderr.write(`${ error.message }\n`);
	process.exit(error.code);
});
