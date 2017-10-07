function Machine(reelSymbols, ui) {
	this.generateReels = generateReels;
	this.generateFramesObject = generateFramesObject;
	this.ui = ui;

	var reels;
	var frameReels;

	function generateReels() {
		reels = {
			reel1: shuffle(reelSymbols),
			reel2: shuffle(reelSymbols),
			reel3: shuffle(reelSymbols)
		};
		return reels;
	}

	function generateFramesObject() {
		frameReels = {
			reel1: generateFrames(reels.reel1),
			reel2: generateFrames(reels.reel2),
			reel3: generateFrames(reels.reel3)
		};
		return frameReels;
	}

	function generateFrames(reel) {
		var frames = [];
		for (var i = 0; i < reel.length - 2; i++) {
			frames.push({
				bottom: reel[i],
				payline: reel[i + 1],
				top: reel[i + 2]
			});
		}

		return frames;
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