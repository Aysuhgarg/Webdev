const puppeteer = require("puppeteer");
const id ="josir55051@0ranges.com";
const pw = "123456789";
let tab;
// puppeteer functions => promisifed functions

// open a browser

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise.then(function (browserInstance) {
    let pagesPromise = browserInstance.pages();
    return pagesPromise; // Promise<Pending>
  })
  .then(function (pages) {
    let page = pages[0];
    tab = page;
    let gotoPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return gotoPromise;
  })
  .then(function(){
      let idTypePromise = tab.type("#input-1" , id);
      return idTypePromise;
  })
  .then(function(){
      let pwTypePromise = tab.type("#input-2" , pw);
      return pwTypePromise;
  })
  .then(function(){
      let loginPromise = tab.click('.ui-btn.ui-btn-large');
      return loginPromise;
  })
  .then(function(){
      console.log("login succesfull !");
  })
  .then(function(){
      let wait= tab.waitForSelector('#base-card-1-link',{visible:true});
      return wait;
  })
  .then(function(){
      let interview=tab.click('#base-card-1-link');
      return interview;
  })
  .then(function(){
      let warm=tab.waitForSelector('#base-card-1-link');
      return warm;
  })
  .then (function(){
      let result=tab.click('#base-card-1-link');
      return result;
  })
  .catch(function(err){
      console.log("Inside catch");
      console.log(err);
  })