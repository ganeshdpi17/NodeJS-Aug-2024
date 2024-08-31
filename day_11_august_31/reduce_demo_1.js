let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
});
console.log(sum);

let str = 'SACHIN';
let rev = str.split('').reduce((prev, curr) => {
    return curr + prev;
})
console.log(rev);


let myStr = 'entertainment';
// print character occurance {e:3,n:2,t:2,r:1}
let result = myStr.split('').reduce((res, char) => {
    console.log(res, char)
    if (res[char]) {
        res[char] = res[char] + 1;
    } else {
        res[char] = 1;
    }
    return res;
},{});
console.log(result)