const http = require("http");
const fs = require("fs")
const hostname = "localhost";
const port = 4000

const server = http.createServer((req,res)=>{
    if(res.statusCode === 200){
        res.setHeader("Content-Type","image/jpg");
        fs.readFile("image.jpg",(err,data)=>{
            if(err){
                console.error(err);
                return
            }
            else{
                res.end(data);
            }
        })
    }
})
server.listen(port,hostname, ()=>{
    console.log(`Server is listening at ${hostname}:${port}`)
})