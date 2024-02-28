const http = require('http')
const port = 3000;

const server =  http.createServer((req,res) =>{
    const path = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if (path==='/'){
        res.end("<h1>Welcome to the Web Page</h1>");
    }
    else if(path === '/about'){
        res.end('<h1>About Us</h1><p>This is the about page.</p>');
    }
    else if(path == '/contact'){
        res.end('<h1>Contact Us</h1><p>Contact info goes here.</p>');
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 NOT FOUND</h1>");
    }
});

server.listen(port , ()=> console.log(`Server running at localhost:${port}`));

server.on('error',(error)=>{
    console.error(error);
})