var http = require('http');
var fs = require('fs');

function error404response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 error: page not found!");
    response.end();
}

function requestListener(request, res) {
    if(request.method == 'GET' && request.url == '/'){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(res);

    } else {
        error404response(res);
    }

}



http.createServer(requestListener).listen(8888);
console.log("Server started");