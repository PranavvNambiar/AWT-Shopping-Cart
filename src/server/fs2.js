const fs = require('fs').promises;

async function fileOps() {
    try {
        const data = await fs.readFile('server.txt', 'utf-8');
        console.log("File Content: ", data);

        await fs.writeFile('server.txt', 'This is my first file');
        console.log('File has been written');

        await fs.appendFile('server3.txt', '\n This is the seconds content.');
        console.log("Added content to the file");
    } catch (error) {
        console.error("An error has occured", error);
    }
}
fileOps();