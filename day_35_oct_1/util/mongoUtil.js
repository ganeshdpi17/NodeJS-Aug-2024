const { MongoClient } = require('mongodb');

const db_URL = 'mongodb://localhost:27017';
let db;

module.exports = {
    connectToDB: async function () {
        let mongoClient = new MongoClient(db_URL);
        await mongoClient.connect();
        db = mongoClient.db('aug_2024')
        console.log('Connected successfully to database');
    },
    getDB: function () {
        return db;
    }
}
