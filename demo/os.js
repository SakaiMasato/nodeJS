var os = require("os");

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量(gb)
console.log('total memory : ' + os.totalmem()/1024/1024/1024 + " GB.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem()/1024/1024/1024 + " GB.");