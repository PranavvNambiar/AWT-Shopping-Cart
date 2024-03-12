const express = require("express");
const cors = require("cors");
const port = 4000;
const hostname = "localhost";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/submit-form", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;

    console.log(`The first name is ${firstName}, last name is ${lastName}, email is ${email}, password is ${password} & gender is ${gender}`);
    res.send("Form Submitted")
});

app.listen(port, hostname, () => {
    console.log(`Server is listening at ${hostname}:${port}`);
})