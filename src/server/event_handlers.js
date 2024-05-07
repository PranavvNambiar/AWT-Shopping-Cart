const events = require("events");
const fs = require("fs");

const em = new events.EventEmitter();

em.on("firstEvent", (data) => {
    console.log("First Subscriber: " + data);
})
em.on("secondEvent", (data) => {
    console.log("Second Subscriber: " + data);
})

em.once("thirdEvent", (data) => {
    console.log(data);
})

em.on("status", (code, message) => {
    console.log(`Received ${code} & ${message}`);
})
const del = () => {
    console.log("Event Listener Removed");
}

em.on("error", (err) => {
    console.error(err);
})
fs.open("./text/fs1.txt", "r+", (err, data) => {
    err ? em.emit("error", "File Not Found") : console.log("File Content: " + data);
})
fs.open("./text/fs3.txt", "r+", (err, data) => {
    err ? em.emit("error", "File Not Found") : console.log("File Content: " + data);
})

//Calling Functions
em.emit("firstEvent", "This is first Node.js event emitter example")
em.emit("secondEvent", "This is second Node.js event emitter example")
em.emit("thirdEvent", "This will execute only once no matter how many times it is called")
em.emit("thirdEvent", "This will not be called")
em.emit("status", 200, "OK")
em.off("status", del) // will remove the event handler specified.