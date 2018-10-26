var state = function* () {
    while(true){
        console.log("Tick");
        yield;
        console.log("Tock");
        yield;
    }
};
let machine = state();
machine.next();
machine.next();
machine.next();