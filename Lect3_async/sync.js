// FS => File System
let fs = require("fs");



console.log("start");

let f1KaData = fs.readFileSync("./f1.txt" , "utf8"); // 100gb
console.log(f1KaData);

var f1ka=fs.readFileSync("./f2.txt");
console.log(f1ka+" ");

console.log("end");