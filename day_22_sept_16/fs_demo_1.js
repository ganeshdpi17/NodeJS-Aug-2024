const fs = require('fs');

fs.readFile('file_1.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data); // buffer data
        console.log(data.toString()); // buffer data
    }
});
// Nodejs Supports error first callback


