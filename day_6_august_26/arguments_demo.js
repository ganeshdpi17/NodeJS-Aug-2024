function add(a, b) {
    console.log(a + b)
}
add(2, 3);
add(2, 3, 4);  // 3rd argument is ignored

// write a function which can add variable(2arg,3arg,4arg) arguments
function sum() { // arguments is a pre-defined keyword
    let res = 0;
    for (ele of arguments) {
        res = res + ele
    }
    console.log('sum is ', res)
}
sum(2, 3); // 5
sum(2, 3, 4); // 9
sum(2, 3, 4, 5); // 14

let addition = () => { // arguments keyword doesn't work inside an arrow function
    let res = 0;
    for (ele of arguments) {
        res = res + ele
    }
    console.log('sum is ', res)
}
addition(2, 3);