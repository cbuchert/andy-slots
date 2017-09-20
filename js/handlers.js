function Handlers() {
	var startKey = " ";

	handleKeypresses();

	function handleKeypresses () {
		$(document).keypress(function (e) {
			handleStartKey(e.key);
		});

		function handleStartKey (key) {
			if (key === startKey) {
				console.log("Start machine.");
			}
		}
	}
}