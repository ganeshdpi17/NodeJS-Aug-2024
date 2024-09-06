let user = { name: 'sachin', age: 35, add: 'mumbai', 'last name': 'Tendulkar' };

console.log(user.name);
console.log(user['age']);

console.log(user['last name']);
// console.log(user.last name); 

let a = 'add';
console.log(user.a); // undefined
console.log(user[a]); // mumbai

for(let key in user){
    console.log(key+"---"+user.key+"---"+user[key])
}