let arr = [10, 20, 30, 40, 50, 10, 30, 50, 10, 40, 50, 10, 30, 10];

let uniqueSet = new Set(arr);
console.log(uniqueSet);
console.log(Array.isArray(uniqueSet))

let uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);
console.log(Array.isArray(uniqueArr))