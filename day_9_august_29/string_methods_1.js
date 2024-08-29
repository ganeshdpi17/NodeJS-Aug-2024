let str = 'sachin';

console.log(str.length); // 6
console.log(str[2]); // c
console.log(str.charAt(2)); // c
console.log(str.at(-1)); // n
console.log(str.charAt(-1)); // ''
console.log(str.charCodeAt(1)); //  a - 97
console.log('sachin'.concat(' tendulkar'));  // sachin tendulkar

let str2 = 'entertainment';
console.log(str2.indexOf('n')); // 1
console.log(str2.indexOf('n', 2)); // 8
console.log(str2.lastIndexOf('n')); // 11

console.log(str2.includes('men')); // true
console.log(str2.includes('man')); // false