var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

//创建连接
mongoClient.connect(url,{ useNewUrlParser: true },function(err,db){
   if(err){
       throw err;
   }
   console.log("database connected");
   let dbase = db.db("mydb");
   dbase.createCollection('site', function (err, res) {
       if (err) throw err;
       console.log("创建集合!");
       db.close();
   });
});

//插入
mongoClient.connect(url,function (err,db) {
   if(err) throw err;
   let dbase = db.db("mydb");
   let student = {name:"jenny",age:"23"};
   dbase.collection("student").insertOne(student,function (err,res) {
       if(err) throw err;
       console.log("insert successfully");
       db.close();
   });
   let students = [{name:"sherry",age:"19"},
       {name:"kimmy","age":"39"}];
    dbase.collection("student").insertMany(students,function (err,res) {
        if(err) throw err;
        console.log("insert successfully");
        db.close();
    });
});

//查询
mongoClient.connect(url,{ useNewUrlParser: true },function (err,db) {
    if(err) throw err;
    let dbase = db.db("mydb");
    let mysort = {name:1};//按name升序排序
    //跳过1条取两条（可以做分页）
    dbase.collection("student").find({}).sort(mysort).skip(1).limit(2).toArray(function (err,res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
    let whereStr = {name:"Bob"};
    //指定条件查询
    dbase.collection("student").find(whereStr).toArray(function(err,res){
        if (err) throw err;
        console.log("=====================================");
        console.log(res);
        db.close();
    });
});

//更新
mongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb");
    var whereStr = {"name":'Bob'};  // 查询条件
    var updateStr = {$set: { "age" : "18" }};
    dbase.collection("student").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        db.close();
    });
});

//删除
mongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb");
    var whereStr = {"name":'kimmy'};  // 查询条件
    dbase.collection("student").deleteMany(whereStr,function (err,obj) {
        if(err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    })
});

//集合连接
mongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
    if (err) throw err;
    let dbase = db.db("mydb");
    dbase.collection("student").aggregate([
        {$lookup:{
                from:'class',
                localField:"name",// 左集合 join 字段
                foreignField: 'name',         // 右集合 join 字段
                as: 'classdetails'           // 新生成字段（类型array）
            }}
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});

//删除集合
mongoClient.connect(url,{ useNewUrlParser: true },function(err, db){
    if (err) throw err;
    let dbase = db.db("mydb");
    // 删除 test 集合
    dbase.collection("test").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        db.close();
    });
});

