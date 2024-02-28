const fs = require('fs');
fs.readFile('server.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("File Content: \n",data);
});

fs.writeFile('server.txt','This is my first file',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("The File has been written");
});

fs.appendFile('server2.txt',"\nThis is the second content",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Content added to the file");

})