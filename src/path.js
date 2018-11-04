const Path = require("path");
const Assert = require("assert");
const rootPath = require("app-root-path").toString();

module.exports = {
	resolve: (path) => {
		Assert.equal(typeof path, "string", "The argument path must be a string");

		return Path.resolve(rootPath, path).replace(/\\/g, "/");
	}
}