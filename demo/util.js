var util = require('util');
//定义父类Base
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);//子类继承父类，该继承方法子类只能继承父类原型链中的定义，无法继承构造方法中的定义

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

//util.inspect(object,[showHidden],[depth],[colors])将任意对象转换 为字符串
console.log(util.inspect(Sub));