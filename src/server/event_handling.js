var events = require('events');
var fs = require('fs');
var em = new events.EventEmitter();

em.on('FirstEvent', function(data){
    console.log('First Subscriber: '+data);
});

em.on('FirstEvent', function(data){
    console.log("Second Subscriber: "+data);
});

em.once('NewEvent', function(data){
    console.log(data);
})

em.on('status', function(code, msg){
    console.log("Got"+code+msg);
});

function c1(){
    console.log("Event Listener Removed");
}

em.on("error", function(err){
    console.error(err);
})

fs.open('sample.txt','r+',function(err,fd){
    if(err){
        em.emit("error", "File Not Found");
    }
});

fs.open('samplez1.txt', 'r+', function(err, fd){ 
   if (err) { 
      em.emit("error","File not found12");
   } 
});

em.emit('FirstEvent', "This is my first Node.js event emitter example");
em.emit('FirstEvent',"This is my second Node.js event emitter example");
em.emit('NewEvent',"my new event");
em.emit("NewEvent","my new event");
em.emit('status',200,'OK')
em.off('status',c1);