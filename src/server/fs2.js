const fs = require("fs").promises;

async function fileSystem() {
    try {
        //If the file does not exist before hand, the readFile will not work as it is a callback function.
        //It will wait for it to read the file before function procedes further
        const data = await fs.readFile("./text/fs1_2.txt", "utf8")
        console.log("The file content is: " + data);

        await fs.writeFile("./text/fs1_2.txt", "This is the first file of second fs code")
        console.log("Data written successfully");

        await fs.appendFile("./text/fs2_2.txt", "This is the second file of second fs code\n")
        console.log("Data appended successfully");
    } catch (e) {
        console.error(e);
    }
}
fileSystem()