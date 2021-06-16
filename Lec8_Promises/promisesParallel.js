const fs = require("fs");

// promisifed way me read files parallely
let f1KaPromise = fs.promises.readFile("./f1.txt");
let f2KaPromise = fs.promises.readFile("./f2.txt");
let f3kaPromise = fs.promises.readFile("./f3.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
});
f1KaPromise.catch(function(err){
    console.log(err);
});

f2KaPromise.then(function(data){
    console.log(data+"");
});
f2KaPromise.catch(function(err){
    console.log(err);
});

f3kaPromise.then(function(data){
    console.log(data+"");
});
f3kaPromise.catch(function(err){
    console.log(err);
});