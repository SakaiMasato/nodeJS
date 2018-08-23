var express = require("express");
var app = express();
var fs = require("fs");
var server = app.listen(8000,function(err){
    if(err){
        console.log("server starts failed!");
    }
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

//添加用户
//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};

var readStream = fs.createReadStream(__dirname + "/" + "user.json");
var writeStream = fs.createWriteStream(__dirname + "/" + "user.json");
var data = ""
readStream.on('data', function(chunk) {
    data += chunk;
});

readStream.on('end',function(){
    console.log(data);
});
writeStream.on('finish', function() {
    console.log("写入完成。");
});

writeStream.on('error', function(err){
    console.log(err.stack);
});
app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        writeStream.write(data,"utf8");
        res.end( JSON.stringify(data));
    });
});

