var fs = require("fs");
console.log("hello world!");
// try {
//     var data = fs.readFileSync('input.txt');
//     console.log(data.toString());
// }
// catch(e) {    
//     console.log("unable to open file" + e.message);
// }

var events = require("events");
var evtEmitter = new events.EventEmitter();

evtEmitter.on('OPEN', function (data){
    console.log("OPEN event fired");
});
evtEmitter.on('ERROR', function (err){
    console.log("ERROR event fired");
});


fs.readFile('input.txt', function (err, data){
    if (err) {
        evtEmitter.emit('ERROR',err);
        return console.log(err);
    }
    console.log(data.toString());
    evtEmitter.emit('OPEN',data.toString());
})

var fsStream = fs.createReadStream('input.txt');
fsStream.setEncoding('UTF-8');
var fdata= "Stream:";
fsStream.on('data', function (chunk){
    fdata += chunk;
})
fsStream.on('end', function (){
    console.log(fdata);
})

var writerStream = fs.createWriteStream('output.txt');
fsStream.pipe(writerStream);


console.log("Going to read directory");
fs.readdir("C:\\MyWorkspace",function(err, files){
if (err) {
return console.error(err);
}
files.forEach( function (file){
console.log( file );
});
});

console.log("fileName:" +__filename );

function printHello(){
    console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);
setInterval(printHello, 2000);
