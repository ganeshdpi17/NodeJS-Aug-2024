const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    res.send('Server Running fine')
})
app.get('/users/:userName', async (req, res) => {
    const userName = req.params.userName;
    let response = await axios.get(`https://api.github.com/users/${userName}`);
    res.json(response.data);
})
app.listen(5000, () => {
    console.log('server running at port 5000');
});