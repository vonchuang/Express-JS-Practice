var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
})

var count = 0;

io.on('connection', function(socket){
    console.log('Hey~');
    count++;
    io.emit("online", count);


    socket.on('greet', function(){
        socket.emit('greet', count);
    })
    socket.on('disconnect', function(){
        console.log('Bye~');
        count = (count < 0)? 0: count-1;
        io.emit("online", count);
    })

    socket.on("send", function(msg){
        console.log(msg);
        io.emit('msg', msg);
    });
})



server.listen(8888, function(){
    console.log('port:8000~');
})