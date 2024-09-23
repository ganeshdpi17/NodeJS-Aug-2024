const express = require('express');
const cors = require('cors');
const employeeRouter = require('./src/routes/employee_routes');
const productRouter = require('./src/routes/product_routes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/employees', employeeRouter);
app.use('/products', productRouter);

app.listen(5000, () => {
    console.log('server running at 5000')
});

