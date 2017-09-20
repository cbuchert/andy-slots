const expect = require("expect");

describe ("A slot machine", function () {
	it ("exists", function () {
		const Machine = require("../machine");

		expect(Machine).not.toBe(undefined);
	});
});