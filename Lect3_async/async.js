// FS => File System
let fs = require("fs");

console.log("start");

fs.readFile( "./f1.txt" , cb);

function cb(error , data){
    console.log(error);
    console.log(data+"");
}
console.log("end");

// infinite loop
// while(true){
// }


// what if we need to read multiple files in a async mode parallely !