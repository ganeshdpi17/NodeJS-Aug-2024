let str = 'this is javascript class';

console.log(str.split(' ')); // n+1 occurance
console.log(str.split('')); // every char is an item in the array
console.log(str.split('java')); // [2 items]
console.log(str.split('python')); // [1]
console.log(str.split('this')); // [2]
console.log(str.split('class')); // [2]