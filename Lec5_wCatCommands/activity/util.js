function applySFlag(data){
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
function applyNFlag(data){
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
function applyBFlag(data){
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


module.exports.applySFlag = applySFlag;
module.exports.applyNFlag = applyNFlag;
module.exports.applyBFlag = applyBFlag;