function Machine(reelSymbols, ui, helpers) {
	this.generateReels = generateReels;
	this.generateFramesObject = generateFramesObject;
	this.ui = ui;
	this.getframeReels = function () {
		return frameReels
	};

	this.run = function () {
		generateReels();
		generateFramesObject();
		ui.run(frameReels);
	};

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
		reels = newReels(helpers.shuffle, reelSymbols);
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
}

function runningInNodeEnvironment() {
	return typeof module !== "undefined" && module.exports;
}

if (runningInNodeEnvironment()) {
	module.exports = Machine;
}