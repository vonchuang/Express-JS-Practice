function route(pathname, handle){
    console.log('route: ' + pathname);

    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log('No handler for ' + pathname)
    }
}

exports.route = route;