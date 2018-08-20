var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();//实例化express对象
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname,'view')));//设置默认的访问页面

app.use("/detail",function (req,resp) {
   resp.sendFile(path.join(__dirname,'view','detail.html'));
});

app.get("/student",function (req,resp) {
    var student = {"name":"dog","age":"1","sex":"male","type":"get"};
    resp.json(student);
});//处理get请求
app.post("/student",function (req,resp) {
    var student = {"name":"cat","age":"2","sex":"female","type":"post"};
    resp.json(student);
});//处理post请求
// app.all("/student",function (req,resp) {
//     var student = {"name":"cat","age":"2","sex":"female","type":"post"};
//     resp.json(student);
// });//get,post请求都可以
app.get("/student/:id",function (req,resp) {
    var student = [{"id":"100","name":"hello","age":"1"},
                    {"id":"200","name":"world","age":"2"},
                    {"id":"300","name":"baby","age":"3"}];
    var id = req.params.id;
    for(var i=0;i<student.length;i++){
        if(student[i].id == id){
            resp.json(student[i]);
            return;
        }
    }
    resp.json({"flag":"false","msg":"no result"});

});
app.get("/callback",function (req,resp) {
   resp.end("resdata(9999)");
});
app.post("/studentP",function(req,resp){
    var name = req.body.name;
    var age = req.body.age;
    resp.send({"msg":name+age});
});

//端口监听
app.listen(8000,function (err) {
    if(err){
        console.log('the port is busy');
        throw err;
    }
    console.log('server starts successfully,the port is 8000');
});