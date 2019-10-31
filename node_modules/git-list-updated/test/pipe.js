"use strict";

const { resolve } = require("path")
    , { assert }  = require("chai")
    , proxyquire  = require("proxyquire");

const existingList = ["LICENSE", "test/index.js"];

let spawnArgs;
const pipe = proxyquire("../pipe", {
	".": () => Promise.resolve(existingList),
	"child-process-ext/spawn": (...args) => {
		spawnArgs = args;
		return Promise.resolve();
	}
});

const testPath = resolve(__dirname, "..");

describe("pipe", () => {
	it("Should pass resolved outputed as arguments", () =>
		pipe(
			testPath,
			["main-program", "--arg1", "--arg2"]
		).then(() =>
			assert.deepEqual(spawnArgs, [
				"main-program", ["--arg1", "--arg2"].concat(existingList),
				{ cwd: testPath, stdio: "inherit" }
			])
		)
	);
});
