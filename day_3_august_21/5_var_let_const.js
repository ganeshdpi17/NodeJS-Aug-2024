function varTest() {
    var a = 10; // function 
    if (true) {
        var b = 20; // even though 'b' is declared inside a block, it's scope is function
    }
    console.log('function ', a, b); // b variable is accessible outside the block
}
varTest();

function letTest() {
    let x = 100; // function
    if (true) {
        let y = 200; // block
    }
    console.log('function ', x); // 100
    console.log('function ', y); // ReferenceError: y is not defined
}
letTest();