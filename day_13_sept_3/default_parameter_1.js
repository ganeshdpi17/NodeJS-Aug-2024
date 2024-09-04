function add(a, b, c = 0) { // Default parameter
    console.log(a + b + c); // 2+3+undefined
}
add(2, 3)
add(2, 3, 4)