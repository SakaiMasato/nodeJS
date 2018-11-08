function getFoo() {
    console.log("foo");
}

function getBar() {
    console.log("bar");
}

//getFoo在getBar完成之后才执行，比较耗时
getBar();
getFoo();

async function composition(){
    var [foo, bar] = await Promise.all([getFoo(), getBar()]);
}
//两个函数同时触发，比较省时，await只能在async函数内
composition();
