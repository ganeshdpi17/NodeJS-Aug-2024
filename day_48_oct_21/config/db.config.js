const mongoose = require('mongoose');

exports.connectToDB = function () {
    const url = 'mongodb://localhost:27017/aug_2024';
    try {
        mongoose.connect(url);
        console.log('Database connected succesfully')
    } catch (err) {
        console.log(err);
    }
}