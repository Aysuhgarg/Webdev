const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const processOneTopic = require("./topic");

request("https://github.com/topics", function (err, res, html) {
  processHTML(html);
});

function processHTML(html) {
  let ch = cheerio.load(html);
  let allTopicATags = ch(".topic-box a");
  // console.log(allTopicATags);
  let allTopicInfo = [];
  for (let i = 0; i < allTopicATags.length; i++) {
    let oneTopicATag = ch(allTopicATags[i]);
    let oneTopicLink = "https://www.github.com" + oneTopicATag.attr("href");
    let oneTopicName = oneTopicATag.find(".f3").text().trim();
    allTopicInfo.push({ topicName: oneTopicName, topicLink: oneTopicLink });
    // create topic folder
    let topicFolderPath = `./Github/${oneTopicName}`;
    if(!fs.existsSync(topicFolderPath)){
        fs.mkdirSync(topicFolderPath);
    }
  }

  for(let i=0 ; i<allTopicInfo.length ; i++){
      processOneTopic(allTopicInfo[i]);
  }
}
