const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/product_router');
const employeeRouter = require('./routes/employee_router');
const { connectToDB } = require('./util/mongoUtil');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRouter)
app.use('/employees', employeeRouter)
// app.use('/users', userRouter)

app.listen(5000, () => {
    console.log('server running at 5000');
    connectToDB();
})
