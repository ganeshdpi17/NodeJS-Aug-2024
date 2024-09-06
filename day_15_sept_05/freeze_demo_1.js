let obj1 = { a: 10, b: 20 };
obj1.c = 30;    // add a new property - yes
delete obj1.b;  // delete a property - yes
obj1.a = 15;    // modify value
console.log(obj1);  // {a:15 , c:30}
console.log('obj1 is frozen? ', Object.isFrozen(obj1));

let obj2 = { a: 100, b: 200 };
Object.freeze(obj2);
obj2.c = 300;   // add a new property - no
delete obj2.b;  // delete property - no
obj2.a = 150;   // modify value - no
console.log(obj2); // { a: 100, b: 200 };
console.log('obj2 is frozen? ', Object.isFrozen(obj2));