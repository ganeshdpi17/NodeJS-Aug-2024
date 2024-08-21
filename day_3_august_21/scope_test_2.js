for (var i = 1; i <= 3; i++) {
    console.log('inside loop i value is: ', i); // 1 2 3
}
console.log('outside loop i value is: ', i); // i = 4 , i is not restricted to that loop
// i is visible even outside the loop, which is not correct

for (let j = 1; j <= 3; j++) {
    console.log('inside loop j value is: ', j); // 1 2 3
}
console.log('outside loop j value is: ', j); // ReferenceError: j is not defined