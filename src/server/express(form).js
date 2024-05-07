const express = require("express");
const cors = require("cors")

const hostname = 'localhost';
const port = 4000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/submit-form", (req, res) => {
    const fname = req.body.firstName;
    const email = req.body.email;
    const password = req.body.password;

    console.log(`First Name: ${fname}\nUsername: ${email}\nPassword: ${password}`);
    res.send("Form submmitted")
});

app.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})