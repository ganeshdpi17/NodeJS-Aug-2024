function add(a, b) {
    return a + b;
}

function isEven(n) {
    return n % 2 == 0 ? 'even' : 'odd';
}

let cars = ['Tata', 'Honda'];

function addNewCar(newCar) {
    cars.push(newCar);
}

findMax = (a, b, c) => {
    const max = Math.max(a, b, c);
    return max;
}

module.exports = {
    add,
    isEven,
    addNewCar,
    cars,
    findMax
}