let fs = require("fs");
let input = process.argv.slice(2);

let files = [];
let flags = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].startsWith("-")) {
    flags.push(input[i]);
  } else {
    files.push(input[i]);
  }
}

// console.log(files);
// console.log(flags);

let data = "";
for(let i=0 ; i<files.length ; i++){
    let fileKaData = fs.readFileSync(files[i]);
    data += i == files.length-1 ? fileKaData :  fileKaData+"\r\n";
}

// console.log(data);

// -s flag

function applySFlag(){
    let dataComp = data.split("\r\n");
    // console.log(dataComp);
    let sFlagedData = [];
    let nonEmptyFound = false;
    
    for(let i=0 ; i<dataComp.length ; i++){
        if(dataComp[i] != '' ){
            sFlagedData.push(dataComp[i]);
            nonEmptyFound = true;
        }
        else if(dataComp[i] == '' && dataComp[i-1] != '' && nonEmptyFound){
            sFlagedData.push(dataComp[i]);
        }
    }
    let sFlagedString = sFlagedData.join("\r\n");
    return sFlagedString;
}

// data = applySFlag();
// console.log(data);

//  -n flag
function applyNFlag(){
    let dataComps = data.split("\r\n");
    let count=1;
    for(let i=0  ; i<dataComps.length ; i++){
        // 1.hey i am f1
        dataComps[i] = `${count}.${dataComps[i]}`;  //string interpolation
        count++;
    }
    // console.log(dataComps);
    let nFlaggedString = dataComps.join("\r\n");
    // console.log(nFlaggedString);
    return nFlaggedString;
}
// data = applyNFlag();


// -b flag

function applyBFlag(){
    let dataComps = data.split("\r\n");
    let count=1;
    for(let i=0  ; i<dataComps.length ; i++){
        // 1.hey i am f1
        if(dataComps[i] != ''){
            dataComps[i] = `${count}.${dataComps[i]}`;  //string interpolation
            count++;
        }
    }
    // console.log(dataComps);
    let bFlaggedString = dataComps.join("\r\n");
    // console.log(bFlaggedString);
    return bFlaggedString;
}
data = applyBFlag();