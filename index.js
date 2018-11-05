class UtilsManager {
	constructor() {
		let utils = ["path", "crypto", "array", "generate", "process", "platform"];

		for(let util of utils) {
			this.use(util, require(`./src/${util}`));
		}
	}

	use(name, utilities) {
		this[name] = utilities;

		for(let utility in utilities) {
			utilities[utility] = utilities[utility].bind(this);
		}
	}
}

module.exports = new UtilsManager();