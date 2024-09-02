let arr1 = [10, 20];

let arr2 = arr1;     // address / Reference
// it doesn't create a new array, 2 reference variables(arr1,arr2) are pointing to the same arr
arr1.push(30);
arr2.push(40);
console.log(arr1); // 10,20,30,40
console.log(arr2); // 10,20,30,40

// shallow Copy - Copy By Value 
let arr3 = [...arr1];  
arr3.push(50);
console.log(arr1); // 10,20,30,40
console.log(arr3); // 10,20,30,40,50