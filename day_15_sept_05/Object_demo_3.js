class Student {
    constructor(roll, name, course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
}
Student.prototype.clgName = 'nareshIT';

let std1 = new Student(101, 'Ramana', 'NodeJS');
console.log(std1.hasOwnProperty('roll')); // true
console.log(std1.hasOwnProperty('dob')); // false
console.log(std1.hasOwnProperty('clgName')); // false

console.log('name' in std1); // true
console.log('clgName' in std1); // true
console.log('dob' in std1); // false