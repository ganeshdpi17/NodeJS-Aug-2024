let str1 = 'manoj';
let str2 = 'deepak';

console.log(str1 - str2);

function myCompare(str1, str2) {
    if (str1 < str2) {
        return -1;
    } else if (str2 < str1) {
        return 1;
    } else {
        return 0;
    }
}
console.log(myCompare('deepak', 'manoj')); // -1
console.log(myCompare('deepak', 'bijay')); // 1

console.log('deepak'.localeCompare('manoj'))
console.log('deepak'.localeCompare('bijay'))
console.log('deepak'.localeCompare('deepak'))
console.log('sanjay'.localeCompare('sanjeev'))
