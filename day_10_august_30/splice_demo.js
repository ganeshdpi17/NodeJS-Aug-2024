let arr = [10, 20, 30, 40, 50];

// arr.splice(index , deleteCount , ...items to add)
arr.splice(2, 2);  // only delete
console.log(arr); // 10 20 50

arr.splice(2, 0, 30, 40); // only insert
console.log(arr); // 10, 20, 30, 40, 50

arr.splice(2, 2, 30, 31, 32); // both insert & delete
console.log(arr); //10, 20, 30, 31, 32, 50


console.log(arr.slice(2,4)); // 30, 31
console.log(arr.slice(2)); // 30, 31, 32, 50
