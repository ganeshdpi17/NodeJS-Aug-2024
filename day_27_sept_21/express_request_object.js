const express = require('express');
const users = require('../day_25_sept_19/users.json')
const app = express();

app.get('/users', (req, res) => {
    const { method, url, ip, body, protocol } = req; // object de-structuring
    console.log(method, url, ip, body, protocol);
    res.json(users)
});
// Path Param
app.get('/users/:id', (req, res) => {
    const userId = +req.params.id;
    const user = users.find(user => user.id == userId);
    res.json(user)
});
// Query Param
app.get('/user', (req, res) => {
   let username = req.query.userName;
   const user = users.find(user => user.username == username);
   res.json(user)
});

app.listen(5000);

