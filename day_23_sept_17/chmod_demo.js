const fs = require('fs');

fs.chmod('./file_1.txt', fs.constants.S_IRUSR | fs.constants.S_IWUSR, (err, data) => {
    if (err) throw err;
    console.log('assigning read& write access to the file')
})
