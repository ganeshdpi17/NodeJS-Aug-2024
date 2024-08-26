// 1. funtion declaration
function add(a, b) {
    console.log(a + b);
}
add(2, 3);
add(3, 4);

// 2. Function Expression
let sub = function (a, b) {
    console.log(a - b);
}
sub(10, 2);

// 3. IIFE / Self Invoked
(function (a, b) {
    console.log(a * b);
})(10, 20);

// 4. arrow function  (ES-6  2015)
let div = (a, b) => {
    console.log(a / b);
}
div(10, 2);

