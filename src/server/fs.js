const fs = require("fs")

//If the file does not exist it will create it
//*If the file exists, it will overwrite all the content in it
fs.writeFile("./text/fs1.txt", "THIS IS THE FIRST fs File", (err) => {
    !err ? console.log("Successfully written to the file") : console.error("ERROR OCCURED"); return;
})

fs.readFile("./text/fs1.txt", "utf8", (err, data) => {
    !err ? console.log("The file data is: " + data) : console.error("ERROR OCCURED"); return;
})

//If the file does not exist it will create it
//*If the file exists, it will APPEND the content to the file instead of overwriting
fs.appendFile("./text/fs2.txt", "THIS IS THE 2nd fs file\n", (err, data) => {
    !err ? console.log("The data has been successfully appended") : console.error("ERROR OCCURED"); return;
})
