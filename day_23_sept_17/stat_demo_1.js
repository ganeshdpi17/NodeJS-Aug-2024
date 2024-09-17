const fs = require('fs');
// const fs = require('node:fs');

fs.stat('./file_1.txt', (err, stats) => {
    if (err) throw err;

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.size + ' KB')
});