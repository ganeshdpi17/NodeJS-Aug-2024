const { spawn } = require('child_process');

for (let i = 1; i <= 3; i++) {
    const fileName = `test_${i}.js`;
    const childProcess = spawn('node', [fileName]);

    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}


