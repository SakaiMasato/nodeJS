var http = require('http');
var fs = require('fs');
var myServer = http.createServer(function (req,resp) {
    var myUrl = req.url;
    console.log(myUrl);
    resp.write('<h1>hello world</h1>');
    resp.end();
});

myServer.listen("8000",function(err){
    if(err){
        console.log(err);
        throw err;
    }
    console.log('the server(8000) has been started');
});