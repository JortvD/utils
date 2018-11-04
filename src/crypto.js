const Crypto = require("crypto");

module.exports = {
	hash: (data, options = {}) => {
		let safeOptions = Object.assign({}, options, {
			algorithm: "sha256",
			output: "hex"
		});

		return Crypto.createHash(safeOptions.algorithm).update(data).digest(safeOptions.output);
	},

	generateSecret: (options) => {
		let safeOptions = Object.assign({}, options, {
			length: 32,
			output: "hex"
		});

		return Crypto.randomBytes(safeOptions.length).toString(safeOptions.output);
	}
}