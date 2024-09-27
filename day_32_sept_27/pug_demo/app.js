const express = require('express');
const app = express();

const users = ['Sanjay', 'Likith', 'Naresh', 'Abhisek', 'Vicky'];

app.engine('pug', require('pug').__express)
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/users', (req, res) => {
    res.render('users',{users});
})

app.listen(5000);