function f1(a, b, ...c) {
    console.log(a, b, c)
}
f1(2); // a=2  b=undefined c=[]
f1(2, 3, 4); // a=2 b=3 c=[4]
f1(2, 3, 4, 5, 6, 7); // a=2 b=3 c=[4,5,6,7]

// SyntaxError: Rest parameter must be last formal parameter