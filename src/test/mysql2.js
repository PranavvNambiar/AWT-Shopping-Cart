const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors")
const port = 4000;

const app = express();
app.use(cors());

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test",
    port: 3306
})

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.post("/submit-form", async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;

    const insertQuery = `INSERT INTO user VALUES (?,?,?,?,?)`;

    try {
        const [rows, fields] = await pool.execute(insertQuery, [firstName, lastName, email, password, gender]);
        console.log(rows.affectedRows + " row/s affected");
        console.log(fields);
        res.send("User is added to the database succesfully");
    } catch (err) {
        console.error("Failed to insert User", err);
        res.status(500).send("Failed to register the user")
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})