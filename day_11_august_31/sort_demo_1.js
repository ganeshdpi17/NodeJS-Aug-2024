let arr1 = [10, 20, 40, 50, 30];
arr1.sort();
console.log(arr1)

let arr2 = ['tata', 'honda', 'Maruti', 'hundai'];
arr2.sort();
console.log(arr2)

let arr3 = [101, 102, 8, 7, 9, 105, 91, 92, 99];
arr3.sort(); // this is not numeric sort , this is string sort
console.log(arr3);

// to perform numeric sort, add callback function (compareFn)
// arr3.sort((a, b) => a - b); // ascending
arr3.sort((a, b) => b - a); // descending
console.log(arr3);