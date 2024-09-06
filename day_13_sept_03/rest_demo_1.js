function add(a, b) {
    console.log(a + b);
}
add(2, 3)
add(2, 3, 4)

// ES-5 arguments
function sum() {
    let sum = 0;
   // console.log(Array.isArray(arguments))
    for (ele of arguments) { // arguments is not an array
        sum = sum + ele;
    }
    console.log(sum)
}
sum(2, 3) // 5
sum(2, 3, 4) // 9
sum(2, 3, 4, 5) // 14