const express = require('express')
const cors = require('cors');
const { newPayment, checkStatus } = require('./payment');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/payment', newPayment);
app.post('/status/:txnId', checkStatus);

app.listen(5000, () => {
    console.log('srver running at 5000')
});

