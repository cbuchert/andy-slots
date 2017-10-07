const expect = require("expect");

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function generateRandomArrayOfRandomValues() {
	return new Array(generateRandomNumber(10, 90)).fill(0).map(function () {
		return generateRandomNumber(0, 100);
	});
}

describe("A slot machine", function () {
	const Machine = require("../machine");
	let machine;
	const mockUi = {};
	const reelSymbols = (generateRandomArrayOfRandomValues());

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
		let frames = machine.generateFramesObject();

		expect(frames.hasOwnProperty("reel1")).toBe(true);
		expect(frames.hasOwnProperty("reel2")).toBe(true);
		expect(frames.hasOwnProperty("reel3")).toBe(true);
		expect(Array.isArray(frames.reel1)).toBe(true);
		expect(Array.isArray(frames.reel2)).toBe(true);
		expect(Array.isArray(frames.reel3)).toBe(true);
	});

	it("has arrays of frames with top, payline, bottom", function () {
		machine.generateReels();
		let frames = machine.generateFramesObject();

		expect(frames.reel1[0].hasOwnProperty("top")).toBe(true);
		expect(frames.reel1[0].hasOwnProperty("payline")).toBe(true);
		expect(frames.reel1[0].hasOwnProperty("bottom")).toBe(true);
		expect(frames.reel1.length).toEqual(reelSymbols.length - 2);
	});
});