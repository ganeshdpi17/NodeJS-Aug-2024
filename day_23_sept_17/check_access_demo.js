const fs = require('fs');

fs.access('./file_1.txt', fs.R_OK, (err, data) => {
    if (err) throw err;
    console.log('You have Read access')
})
fs.access('./file_1.txt', fs.W_OK, (err, data) => {
    if (err) throw err;
    console.log('You have write access')
})
fs.access('./file_1.txt', fs.X_OK, (err, data) => {
    if (err) throw err;
    console.log('You have Execute access')
})