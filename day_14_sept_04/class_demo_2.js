// ES-6  (2015)
class Student {
    constructor(roll, name, course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
}
let std1 = new Student(101, 'Ramana', 'NodeJS')
let std2 = new Student(102, 'Ganesan', 'ReactJS')

console.log(std1)
console.log(std2)
