// High order functions
// Those functions which accept functions as a parameter



// Callback functions
// Functions which are passed as a argument in a high order function


function getFirstName(fullName){
    // "Steve Rogers"
    // split function
    fullName = fullName.split(" ");
    // [ "Steve" , "Rogers" ];
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}


function callMe( fullName , fun ){
    let name = fun(fullName);
    console.log(name);
}


callMe("Steve Rogers" , getFirstName);
callMe("TOny Stark" , getLastName);

// function Call(){
//     console.log("hello")
// }
// Call();