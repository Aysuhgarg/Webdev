let fs=require("fs");

let fs = require("fs");

fs.readFile("./f1.txt", function (err, data) {
  console.log(data + "");
});

fs.readFile("./f2.txt", function (err, data) {
  console.log(data + "");
});

fs.readFile("./f3.txt", function (err, data) {
  console.log(data + "");
});

// fs.readFile("./f1.txt",cb);
// fs.readFile("./f2.txt",cb);
// fs.readFile("./f3.txt",cb);

// function cb(error,data)
// {
//     console.log(data+"");
// }

// console.log("Hello")
