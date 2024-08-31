let arr = [10, 20, [30, [40, [50, 60, [70, [80, [90, 100]]]]]]];
console.log(arr.length);

let res1 = arr.flat(); // flattens - 1 level
console.log(res1);

let res2 = arr.flat(2); // depth = 2
console.log(res2); 

let res3 = arr.flat(Infinity);
console.log(res3); // dept = n