let assert = require("assert");
let UtilityManager = require("../index");

describe("UtilityManager", function() {
	describe("#use", function() {
		describe("(String: 'test', Object: {a: 'b'})", function() {
			it("should add the object to the class at 'test'", function() {
				let manager = new UtilityManager();
				manager.use("test", {a: "b"});

				assert.deepEqual(manager.test, {a: "b"});
			});
		});
	});
});