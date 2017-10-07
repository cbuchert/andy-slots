const expect = require("expect");

describe ("A slot machine", function () {
	const Machine = require("../machine");
	let machine;
	const mockUi = {};
	const reelSymbols = [1, 2, 3, 4, 5];

	beforeEach(function () {
		machine = new Machine(reelSymbols, mockUi);
	});

	it ("generates three reels when run.", function () {
		let reels = machine.run();

		expect(reels.length).toEqual(3);
		console.log(reels);
	});

	it ("has a ui.", function () {

		expect(JSON.stringify(machine.ui)).toEqual(JSON.stringify(mockUi));
	});

	// it ("slices its generated arrays into 3 symbol frames", function () {
	//
	// });
});