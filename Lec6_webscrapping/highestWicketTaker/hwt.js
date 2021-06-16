const request = require("request");
const cheerio = require("cheerio");

// request => Async function
let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request( link  , cb );

function cb(error , response , html){
    evalHTML(html);
}


function evalHTML(html) {
    let ch = cheerio.load(html);
    // let winningTeam = ch('.match-header .status-text span').text();
    let allBowlerTrs = ch(".table.bowler tbody tr");
    // [<tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr>]
    // {
    //     '0':{},
    //     '1':{},
    //     '2':{},
    // }
  
    let highestWicketTakerName;
    let highestWickets;
    let lowestEconomy;
  
    for (let i = 0; i < allBowlerTrs.length; i++) {
      let oneBowlerDetail = allBowlerTrs[i];
      // find all tds in a tr
      let allTds = ch(oneBowlerDetail).find("td");
      // 0
      let bowlerName = ch(allTds[0]).text();
      // 4
      let wickets = ch(allTds[4]).text();
      // 5
      let economy = ch(allTds[5]).text();
  
      if (i == 0) {
        highestWicketTakerName = bowlerName;
        highestWickets = wickets;
        lowestEconomy = economy;
      } else {
          if(wickets > highestWickets || (wickets == highestWickets && economy < lowestEconomy) ){
              highestWicketTakerName = bowlerName;
              highestWickets = wickets;
              lowestEconomy = economy;
          }
      }
    }
    console.log(`Highest Wicket Taker is ${highestWicketTakerName} with ${highestWickets} wickets and a economy of ${lowestEconomy}`);
  }