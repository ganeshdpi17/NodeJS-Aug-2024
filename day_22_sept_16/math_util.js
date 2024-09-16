console.log('Math util starts here')
function add(a, b) {
    console.log(`Addition of ${a} and ${b} is: ${a + b}`);
}
function sub(a, b) {
    console.log(`Subtraction of ${a} and ${b} is: ${a - b}`);
}
function mul(a, b) {
    console.log(`Multiplication of ${a} and ${b} is: ${a * b}`);
}
console.log('Math util ends here');
module.exports = { add, sub, mul };


