const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./config/db.config');
const authRouter = require('./routes/auth_routes');
const employeeRouter = require('./routes/employee_routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter)
app.use('/employees', employeeRouter)

app.listen(4000, () => {
    connectToDB();
    console.log('Server running at 4000');
})