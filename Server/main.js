var io = require('socket.io')(8081);

io.on('connection', function(socket) {
	console.log("A user has connected!");
});