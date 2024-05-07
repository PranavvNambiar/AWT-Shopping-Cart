const http = require("http");

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    const path = req.url
    res.statusCode = 200;

    if (path === "/") {
        res.end("<h1>THIS IS THE Welcome PAGE</h1>")
    }
    else if (path === "/about") {
        res.end("<h1>THIS IS THE About PAGE </h1>")
    }
    else if (path === "/contact") {
        res.end("<h1>THIS IS THE Contact PAGE </h1>")
    }
    else {
        res.statusCode = 404
        res.end("<h1> ERROR PAGE </h1>")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})

server.on('error', (e) => console.error(e))