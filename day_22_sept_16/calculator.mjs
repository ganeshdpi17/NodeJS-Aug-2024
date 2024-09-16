
export default function square(a) {  // default export
    console.log(a * a);
}
export function cube(a) {   // named export
    console.log(a * a * a);
}
export function fact(n) {   // named export
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}
export var courseName = 'NodeJS'
export var trainerName = 'Sanjay Kumar'
