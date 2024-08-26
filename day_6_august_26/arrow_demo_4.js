class Student {
    fName = 'sachin';
    lName = 'tendulkar';

    fullname1() { // this = how the function is called , this = Student
        console.log(this.fName, this.lName);
    }
    fullname2 = () => { // this = where the function is written,this = Sudent
        console.log(this.fName, this.lName)
    }
}
let std = new Student();
/* std.fullname1()
std.fullname2() */

setTimeout(std.fullname1, 2000); 
setTimeout(std.fullname2, 4000); 

// whenever a regular function is called inside setTimeout , inside that regular function this = global

// arrow function : doesn't care from where the function is being invoked, where it is written