let arr1 = [10, 20, [31, 32]];

let arr2 = [...arr1]; // copy by value - shallow copy
arr1.push(40, 50);
arr1[2].push(33, 34);
console.log(arr1); // [10, 20, [31, 32, 33, 34], 40 ,50];
console.log(arr2); // [10, 20, [31, 32, 33, 34]];
// ShallowCopy:top/first level elements are copied by value, nested arrays are copied by address

let arr3 = [10, 20, [31, 32]];
let arr4 = structuredClone(arr3); // Copy By Value - Deep Copy
arr3.push(40, 50);
arr3[2].push(33, 34);
console.log(arr3); // [10, 20, [31, 32, 33, 34], 40 ,50];
console.log(arr4); // [10, 20, [31, 32]];

/* -A shallow copy of an array is a copy whose nested elements share the same references.
 (Nested arrays will not be copied by value)
-A deep copy of an array is a copy whose nested elements do not share the same references */