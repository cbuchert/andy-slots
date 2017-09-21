const expect = require("expect");

describe ("A slot machine", function () {
	const Machine = require("../machine");

	it ("can be run.", function () {
		let machine = new Machine();

		expect(machine.hasOwnProperty("run")).toBe(true);
	});

	it ("generates three reels when run.", function () {
		const reelSymbols = [1, 2, 3, 4, 5];
		let machine = new Machine(reelSymbols);
		let reels = machine.run();

		expect(reels.length).toEqual(3);
	});

	it ("has a ui.", function () {
		const mockUi = {};
		let machine = new Machine([], mockUi);

		expect(JSON.stringify(machine.ui)).toEqual(JSON.stringify(mockUi));
	});
});