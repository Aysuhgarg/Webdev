const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const getIssues = require("./getIssues");

function processOneTopic(topicInfoObject){
    // topicName , topicLink
    // object destructuring
    let {topicLink  , topicName} = topicInfoObject;
    request(topicLink , function(err , res , data){
        processHTML(data , topicName);
    })
}


function processHTML(html , topicName){
    let ch = cheerio.load(html);
    let allProjectATags = ch("a.text-bold");
    let allProjectInfo = [];
    for(let i=0 ; i<10 ; i++){
        let oneProjectATag = ch(allProjectATags[i]);
        let projectLink = "https://www.github.com"+oneProjectATag.attr("href");
        let projectIssuesLink = projectLink+"/issues";
        let projectName= projectLink.split("/").pop();
        allProjectInfo.push( { projectName , projectLink , projectIssuesLink  }  );
    }
    

    for(let i=0 ; i<allProjectInfo.length ; i++){
        let {projectName , projectIssuesLink} = allProjectInfo[i];
        let projectPath = `./Github/${topicName}/${projectName}`;
        // it will create a project folder
        if(!fs.existsSync(projectPath)){
            fs.mkdirSync(projectPath);
        }

        getIssues(projectPath , projectIssuesLink );
    }
}



module.exports = processOneTopic;