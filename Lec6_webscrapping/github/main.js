link="https://github.com/topics";
let request=require("request");
let Cheerio= require("cheerio");

request(link,function(error, res,html){
    processHTML(html);
})

function processHTML(html)
{
    let ch=Cheerio.load(html);
    let allTopicATags=ch('.topic-box a');
    console.log(allTopicATags);

    let allTopicInfo=[];
    for(let i=0;i<allTopicATags.length;i++)
    {
        let oneTopicInfo =ch(allTopicATags[i]);
        let onTopicLonk=""+oneTopicInfo.attr[]
    }
}
