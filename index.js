//Frontend to backend
var app = require('express')();
var http = require('http').Server(app);
var io= require('socket.io')(http);

//server to livesplit server
var net = require('net');
var livesplitClient = new net.createConnection({port: 16834}, () => {
	console.log("attempting to connect to livesplit server...");
});

//log if we connect successfully
livesplitClient.on("connect", function(){
	console.log("connected to the livesplit server");
});
 
livesplitClient.on("error", function(){
	console.log("an error has occurred. Rip.");
	console.log("we are not connected to the livesplit server.");
	//livesplitClient.destroy();
	//console.log("livesplit server connection destroyed. disconnecting.");
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	/*		
		socket.on('chat message', function(msg){
			console.log('message: ' + msg);
			io.emit('chat message', msg);
		});
	*/
	
	//when we hear an instruction emitted from the webpage, we send it to livesplit server
	socket.on('instruction', function(instruction){
		console.log('Instruction: ' + instruction);
		livesplitClient.write(instruction);
	});
	
	/*
	Needs to be fixed - we want to be able to retry a connection
	maybe set a timeout for retrying on connection error up top?
	
	socket.on('reconnect', function(){
		var livesplitClient = new net.createConnection({port: 16834}, () => {
			console.log("attempting to connect to livesplit server...");
		});
	});
	*/
	
});

http.listen(3000, function(){
	console.log('Listening on *:3000');
});	