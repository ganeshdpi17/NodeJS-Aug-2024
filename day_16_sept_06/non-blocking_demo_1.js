const fs = require('fs');

console.log('Global code execution starts here');
fs.readFile('./abc.txt', (err, data) => { // non blocking code
    console.log(data.toString());
});
for (let i = 1; i <= 10000; i++) { // blocking
    console.log(i)
}
console.log('Global code execution ends here'); 
