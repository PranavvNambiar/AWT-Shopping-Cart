const http = require("http")

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    
    res.statusCode === 200 ? res.end("Hello World") : console.error("SERVER ERROR");
})

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})