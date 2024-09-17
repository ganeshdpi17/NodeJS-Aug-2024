const fs = require('fs');

fs.rename('file_3.txt', 'file_4.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});
