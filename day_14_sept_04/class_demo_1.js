// maintain all the trainer details in a javascript program

function add(a, b) { // normal function
    console.log(a + b);
}
add(2, 3); // we dont call normal functions with 'new' 

// ES-5
function Trainer(name, course, time) { // constructor function (class)
    this.name = name;
    this.course = course;
    this.time = time;
}
let trainer1 = new Trainer('Sanjay Samantra', 'NodeJS', '8.00 pm')
let trainer2 = new Trainer('Harikrishna', 'CoreJava', '11.00 am')
let trainer3 = new Trainer('Satish Gupta', 'Python', '4.00 pm')

console.log(trainer1)
console.log(trainer2)
console.log(trainer3)