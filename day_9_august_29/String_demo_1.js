let str1 = 'Hello';  // String Literal
let str2 = 'Hello';  // String Literal

let str3 = new String('Hello');  // String Object
let str4 = new String('Hello');  // String Object

console.log(typeof str1); // string
console.log(typeof str3); // Object

console.log('str1 is same as str2', str1 == str2); // true
console.log('str1 is same as str3', str1 == str3); // true
console.log('str3 is same as str4', str3 == str4); // false

let expr1 = '2+3+4';
let expr2 = new String('2+3+4');
let expr3 = expr2.valueOf() // valueOf() converts string object to string literal
console.log(eval(expr1)); // 9
console.log(eval(expr2)); // [String: '2+3+4']
console.log(eval(expr3)); // 9
