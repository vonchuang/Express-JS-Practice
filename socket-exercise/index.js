var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('Hello');
})

app.listen(8888, function(){
    console.log('port:8000~');
})