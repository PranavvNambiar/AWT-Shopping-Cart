const mysql = require("mysql2/promise")
const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv");

const hostname = 'localhost';
const port = 4000;

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

app.post("/submit-form", async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;

    const insertQuery = "INSERT INTO user(firstName, lastName, email, password, gender) VALUES (?,?,?,?,?)";
    try {
        const rows = await db.execute(insertQuery, [firstName, lastName, email, password, gender])
        console.log(rows + "\nUser Added to DB");
        res.send(rows)
    }
    catch (e) {
        console.error(e);
        res.status(500).send(e)
    }
})

app.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})