const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    res.send('Server Running fine')
})
app.get('/temp', async (req, res) => {
    const { city } = req.query;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    const response = await axios.get(url);
    res.send(`<h1>City Name is: ${city} , temperature is ${response.data.main.temp}`);
})
app.listen(5000, () => {
    console.log('server running at port 5000');
});
// http://localhost:5000/temp?city=delhi