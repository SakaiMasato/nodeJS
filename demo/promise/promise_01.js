var fs = require("fs");

var readFile = function(fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function (error, data) {
            if(error) return reject(error);
            resolve(data);
        });
    });
};

var gen = function* (){
    var f1 = yield readFile("../../resource/w2.txt");
    var f2 = yield readFile("../../resource/w1.txt");
    var print = console.log.bind(console);
    print(f1.toString());
    print(f2.toString());
};

var  g = gen();

/*
//manually
g.next().value.then(function (data) {
    g.next(data).value.then(function (data) {
        g.next(data);
    });
});
*/

//automatically
function run(gen) {
    var g = gen();

    function next(data) {
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function (data) {
            next(data);
        })
    }
    next();
}

run(gen);