const fs = require("fs");


let tmp = fs.readFileSync("./indexTpl.html",'utf8')

const noCache = true;
const timelog = true
const publicUrl = "//sztoosimple.gitee.io/static-map/";
// const scripts = tmp.match(/<script src[\w\W]+?\/script>/g)
const scripts = ['lib/leaflet@1.6.0.js',
'lib/proj4@2.4.3.js',
'lib/proj4leaflet1.0.1.min.js',
"plugins/leaflet.ChineseTmsProviders.js",
'lib/init.js']

const insertPostionStr ="<!-- <script>在这里插入script</script> -->"

for(var i = 0;i<scripts.length;i++){
    let script = publicUrl + scripts[i];
    if(noCache){
        script += `?r=${Date.now()}`
    }
    
    scripts[i] = `<script src="${script}"></script>` 
    if(timelog){
        scripts[i] += `<script>console.log("${script.split("/").pop().split("?")[0]}",Date.now()-window.scriptLoadTime);window.scriptLoadTime=Date.now()</script>`
    }
}


tmp = tmp.replace(insertPostionStr,scripts.join("\n"));

fs.writeFileSync("./index.html",tmp)