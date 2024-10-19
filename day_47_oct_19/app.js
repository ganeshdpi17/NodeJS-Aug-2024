const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/employee_routes');

const app = express();
app.use(express.json());
app.use(cors());

const url = 'mongodb://localhost:27017/aug_2024';
try {
    mongoose.connect(url);
} catch (err) {
    console.log(err);
}
app.use('/employees', employeeRouter);


app.listen(5000, () => {
    console.log('Server Started')
});


module.exports = app;