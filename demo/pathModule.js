var path = require('path');

var a = path.join('www','err','404.html');//路径拼接
console.log(a);

console.log(__dirname);//当前文件夹（绝对路径）
console.log(__filename);//当前文件路径（绝对路径）