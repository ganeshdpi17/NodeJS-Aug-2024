import axios from "axios";
import express from "express";
import { createClient } from 'redis';

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

let app = express();

app.get('/fetchData', async (req, res) => {
    let countryName = req?.query?.country || 'india';
    let url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${countryName}`

    // check if the data is present in REDIS
    const dataInRedis = await redisClient.get(countryName);

    if (dataInRedis) { // if data present in redis
        console.log('data present in redis');
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'REDIS', output });
    } else { // if data is not there in redis
        console.log('data not present in redis');
        let response = await axios.get(url);
        let output = response.data;

        // store the data in redis
        await redisClient.set(countryName, JSON.stringify(output), { EX: 120 });
        console.log('Data stored in redis')
        res.send({ source: 'API', output });
    }
});

app.listen(5000, () => {
    console.log('server started at 5000')
})