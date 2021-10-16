const johnnyFive = require('johnny-five');
const board = new johnnyFive.Board();

board.on('ready', () => {
	console.log('device connected');
});
