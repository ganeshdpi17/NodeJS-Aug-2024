let cars = ['tata', 'honda', 'maruti', 'hundai','mahindra','toyota'];

// 1. for loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log("============================");

// 2. for-in loop  (ES-6  2015)
for (i in cars) {
    console.log(cars[i]);
}
console.log("============================");

// 3. for-of loop
for (car of cars) {
    console.log(car);
}
console.log("============================");

// 4. forEach()
cars.forEach((ele)=>console.log(ele));


// forEach() :  is HigherOrder Function
// function print() : callback function

/* A function is called higherOrder Function if that function has either of the below 2 abilities
1. a function has the ability to take another function as argument 
2. a function has the ability to return another function
*/