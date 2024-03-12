const express = require('express');
const app = express();
const port = 4000; //* SAME AS RegistrationForm.JSX
const cors = require('cors');
app.use(cors());

// Ensure you're requiring the promise version of mysql2
const mysql = require('mysql2/promise');

// Create a pool using mysql2 promise-based API
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test",
    port: 3308
});

// Built-in middleware for json body parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', async (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const insertQuery = 'INSERT INTO user (firstName, lastName, email, password) VALUES (?,?,?,?)';

    try{
        const [rows, fields] = await pool.execute(insertQuery, [firstName, lastName, email, password]);

        res.send('User Registered Successfully');
    }
    catch(err){
        console.error("Failed to insert user: ",err);
        res.status(500).send("Failed to Register User");
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  