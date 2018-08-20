var fs = require("fs");//对文件操作的模块

// 1.同步写
var result = fs.writeFileSync('./resource/w2.txt','hello world sync','utf8');

console.log(result);

//2.异步写
fs.writeFile("./resource/w1.txt","hello world async","utf8",function(err){
   console.log(err);
});
var isFileExist = fs.existsSync("./resource/w2.txt");
var contentSync = fs.readFileSync("./resource/w2.txt","utf8");
console.log(contentSync);

var contentAsync = fs.readFile("./resource/w1.txt","utf8",function (err,data) {
    console.log(data);
});

fs.exists("./resource/w1.txt",function (res) {
    console.log(res);
});

var result = fs.appendFileSync("./resource/log.txt",'\nthis is a log file'+new Date(),"utf8");
fs.appendFile("./resource/log.txt",'\n Async','utf8',function(err){
   console.log(err);
});

fs.watchFile("./resource/log.txt",function (a,b) {
    console.log("a="+a);
    console.log("b="+b);
})