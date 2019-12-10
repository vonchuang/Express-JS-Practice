var http = require('http');
var url = require('url');

function start(route, handle){

    function Onrequest(request, response){
        var pathname = url.parse(request.url).pathname;
        response.writeHead(200,  {'Content-type': 'text/plain'});
        response.write("Hello!");
        
        route(pathname, handle);

        response.end();
    }

    http.createServer(Onrequest).listen(8888);
    console.log("Server start!");
}

exports.start = start;