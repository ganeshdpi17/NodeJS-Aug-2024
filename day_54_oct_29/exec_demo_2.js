const { exec } = require('child_process');
const { writeFile } = require('fs');

exec('dir', (error, stdout, stderr) => {
    // if command not found
    if (error) {
        console.log(error.message);
        return;
    }
    // if error while executing the command
    if (stderr) {
        console.log(stderr);
        return;
    }
    writeFile('abc.txt', stdout, (err, data) => {
        if (err) throw err;
        console.log('data written succesfully')
    })
})