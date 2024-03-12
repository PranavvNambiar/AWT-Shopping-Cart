const mysql = require('mysql2');
const express = require('express')
const bodyparser = require('body-parser');
var app = express()

app.use(bodyparser.json());

// let mysqlConnection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "test",
//     port: 3306
// });

let mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test",
    port: 3306
});


mysqlConnection.connect((err) => {
    if (err) {
        console.log("Connection Failed");
    }
    else {
        console.log("Connection Established Successfully");
    }
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/learner', (req, res) => {
    mysqlConnection.query("SELECT * from learner", (err, rows) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
});

//Router to GET specific learner detail from the MySQL database
//Replace :id with the number in MySQL row.
app.get('/learner/:id', (req, res) => {
    mysqlConnection.query("SELECT * from learner WHERE id=?", [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
});
app.get('/learner/delete/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM learner where id= ?', [req.params.id], (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/learner/update/:id/:name', (req, res) => {
    mysqlConnection.query('UPDATE learner Set name = ? where id= ?', [req.params.name, req.params.id], (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/learner/insert/:id/:name/:age', (req, res) => {
    mysqlConnection.query('INSERT INTO learner VALUES (?,?,?)', [req.params.id, req.params.name, req.params.age], (err, rows) => {
        if (!err) {
            res.send("INSERTED SUCCESSFULLY\n", rows);
        }
        else
            console.log(err);
    })
});
