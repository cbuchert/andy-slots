$(function () {
	var ui = new Ui();
	var machine = new Machine(reelSymbols, ui, helpers);
	var handlers = new Handlers(machine);
});