const mongoose = require('mongoose');

const db_url = 'mongodb://localhost:27017/sept_2024';

module.exports = async function connectToDB() {
    await mongoose.connect(db_url)
} 