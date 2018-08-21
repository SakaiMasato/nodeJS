var fs = require("fs");
var zlib = require("zlib");

// fs.createReadStream('../resource/log.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('../resource/log.txt.gz'));
//
// console.log("文件压缩完成。");

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('../resource/log.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('../resource/input.txt'));

console.log("文件解压完成。");