const fs = require("fs");


const tmp = fs.readFileSync("./indexTpl.html",'utf8')

const noCache = true;
const publicUrl = "//sztoosimple.gitee.io/static-map/";
// const scripts = tmp.match(/<script src[\w\W]+?\/script>/g)
const scripts = ['/lib/leaflet@1.6.0.js',
'/proj4@2.4.3.js',
'/proj4leaflet1.0.1.min.js',
"/plugins/leaflet.ChineseTmsProviders.js",
'/lib/init.js']
console.log(scripts)
if(noCache){

}
// console.log(tmp)