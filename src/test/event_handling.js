const events = require("events")
const fs = require("fs")
const em = new events.EventEmitter();

em.on("First Event",function(data){
    console.log("The First Subsciber is",data);
})
em.once("Once Event", function(data){
    console.log(data,"This event will only occur once in the program and not again");
})
em.on("status", function(code,msg){
    console.log("Status Code is "+code+" Message is "+msg);
})
fs.open('sample.txt','r+',function(err,fd){
    if(err){
        em.emit("error", "File Not Found");
    }
    else{
        console.log("File Content: ",fd);
    }
});

fs.open('samplez1.txt', 'r+', function(err, fd){ 
   if (err) { 
      em.emit("error","File not found");
   } 
   else{
    console.log("File Content: ",fd);
}
});
em.on("error",function(err){
    console.error(err);
})
function c1(){
    console.log("Event Listener Removed");
}

em.emit("First Event","This is my first Node.js event emitter example")
em.emit("Once Event","First time calling it")
em.emit("Once Event","Second time calling it")
em.emit("status",200,"OK")
em.off("status",c1)