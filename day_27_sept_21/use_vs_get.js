const express = require('express');
const cors = require('cors');
const fs = require('fs');
const users = require('../day_25_sept_19/users.json')
const app = express();

app.use(cors()); // cors is middleware

function myLogger(req, res, next) {
    console.log('I am logger middleware')
    fs.appendFileSync('api_usage.txt', `${req.method} Operation on ${req.url} was fired at ${new Date().toLocaleTimeString()}\n`)
    next();
}
app.use(myLogger); // myLogger is a middlware

app.get('/users', (req, res) => { // route
    console.log('GET Request on /users')
    res.json(users)
});
app.post('/users', (req, res) => { // route
    console.log('POST Request on /users')
    res.send('POST Request on /users')
});

app.listen(5000);

