"use strict";

// 1. Expose every stack frame in error stack trace
Error.stackTraceLimit = Infinity;

// 2. Expose unhandled promise rejections as uncaught exceptions
if (typeof process === "object" && typeof process.on === "function") {
	// Node.js
	process.on("unhandledRejection", function (reason) { throw reason; });
}
if (typeof addEventListener === "function") {
	// HTML
	addEventListener("unhandledrejection", function (event) {
		event.preventDefault();
		throw event.reason;
	});
}
