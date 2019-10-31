"use strict";

const isObject         = require("es5-ext/object/is-object")
    , isValue          = require("es5-ext/object/is-value")
    , ensureString     = require("es5-ext/object/validate-stringifiable-value")
    , { lstat }        = require("fs")
    , { resolve, sep } = require("path")
    , { Transform }    = require("stream")
    , toThenable       = require("2-thenable")
    , spawn            = require("child-process-ext/spawn");

class ExistingFilesFilter extends Transform {
	constructor(repoRootDeferred, spawnPromise, dirname, extensions) {
		super({ decodeStrings: false, encoding: "utf8" });
		this.repoRootDeferred = repoRootDeferred;
		this.dirname = `${ dirname }${ sep }`;
		this.extensions = extensions;
		this.files = [];
		toThenable(
			this,
			new Promise((promiseResolve, reject) => {
				this.on("error", reject);
				this.on("data", chunk => this.files.push(chunk));
				spawnPromise.catch(reject);
				repoRootDeferred.catch(reject);
				this.on("end", () => promiseResolve(spawnPromise.then(() => this.files)));
			})
		);
	}
	_transform(chunk, encoding, callback) {
		if (this.extensions) {
			if (!this.extensions.some(extension => chunk.endsWith(`.${ extension }`))) {
				callback();
				return;
			}
		}
		this.repoRootDeferred.then(repoRoot => {
			const filename = resolve(repoRoot, chunk);
			if (!filename.startsWith(this.dirname)) {
				callback();
				return;
			}
			lstat(filename, error => {
				if (error) {
					if (error.code === "ENOENT") {
						callback();
						return;
					}
					callback(error);
					return;
				}
				callback(null, filename.slice(this.dirname.length));
			});
		});
	}
}

module.exports = (cwd, options = {}) => {
	try {
		cwd = resolve(ensureString(cwd));
		if (!isObject(options)) options = {};
		const base = isValue(options.base) ? ensureString(options.base) : "master"
		    , head = isValue(options.head) ? ensureString(options.head) : "HEAD"
		    , extensions = isObject(options.ext) ? Array.from(options.ext).map(ensureString) : null;

		const diffNamesDeferred = spawn("git", ["diff", "--name-only", `${ base }...${ head }`], {
			cwd,
			split: true
		});
		const repoRootDeferred = spawn("git", ["rev-parse", "--show-toplevel"], { cwd }).then(
			({ stdoutBuffer }) => String(stdoutBuffer).trim()
		);
		diffNamesDeferred.catch(error => {
			if (!error.stderrBuffer) return;
			const errorMessage = String(error.stderrBuffer);
			if (errorMessage.includes("unknown revision or path not in the working tree")) {
				const refs = [base, head].filter(ref => ref !== "HEAD");
				if (refs.length > 1) {
					error.message = `Either '${ base }' or '${ head }' is not in the working tree`;
				} else {
					error.message = `'${ refs[0] }' is not in the working tree`;
				}
			} else {
				error.message = errorMessage;
			}
		});
		const { stdout } = diffNamesDeferred;
		if (!stdout) return diffNamesDeferred;
		return stdout.pipe(
			new ExistingFilesFilter(repoRootDeferred, diffNamesDeferred, cwd, extensions)
		);
	} catch (error) {
		return Promise.reject(error);
	}
};
