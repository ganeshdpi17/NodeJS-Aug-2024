var a = 10;
let b = 20;
const c = 30; // global

function f1() {
    console.log('f1 starts')
    var d = 40; // function
    courseName = 'NodeJS'; // global
    console.log(a, b, c, d, courseName);
    // console.log(e);  // ReferenceError: e is not defined
    console.log('f1 ends')
}
function f2() {
    console.log('f2 starts')
    var e = 50; // function
    console.log(a, b, c, e, courseName);
    // console.log(d);  // ReferenceError: d is not defined
    console.log('f2 ends')
}
f1();
f2();

