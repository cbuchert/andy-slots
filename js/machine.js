function Machine(reelSymbols, ui) {
	this.generateReels = generateReels;
	this.ui = ui;

	var reels;

	function generateReels() {
		reels = {
			reel1: shuffle(reelSymbols),
			reel2: shuffle(reelSymbols),
			reel3: shuffle(reelSymbols)
		};
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