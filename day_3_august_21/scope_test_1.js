var a = 10;
let b = 20;
console.log('Global ', a, b);

function f1() {
    var a = 100;
    let b = 200;
    console.log('Function ', a, b);

    if (true) {
        var a = 1000;
        let b = 2000;
        console.log('If Block ', a, b);
    }
}
f1();