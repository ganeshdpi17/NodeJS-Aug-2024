let add = function (a, b) {
    return a + b; // we have to write return
}
console.log(add(2, 3)); // arrow function has implicit return

let sub = (a, b) => a - b;
console.log(sub(10, 2));