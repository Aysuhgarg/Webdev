// top to bottom compile
// left to right

// cout
// system.out.println();

// console.log("Hello World !");

// char , int , double , float , boolean , String ,

// Javascript data types =>
// Number , Boolean , String , undefined , Object(Array , object)

// declaration and initialization of a variable

// ES6 syntax => let and const

// block scoped

// if(true){
//     let a = 10;
// }

// console.log(a); Not defined // Reference Error

let a; // it takes undefined
// console.log(a);
a = 100;
if (true) {
  let a = 200;
  // console.log(a);
}
// console.log(a);

// const => block scoped and constant
const pi = 3.14;
// console.log(pi);

// pi = 200; // TypeError/Assignment to a const variable

let b = "sfnkajsf";
let c = "asjfhiuabf";
let d = true;
let e = 3.4553;
let f = undefined;

// Non Primitive => Objects arrays

// Arrays => dynamic
let movies = ["The winter soldier", "Civil War", 100, ""];
// push , pop , unshift , shift , splice

// console.log(movies[2]);
movies.pop();
movies.push("ENDGAME");
movies.unshift("THe FIrst Avenger"); // append at the start of the array
// console.log(movies);

movies.splice(2, 1);

// movies[100] = "find me";

// console.log(movies);
//

// let moveis = [] // new Array();

// Object => key values ka pair
// let avenger = {};  // new Object();

// keys are always unique
// Values may be duplicate
let avenger = {
  "full name": "Steve Rogers",
  place: "Queens",
  skills: [
    "Martial Arts",
    "Taekwondo",
    {
      BestFriend: [
        { name: "Bucky", skills: [] },
        { name: "Natasha", skills: ["Fighting" , "asdas" , "asfasf"] },
      ],
    },
  ],
  movies: ["The First Avenger", "Winter Soldier"],
  age: 200,
};

console.log(avenger.skills[2]["BestFriend"][1].skills[0].substring(4)); 



// dot notation => literal check
// console.log(avenger.place);
// console.log(avenger.movies);
// avenger["skills"];

// bracket notation
// let key = "age";

// console.log( avenger[key]  );