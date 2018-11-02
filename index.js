module.exports = class UtilityManager {
	use(name, utilities) {
		this[name] = utilities;
	}
}