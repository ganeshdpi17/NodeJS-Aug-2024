let user = { name: 'sachin', age: 35, add: 'mumbai' };

let allKeys = Object.keys(user);
let allValues = Object.values(user);
let allEntries = Object.entries(user);

console.log(allKeys);
console.log(allValues);
console.log(allEntries);

let userObj = Object.fromEntries(allEntries);
console.log(userObj);