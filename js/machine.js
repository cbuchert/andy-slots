function Machine(reelSymbols, ui) {
	this.run = run;
	this.ui = ui;

	var reels;

	function run() {
		reels = [shuffle(reelSymbols), shuffle(reelSymbols), shuffle(reelSymbols)];
		return reels;
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