class Person {
    constructor(name, age, add) {
        this.name = name;
        this.age = age;
        this.add = add;
    }
}
class Student extends Person {
    constructor(name, age, add, roll, mark) {
        super(name, age, add); // invoke parent's constructor
        this.roll = roll;
        this.mark = mark;
    }
}
let std1 = new Student('Deepak', 32, 'Hyderabad', 101, 92);
console.log(std1);

class Employee extends Person {
    constructor(name, age, add, eId, sal) {
        super(name, age, add); // invoke parent's constructor
        this.eId = eId;
        this.sal = sal;
    }
}
let emp1 = new Employee('ganesan', 26, 'bangalore', 'E111', 5000);
console.log(emp1)