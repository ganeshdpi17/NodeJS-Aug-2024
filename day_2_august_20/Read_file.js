const fs = require('fs')
const content = fs.readFileSync('./abc.txt', 'utf8')
console.log(content)