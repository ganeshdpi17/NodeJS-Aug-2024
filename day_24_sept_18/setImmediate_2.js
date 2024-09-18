const fs = require('fs');

fs.readFile('../day_23_sept_17/file_1.txt', (err, data)=> {
    setTimeout(() => {
        console.log('settimeout - 0  invoked')
    }, 0);
    setImmediate(() => {
        console.log('setImmediate  invoked')
    });
})