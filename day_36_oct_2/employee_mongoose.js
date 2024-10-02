const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeModel = require('./employee_model');

const app = express();
app.use(cors());
app.use(express.json());

function connectToDB() {
    mongoose.connect('mongodb://localhost:27017/aug_2024');
    console.log('MongoDB Connection Established')
}

app.get('/employees', async (req, res) => {
    let employees = await employeeModel.find({});
    res.json(employees);
})
app.get('/employees/:id', async (req, res) => {
    console.log(req.params.id)
    let employee = await employeeModel.find({ eId: +req.params.id });
    res.json(employee);
})
app.post('/employees', async (req, res) => {
    try {
        const newEmp = new employeeModel(req.body);
        await newEmp.save();
        res.send('Employee Added Succesfully')
    } catch (err) {
        // console.log(err)
        res.status(400).send(err);
    }
})
app.delete('/employees/:id', async (req, res) => {
    try {
        await employeeModel.deleteOne({ eId: +req.params.id });
        res.send(`Employee ${req.params.id} Deleted Succesfully`)
    } catch (err) {
        console.log(err)
    }
})

app.listen(5000, () => {
    console.log('Server Running at 5000');
    connectToDB()
})