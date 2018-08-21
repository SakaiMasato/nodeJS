var fs = require("fs");
var data="";
var readStream = fs.createReadStream("../resource/w1.txt");
var writeStream = fs.createWriteStream("../resource/w2.txt",{'flags':'a'});
//读取w1.txt内容写到w2.txt中
readStream.pipe(writeStream);

//读取w2.txt内容
var readStreamW2 = fs.createReadStream("../resource/w2.txt");

// 设置编码为 utf8。
readStreamW2.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readStreamW2.on('data', function(chunk) {
    data += chunk;
});

readStreamW2.on('end',function(){
    console.log(data);
});

readStreamW2.on('error', function(err){
    console.log(err.stack);
});