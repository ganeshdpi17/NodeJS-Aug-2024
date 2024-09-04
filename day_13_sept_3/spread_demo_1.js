// REST Parameter  : when ... is seen inside a function with parameter name
// Spread Operator : Spread/Split/Break  array/Object values in to individual values

function f1(a, b, ...c) { // rest
    console.log(a, b, c)
}

console.log(Math.max(10, 20, 30, 40)); // 40
let arr = [10, 20, 30, 40]
console.log(Math.max(arr)); // NaN , max() is expecting few number values, not an array
console.log(Math.max(...arr)); // spread

let arr2 = [...arr1];  // Shallow copy