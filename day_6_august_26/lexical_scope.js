class Student {
    name = 'sanjay';
    demo1() {
        console.log('demo-1 ', this.name);
        function demo2() {
            console.log('demo-2 ', this);
        }
        demo2();
        let demo3 = () => { // lexical scope = demo1 , inside demo1() - this = student
            console.log('demo-1 ', this.name);
        }
        demo3();
    }
}
let std = new Student();
std.demo1();