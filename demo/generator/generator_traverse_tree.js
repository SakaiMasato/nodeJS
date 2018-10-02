// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left,current,right) {
    this.left = left;
    this.current = current;
    this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t){
    if(t){
        yield* inorder(t.left);
        yield t.current;
        yield* inorder(t.right);
    }
}

// 下面是先序（leftOrder）遍历函数。
function* leftOrder(t) {
    if(t){
        yield t.current;
        yield* leftOrder(t.left);
        yield* leftOrder(t.right);
    }
}

// 下面是后序（rightOrder）遍历函数。
function* rightOrder(t) {
    if(t){
        yield* rightOrder(t.left);
        yield* rightOrder(t.right);
        yield t.current;
    }
}

//test:生成二叉树
function makeTree(array){
    if(array.length == 1){
        return new Tree(null,array[0],null);
    }
    //右子树没有
    if(!array[2]){
        return new Tree(makeTree(array[0]),array[1],null);
    }
    if(typeof array[0]=='string'){
        return new Tree(null,array[1],makeTree(array[2]));
    }
    return new Tree(makeTree(array[0]),array[1],makeTree(array[2]));
}

let tree = makeTree([[['D'],'B',['E']],'A',[['F'],'C']]);
// console.dir(tree);
var result1 = [];
var result2 = [];
var result3 = [];

//先序
for(let node of leftOrder(tree)){
    result1.push(node);
}
console.log("先序遍历: "+result1);

//中序
for(let node of inorder(tree)){
    result2.push(node);
}
console.log("中序遍历: "+result2);

//后序
for(let node of rightOrder(tree)){
    result3.push(node);
}
console.log("后序遍历: "+result3);


