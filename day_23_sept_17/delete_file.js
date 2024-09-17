const fs = require('fs');

fs.unlink('./file_3.txt', (err) => {
    if(err) throw err;
    console.log('File Deleted')
});