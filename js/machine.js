function Machine(reelSymbols, ui) {
	this.generateReels = generateReels;
	this.generateFramesObject = generateFramesObject;
	this.ui = ui;

	var reels;
	var frameReels;

	function newReels(callback, reel1Data, reel2Data, reel3Data) {
		return {
			reel1: callback(reel1Data),
			reel2: callback(arguments.length === 4 ? reel2Data : reel1Data),
			reel3: callback(arguments.length === 4 ? reel3Data : reel1Data)
		};
	}

	function generateReels() {
		reels = newReels(shuffle, reelSymbols);
		return reels;
	}

	function generateFramesObject() {
		frameReels = newReels(generateFrames, reels.reel1, reels.reel2, reels.reel3);
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

function runningInNodeEnvironment() {
	return typeof module !== "undefined" && module.exports;
}

if (runningInNodeEnvironment()) {
	module.exports = Machine;
}