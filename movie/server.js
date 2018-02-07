var connect = require('connect');
var http = require('http');


var app = connect();

function doFirst(request, response, next) {
    console.log("this is first function");
    next();
}

function doSecond(request, response, next) {
    console.log("this is second function");
    next();
}


app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
