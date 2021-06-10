
let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

let i=0;

function call(){

    fs.readFile(files[i], function(err,data){
        i=i+1;
        console.log(data+"");

        if(i < files.length){

             call();
        }
    })
}

call();
console.log("HUHU");