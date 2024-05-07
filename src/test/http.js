const http = require("http");
const { hostname } = require("os");

const localhost = "localhost";
const port = 4000;

const server = http.createServer((req, res) => {
    if (res.statusCode === 200) {
        res.setHeader("Content-Type", "text/plain");
        res.end("THIS IS A HELLO WORLD PROGRAM")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is listening on ${localhost}:${port}`);
})