const express = require('express');
const cors = require('cors');
// const http = require('http');
const hostname = 'localhost';
const port = 4000; //!THIS PORT NUMBER AND THE RESPONSE PORT NUMBER NEED TO BE THE SAME

const app = express();
app.use(cors());

// Important Line of Code. This is where we tell our server to use the JSON middleware so it can understand and parse incoming requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;

    console.log(`Username: ${email}, Password: ${password}, Gender: ${gender}`);
    res.send('Form Submitted');
});

app.listen(port, hostname, () => {
    console.log(`Server is running on Port ${hostname}:${port}`);
});