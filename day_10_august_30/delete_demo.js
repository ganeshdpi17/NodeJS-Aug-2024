let cars = ['tata', 'honda', 'maruti', 'hundai'];

console.log(cars.length); // 4
delete cars[1];
console.log(cars.length); // 4
console.log(cars);
console.log(cars[1]);

cars.splice(1, 1); // splice(index , #elements to remove , what to insert)
console.log(cars);
