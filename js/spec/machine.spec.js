const expect = require("expect");

describe ("A slot machine", function () {
	it ("can be started.", function () {
		const Machine = require("../machine");
		let machine = new Machine();

		expect(machine.hasOwnProperty("start")).toBe(true);
	});
});