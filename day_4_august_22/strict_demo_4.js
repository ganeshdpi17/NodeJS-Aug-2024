'use strict'

let cars = ['tata', 'honda', 'maruti', 'hundai'];
delete cars[1]; // using delete with array is fine
console.log(cars);

let obj = { a: 100, b: 200, c: 300 };
delete obj.b;
console.log(obj)

var a = 10;
var name = 'sachin';
delete a;
delete name;
console.log(a, name)

