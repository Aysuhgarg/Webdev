// let fs = require("fs");
// let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

// for(let i=0;i<files.length;i++)
// {
//     fs.readFile(files[i],fun);
// }

// function fun(error,data)
// {
//     console.log(data+" ");
// }


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