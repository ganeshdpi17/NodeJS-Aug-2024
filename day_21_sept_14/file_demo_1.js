
const fs = require('fs');

console.log('Hellooooo');

let myPassword = 'Sanjay@1234';

let encryptedPwd = btoa(myPassword); // encrypted - U2FuamF5QDEyMzQ=
console.log(encryptedPwd);

let decryptedPwd = atob(encryptedPwd); // encrypted - Sanjay@1234
console.log(decryptedPwd);

let res = fs.readFileSync('abc.txt','utf-8');
console.log(res)