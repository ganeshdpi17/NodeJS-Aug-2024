let obj1 = { a: 10, b: 20 };

let obj2 = obj1; // Reference Copy
let obj3 = Object.assign({}, obj1); // shallow copy(Copy By Value)
obj1.b = 25;

console.log(obj1)
console.log(obj2)
console.log(obj3)