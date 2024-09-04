let user = {};

user['name'] = 'sanjay';
user['age'] = 40;
user['address'] = "bangalore";

let id = Symbol('my id');
user[id] = 111;

let phn = Symbol('phone no') // 'phone no' this is just the description of the symbol
user[phn] = 1234512345;
console.log(user);

console.log(user['name']); // sanjay
console.log(user['id']);
console.log(user[phn]); // to access value for symbol key

for (key in user) {
    console.log(key + "---" + user[key])
}





