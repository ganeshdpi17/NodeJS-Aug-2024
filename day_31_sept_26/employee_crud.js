const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(express.json()); // middleware which enables to collect client data from request
app.use(morgan('tiny'));

// app.use(cors()); // Default Configuration - whitelists all domain, all methods

/* let corsOption = {
    origin: 'https://www.w3schools.com'
}
app.use(cors(corsOption)); // add cors middleware */

const whitelist = ['https://www.w3schools.com', 'https://www.tutorialspoint.com']
const corsOption = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOption));



employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

app.get('/employees', (req, res) => {
    res.json(employees)
})
app.get('/employees/:id', (req, res) => {
    const userId = +req.params.id; // Read Path Parameter
    const emp = employees.find(emp => emp.eId === userId);
    res.json(emp);
})
app.post('/employees', (req, res) => {
    const newEmp = req.body;
    console.log(newEmp)
    employees.push(newEmp);
    res.sendStatus(201);
})

app.listen(5000, () => {
    console.log('server running at 5000')
});