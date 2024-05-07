const http = require("http");
const fs = require("fs");

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/plain");
    if(res.statusCode === 200){
        fs.readFile("image.jpg",(err,data)=>{
            !err ? res.end(data) : console.error("ERROR HAS OCCURED");
        })
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server is listening on http://${hostname}:${port}`);
})