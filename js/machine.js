function Machine(reelSymbols) {
	this.run = run;

	function run() {
		return [shuffle(reelSymbols), shuffle(reelSymbols), shuffle(reelSymbols)];
	}

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
}

if (typeof module !== "undefined" && module.exports) {
	module.exports = Machine;
}