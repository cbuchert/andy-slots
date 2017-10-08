var reelSymbols = generateRandomArrayOfRandomValues()

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function generateRandomArrayOfRandomValues() {
	return new Array(generateRandomNumber(10, 90)).fill(0).map(function () {
		return generateRandomNumber(0, 100) + ".jpg";
	});
}
