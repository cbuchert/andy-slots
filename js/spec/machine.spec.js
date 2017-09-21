const expect = require("expect");

describe ("A slot machine", function () {
	it ("can be run.", function () {
		const Machine = require("../machine");
		let machine = new Machine();

		expect(machine.hasOwnProperty("run")).toBe(true);
	});

	it ("generates three reels when run.", function () {
		const Machine = require("../machine");
		const reelSymbols = [1, 2, 3, 4, 5];
		let machine = new Machine(reelSymbols);
		let reels = machine.run();

		expect(reels.length).toEqual(3);
	});
});