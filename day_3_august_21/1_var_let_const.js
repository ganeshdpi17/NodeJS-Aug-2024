var a = 10;
let b = 20;
const c = 30;

a = 15;
b = 25;
console.log(a, b, c);

c = 35; // Error - Assignment to constant variable
console.log(a, b, c);
