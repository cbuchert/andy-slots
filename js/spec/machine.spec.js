const expect = require("expect");

describe("A slot machine", function () {
	const Machine = require("../machine");
	let machine;
	const mockUi = {};
	const reelSymbols = [1, 2, 3, 4, 5];

	beforeEach(function () {
		machine = new Machine(reelSymbols, mockUi);
	});

	it("generates three reels when run.", function () {
		let reels = machine.generateReels();

		expect(Object.keys(reels).length).toEqual(3);
		expect(reels.hasOwnProperty("reel1")).toBe(true);
	});

	it("has a ui.", function () {
		expect(JSON.stringify(machine.ui)).toEqual(JSON.stringify(mockUi));
	});

	it("slices its generated arrays into arrays of symbol frames", function () {
		machine.generateReels();
		let frames = machine.generateFrames();

		expect(frames.hasOwnProperty("reel1")).toBe(true);
		expect(frames.hasOwnProperty("reel2")).toBe(true);
		expect(frames.hasOwnProperty("reel3")).toBe(true);
		expect(Array.isArray(frames.reel1)).toBe(true);
		expect(Array.isArray(frames.reel2)).toBe(true);
		expect(Array.isArray(frames.reel3)).toBe(true);

		var reels = {
			reel1: [
				{
					top: 1,
					payline: 2,
					bottom: 3
				},
				{
					top: 2,
					payline: 3,
					bottom: 4
				}
			],
			reel2: [],
			reel3: []
		}
	});
});