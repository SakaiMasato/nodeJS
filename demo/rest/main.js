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
//用户列表
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
app.get('/addUser', function (req, resp) {
    let res = {};
    let readContent = fs.readFileSync( __dirname + "/" + "user.json", 'utf8');
    res = (readContent == null && readContent=="")?{}:JSON.parse(readContent);
    res["user4"] = user;
    fs.writeFileSync(__dirname + "/" + "user.json",JSON.stringify(res),"utf-8");
});
//用户详情
app.get('/:id',(req,resp)=>{
    let res = {};
    let readContent = fs.readFileSync(__dirname + "/" + "user.json", 'utf8');
    res = (readContent == null && readContent=="")?{}:JSON.parse(readContent);
    let userFind = res["user"+req.params.id];
    console.log(userFind);
    resp.end(JSON.stringify(userFind));
});
app.get('/delUser/:id',(req,resp)=>{
   let id = req.params.id;
    let readContent = fs.readFileSync(__dirname + "/" + "user.json", 'utf8');
    res = (readContent == null && readContent=="")?{}:JSON.parse(readContent);
    delete res["user"+id];
    console.log( res );
    fs.writeFileSync(__dirname + "/" + "user.json",JSON.stringify(res),"utf-8");
    resp.end( JSON.stringify(res));
});

