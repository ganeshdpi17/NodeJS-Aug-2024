const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()); // middleware which enables to collect client data from request
app.use(cors()); 

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

app.get('/employees', (req, res) => {
    res.json(employees);
});
app.get('/employees/:id', (req, res) => {
    const userId = +req.params.id; // Read Path Parameter
    const emp = employees.find(emp => emp.eId === userId);
    if (emp) {
        res.json(emp);
    } else {
        res.status(400).send('Employee Not Found')
    }
});
app.post('/employees', (req, res) => {
    const newEmp = req.body;
    console.log(newEmp);
    employees.push(newEmp);
    res.sendStatus(201);
    // res.status(201).send('Employee Added Successfully!!!')
});

let user = { name: 'sanjay', age: 50, add: 'bangalore' };
console.log(user);
console.log(`my name is  ${user.name}`);

let x;
console.log(x);

function checkEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEven(4));

app.listen(5000, () => {
    console.log('server running at 5000');
});

class ABC {

}
let obj = new ABC();
console.log(obj);