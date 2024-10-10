const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeModel = require('./employee_model');
const { createClient } = require('redis');

const app = express();
app.use(cors());
app.use(express.json());

let redisClient;

async function connectToDB() {
    mongoose.connect('mongodb://localhost:27017/aug_2024');
    console.log('MongoDB Connection Established');

    redisClient = await createClient()
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

}


app.get('/employees', async (req, res) => {
    const employeesFromRedis = await redisClient.get('employees');
    if (employeesFromRedis) {
        let outPut = { source: 'Redis', data: JSON.parse(employeesFromRedis) }
        res.json(outPut);
    } else {
        let employees = await employeeModel.find({});
        await redisClient.set('employees', JSON.stringify(employees), { EX: 120 });
        let outPut = { source: 'Database', data: employees }
        res.json(outPut);
    }
})
app.get('/employees/:id', async (req, res) => {
    const empId = req.params.id;
    const employeeFromRedis = await redisClient.get(empId);
    if (employeeFromRedis) {
        let outPut = { source: 'Redis', data: JSON.parse(employeeFromRedis) }
        res.json(outPut);
    } else {
        let employee = await employeeModel.find({ eId: empId });
        await redisClient.set(empId, JSON.stringify(employee), { EX: 120 });
        let outPut = { source: 'Database', data: employee }
        res.json(outPut);
    }
})
app.post('/employees', async (req, res) => {
    try {
        const newEmp = new employeeModel(req.body);
        await newEmp.save();
        await redisClient.set(req.body.eId + "", JSON.stringify(req.body), { EX: 120 });
        res.send('Employee Added Succesfully')
    } catch (err) {
        res.status(400).send(err);
    }
})
app.patch('/employees/:id', async (req, res) => {
    try {
        const empId = +req.params.id;
        const payload = req.body;
        console.log(empId, payload)
        let res = await employeeModel.findOneAndUpdate({ eId: 103 }, { name: "sitaaa" }, { new: true, upsert: true })
        res.send(res);
    } catch (err) {
        res.status(400).send(err);
    }
})
app.delete('/employees/:id', async (req, res) => {
    try {
        await employeeModel.deleteOne({ eId: +req.params.id });
        await redisClient.del(req.params.id + "");
        res.send(`Employee ${req.params.id} Deleted Succesfully`)
    } catch (err) {
        console.log(err)
    }
})

app.listen(5000, () => {
    console.log('Server Running at 5000');
    connectToDB()
})