let arr = [10, 20, 30, 40, 50, 10, 30, 40, 50, 10, 10, 10, 50, 10];

let uniqueSet = new Set(arr);
console.log(uniqueSet);
let uniqueArr = [...uniqueSet];
console.log(uniqueArr);

// 1 liner to remove duplicate elements from an array
console.log([...new Set(arr)]);