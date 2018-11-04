module.exports = {
	onExit: (callback) => {
		process.on("message", message => {
			if(typeof message !== "object" || message.message !== "kill") {
				return;
			}

			if(typeof callback !== "function") {
				return;
			}

			callback(() => {
				process.exit(123);
			});
		});

		process.on("SIGINT", () => {});
	}
}