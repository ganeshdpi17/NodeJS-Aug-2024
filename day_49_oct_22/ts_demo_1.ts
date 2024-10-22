let a: number = 10;   // number
console.log(a); // 10

a = 'sachin'; // no error
console.log(a); // sachin

let cars: string[] = ['Tata', 'Honda'];
cars.push(30); // yes
console.log(cars)

function add(a: number, b: number) {
    console.log(a + b);
}
add(2, 'ganesan')