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
  .catch(function(err){
      console.log("Inside catch");
      console.log(err);
  })