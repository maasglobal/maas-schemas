// Cross environment git-list-updated pipe
// Pipe the output of git-list-updated into other command

"use strict";

const isObject      = require("es5-ext/object/is-object")
    , toPlainObject = require("es5-ext/object/normalize-options")
    , ensureObject  = require("es5-ext/object/valid-object")
    , ensureString  = require("es5-ext/object/validate-stringifiable-value")
    , { resolve }   = require("path")
    , spawn         = require("child-process-ext/spawn")
    , listUpdated   = require(".");

module.exports = (cwd, cliArgs, options) =>
	new Promise(promiseResolve => {
		cwd = resolve(ensureString(cwd));
		cliArgs = Array.from(ensureObject(cliArgs)).map(ensureString);
		if (!cliArgs.length) throw new TypeError("Target program should be provided");
		if (!isObject(options)) options = {};
		const stdio = options.stdio || "inherit";
		const gitListUpdatedOptions = toPlainObject(options);
		delete gitListUpdatedOptions.stdio;
		promiseResolve(
			listUpdated(cwd, gitListUpdatedOptions).then(updatedList => {
				if (!updatedList.length) return null;
				return spawn(cliArgs[0], cliArgs.slice(1).concat(updatedList), { cwd, stdio });
			})
		);
	});
