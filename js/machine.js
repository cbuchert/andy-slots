function Machine() {
	this.start = start;

	function start() {
		console.log("Starting.");
	}
}

if (typeof module !== "undefined" && module.exports) {
	module.exports = Machine;
}