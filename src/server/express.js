const express = require( 'express' );
const app = express();
const port = 4000; //!THIS PORT NUMBER AND THE RESPONSE PORT NUMBER NEED TO BE THE SAME
const cors = require('cors');
app.use(cors());

const http = require('http');
const hostname = 'localhost';

// Important Line of Code. This is where we tell our server to use the JSON middleware so it can understand and parse incoming 
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.post('/submit-form', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(`Username: ${email}, Password: ${password}`);
    res.send('Form Submitted');
});

app.listen(port, ()=>{
    console.log(`Server is running on Port ${port}`);
});