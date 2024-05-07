const express = require("express");
const mysql = require("mysql2");
const bodyparser = require("body-parser");

const app = express()
app.use(bodyparser.json())

const port = 8080

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test",
    port: 3306
})

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Success");
    }
    else {
        console.log("Failure");
    }
})

app.listen(port, () => {
    console.log(`Database is listening on ${port}`);
})

app.get('/learner', (req, res) => {
    mysqlConnection.query("SELECT * FROM learner", (err, rows) => {
        if (!err) res.send(rows);
        else console.error(err);
    })
});

app.get('/learner/:id', (req, res) => {
    mysqlConnection.query("SELECT * FROM learner WHERE id=?", [req.params.id], (err, rows) => {
        if (!err) res.send(rows);
        else console.error(err);
    })
});

app.get('/learner/delete/:id', (req, res) => {
    mysqlConnection.query("DELETE FROM learner WHERE id=?", [req.params.id], (err, rows) => {
        if (!err) res.send(rows);
        else console.error(err);
    })
});

app.get('/learner/update/:id/:name', (req, res) => {
    mysqlConnection.query("UPDATE learner SET name=? WHERE id=?", [req.params.name, req.params.id], (err, rows) => {
        if (!err) res.send(rows);
        else console.error(err);
    })
});

app.get('/learner/insert/:id/:name/:age', (req, res) => {
    mysqlConnection.query("INSERT INTO learner VALUES (?,?,?)", [req.params.id, req.params.name, req.params.age], (err, rows) => {
        if (!err) res.send(rows);
        else console.error(err);
    })
});