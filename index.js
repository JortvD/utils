module.exports = class UtilsManager {
	constructor() {
		let utils = ["path", "crypto", "array", "generate", "process", "platform"];

		for(let util of utils) {
			this.use(util, require(`./src/${util}`));
		}
	}

	use(name, utilities) {
		this[name] = utilities;
	}
}