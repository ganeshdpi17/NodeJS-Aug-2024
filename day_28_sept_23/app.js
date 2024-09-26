const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRouter = require('./src/routes/employee_routes');
const productRouter = require('./src/routes/product_routes');
const todoRouter = require('./src/routes/todo_routes');
const { logTime } = require('./src/middlewares/logger');
const app = express();

app.use(cors());
app.use(bodyParser.json())
// app.use(express.json());
// app.use(logTime); // this middleware runs for every route

app.use('/employees', employeeRouter);
app.use('/products', productRouter);
app.use('/todos', todoRouter);

app.listen(5000, () => {
    console.log('server running at 5000')
});

