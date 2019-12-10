function route(pathname, handle, response){
    console.log('route: ' + pathname);

    if(typeof handle[pathname] === 'function'){
        handle[pathname](response);
    }else{
        console.log('No handler for ' + pathname)
        response.writeHead(404,  {'Content-type': 'text/plain'});
        response.write("404 not found");
        response.end();
    }
}

exports.route = route;