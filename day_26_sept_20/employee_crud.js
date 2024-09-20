const express = require('express');
const app = express();

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

app.listen(5000, () => {
    console.log('server running at 5000')
});