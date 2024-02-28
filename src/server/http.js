const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    if(res.statusCode === 200){
        res.setHeader('Content-Type','text/plain');
        res.end("Hello World\n");
    }
});

server.listen(port,hostname, ()=>{
    console.log(`Server is listening at https://${hostname}:${port}`)
})