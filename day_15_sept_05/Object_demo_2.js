let user = { name: 'sachin', age: 35, add: 'mumbai' };
console.log(user.length);

let allKeys = Object.keys(user);
console.log(allKeys.length);

console.log(user.hasOwnProperty('name')); // true
console.log('name' in user); // true