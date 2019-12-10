var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
})

io.on('connection', function(socket){
    console.log('Hey~');

    socket.on('disconnect', function(){
        console.log('Bye~');
    })
})

server.listen(8888, function(){
    console.log('port:8000~');
})