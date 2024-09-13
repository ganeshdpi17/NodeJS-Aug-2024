const minimist = require('minimist');

const argArr = process.argv.slice(2);
const { name, age, add } = minimist(argArr);
console.log(name, age, add);