const fs = require("fs");


// file system => it also gives promisified functions
   // B               // A
let pendingPromise = fs.promises.readFile("./f12.txt");
// Promise<Pending>
console.log(pendingPromise);


// then ki call me jo function pass uska naam scb => success call back
pendingPromise.then( function(data){
    console.log(pendingPromise);
    console.log("Inside scb");
});

//catch ki call me jo function pass uska naam fcb => failure call back
pendingPromise.catch( function(error){
    console.log(pendingPromise);
    console.log("Inside fcb");
});