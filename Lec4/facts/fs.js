// go to niet folder location in terminal
// npm init -y
// npm i cheerio
// add node_modules in .gitignore


const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");

//console.log(htmlKaData);
// jquery
let ch = cheerio.load(htmlKaData);
// let pTagKaData = ch("p").text();
// <p>Hey this is a p tag !!</p>
 //console.log(pTagKaData);

// get all the matching p tags inside a tag
let pTagInsideUl = ch("ul p").text();
// console.log(pTagInsideUl)


// direct children
let directPTag = ch("ul>p").text();
// console.log(directPTag);

// classes and ids

// i want main p tags
let mainPTags = ch(".mainp").text();
console.log(mainPTags);

//  ids => #main