console.log(5 == '5'); // 1. typecasting is done, then values are checked 
console.log(5 === '5'); // no typecasting, values are checked

console.log(1 == true); // true
console.log(1 === true); // false

console.log(0 == false); // true
console.log(0 === false); //false

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log([10, 20] == '10,20'); // true
console.log([10, 20] === '10,20');  // false

