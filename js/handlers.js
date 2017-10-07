function Handlers(machine) {
	var startKey = " ";

	handleKeypresses();

	function handleKeypresses () {
		$(document).keypress(function (e) {
			handleStartKey(e.key);
		});

		function handleStartKey (key) {
			if (key === startKey) {
				machine.generateReels();
			}
		}
	}
}