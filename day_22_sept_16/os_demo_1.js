const os = require('os');

console.log(`arch:  ${os.arch()}`);
console.log(`CPUs:  ${os.cpus().length} Core`);
console.log(`Machine:  ${os.machine()} `);
console.log(`Up-time:  ${os.uptime() / 60 / 60} hour`);
console.log(`Home Directory:  ${os.homedir()}`);
console.log(`Temp Directory:  ${os.tmpdir()}`);
console.log(`total memory:  ${os.totalmem / 1024 / 1024 / 1024} GB`);
console.log(`free memory:  ${os.freemem / 1024 / 1024 / 1024} GB`);
console.log(`Platform:  ${os.platform()}`);
console.log(`Release:  ${os.release()}`);
console.log('User name', os.userInfo().username);

