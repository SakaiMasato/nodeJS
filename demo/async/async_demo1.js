//fetch title of a website
var fetch = require("node-fetch");
async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('http://www.baidu.com').then(console.log)
// "ECMAScript 2017 Language Specification"