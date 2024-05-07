const mysql = require("mysql2");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const hostname = 'localhost';
const port = process.env.PORT || 8080; // Use port from environment variable or default to 8080

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

db.connect((err) => {
    !err ? console.log("DB Connected Successfully") : console.error("DB Connection Failed");
})

app.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}`);
})

app.get("/learner", (req, res) => {
    db.query("SELECT * FROM learner", (err, rows) => {
        !err ? res.send(rows) : res.send(err)
    })
});

app.get("/learner/:id", (req, res) => {
    db.query("SELECT * FROM learner WHERE id = ?", [req.params.id], (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.error(err);
        }
    })
})

app.get("/learner/delete/:id", (req, res) => {
    db.query(`DELETE FROM learner WHERE id=?`, [req.params.id], (err, result) => {
        if (!err) {
            if (result.affectedRows > 0) {
                console.log(`Deleted learner`);
                res.status(200).send("Learner deleted successfully");
            } else {
                console.log(`No learner found`);
                res.status(404).send("No learner found with the specified ID");
            }
        } else {
            console.error(err);
            res.status(500).send("Error deleting learner");
        }
    })
})

app.get("/learner/update/:name/:id", (req, res) => {
    db.query(`UPDATE learner SET name=? WHERE id=?`, [req.params.name, req.params.id], (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            console.error(err);
        }
    })
})

app.get("/learner/insert/:id/:name/:age", (req, res) => {
    db.query(`INSERT INTO learner VALUES (?,?,?)`, [req.params.id, req.params.name, req.params.age], (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            console.error(err);
        }
    });
});
