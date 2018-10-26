//way 1 (take too much time)
/*
    step1(function (value1) {
        step2(value1, function (value2) {
            step3(value2, function (value3) {
                step4(value3, function (value4) {
                    //do something with value4
                })
            })
        })
    })

 */

// => way 2 (by Promise)
/*
    Promise.resolve(step1)
        .then(step2)
        .then(step3)
        .then(step4)
        .then(function (value4) {
            //do something with value4
        },function(error){
            //handle error
        })
        .done();
*/

// => way 3 (by Generate)
/*
    function* longRunningTask(value1) {
        try {
            let value2 = yield step1(value1);
            let value3 = yield step2(value2);
            let value4 = yield step3(value3);
            let value5 = yield step4(value4);
        }catch (e) {
            //handle error
        }
    }

    run one by one (sync)
    function scheduler(task) {
        let taskobj = task.next(task.value);
        if (!taskobj.done){
            task.value = taskobj.value;
            scheduler(task);
        }
    }

    // for of
    let steps = [step1,step2,step3];

    function* iterate(steps){
        for(var i = 0; i < steps.length; i++){
            var step = steps[i];
            yield step();
        }
    }
 */