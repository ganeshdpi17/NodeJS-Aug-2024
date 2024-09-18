// in this program we want to connect to database, 1. Dev database 2. QA Database 3. Prod DB
const dotenv = require('dotenv');
dotenv.config();

function connectToDB(url) {
    console.log('Your connection is being established to ', url)
}
let url = process.env.DB_URL;
connectToDB(url)